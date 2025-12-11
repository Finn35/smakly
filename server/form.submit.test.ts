import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";
import * as notification from "./_core/notification";

// Mock the database and notification functions
vi.mock("./db", () => ({
  createFormSubmission: vi.fn(),
  getAllFormSubmissions: vi.fn(),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("form.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a valid form with all required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(db.createFormSubmission).mockResolvedValue({} as any);
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const formData = {
      serviceType: "plumber",
      urgency: "today",
      postcode: "1234AB",
      languagePreference: "dutch",
      name: "John Doe",
      email: "john@example.com",
      phone: "+31612345678",
    };

    const result = await caller.form.submit(formData);

    expect(result).toEqual({ success: true });
    expect(db.createFormSubmission).toHaveBeenCalledWith(formData);
    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "New Handyman Request",
      content: expect.stringContaining("john@example.com"),
    });
  });

  it("successfully submits form with 'other' service type", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(db.createFormSubmission).mockResolvedValue({} as any);
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const formData = {
      serviceType: "other",
      serviceTypeOther: "Garden maintenance",
      urgency: "week",
      postcode: "5678CD",
      languagePreference: "english",
      name: "Jane Smith",
      email: "jane@example.com",
    };

    const result = await caller.form.submit(formData);

    expect(result).toEqual({ success: true });
    expect(db.createFormSubmission).toHaveBeenCalledWith(formData);
    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "New Handyman Request",
      content: expect.stringContaining("Garden maintenance"),
    });
  });

  it("successfully submits form with 'other' language preference", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(db.createFormSubmission).mockResolvedValue({} as any);
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const formData = {
      serviceType: "electrical",
      urgency: "not-urgent",
      postcode: "9012EF",
      languagePreference: "other",
      languagePreferenceOther: "Spanish",
      name: "Carlos Rodriguez",
      email: "carlos@example.com",
    };

    const result = await caller.form.submit(formData);

    expect(result).toEqual({ success: true });
    expect(db.createFormSubmission).toHaveBeenCalledWith(formData);
    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "New Handyman Request",
      content: expect.stringContaining("Spanish"),
    });
  });

  it("rejects form with missing required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const invalidFormData = {
      serviceType: "",
      urgency: "today",
      postcode: "1234AB",
      languagePreference: "dutch",
      name: "John Doe",
      email: "john@example.com",
    };

    await expect(caller.form.submit(invalidFormData)).rejects.toThrow();
    expect(db.createFormSubmission).not.toHaveBeenCalled();
  });

  it("rejects form with invalid email", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const invalidFormData = {
      serviceType: "plumber",
      urgency: "today",
      postcode: "1234AB",
      languagePreference: "dutch",
      name: "John Doe",
      email: "invalid-email",
    };

    await expect(caller.form.submit(invalidFormData)).rejects.toThrow();
    expect(db.createFormSubmission).not.toHaveBeenCalled();
  });

  it("includes phone number in notification when provided", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(db.createFormSubmission).mockResolvedValue({} as any);
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const formData = {
      serviceType: "painting",
      urgency: "week",
      postcode: "3456GH",
      languagePreference: "turkish",
      name: "Mehmet Yilmaz",
      email: "mehmet@example.com",
      phone: "+31687654321",
    };

    await caller.form.submit(formData);

    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "New Handyman Request",
      content: expect.stringContaining("+31687654321"),
    });
  });

  it("shows 'Not provided' in notification when phone is missing", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(db.createFormSubmission).mockResolvedValue({} as any);
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const formData = {
      serviceType: "repairs",
      urgency: "today",
      postcode: "7890IJ",
      languagePreference: "dutch",
      name: "Pieter van Dijk",
      email: "pieter@example.com",
    };

    await caller.form.submit(formData);

    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "New Handyman Request",
      content: expect.stringContaining("Not provided"),
    });
  });
});
