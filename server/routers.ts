import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createFormSubmission, getAllFormSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  form: router({
    submit: publicProcedure
      .input(
        z.object({
          serviceType: z.string().min(1, "Service type is required"),
          serviceTypeOther: z.string().optional(),
          urgency: z.string().min(1, "Urgency is required"),
          postcode: z.string().min(1, "Postcode is required"),
          languagePreference: z.string().min(1, "Language preference is required"),
          languagePreferenceOther: z.string().optional(),
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Store form submission in database
        await createFormSubmission(input);

        // Notify owner about new submission
        const notificationContent = `
New handyman request received:
- Service: ${input.serviceType}${input.serviceTypeOther ? ` (${input.serviceTypeOther})` : ''}
- Urgency: ${input.urgency}
- Postcode: ${input.postcode}
- Language: ${input.languagePreference}${input.languagePreferenceOther ? ` (${input.languagePreferenceOther})` : ''}
- Name: ${input.name}
- Email: ${input.email}
- Phone: ${input.phone || 'Not provided'}
        `.trim();

        await notifyOwner({
          title: "New Handyman Request",
          content: notificationContent,
        });

        return { success: true };
      }),

    list: publicProcedure.query(async () => {
      return await getAllFormSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
