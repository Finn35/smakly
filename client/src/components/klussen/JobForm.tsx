import { useState, useRef } from "react";
import { submitKlus } from "@/lib/supabase";

const CATEGORIES = [
  { id: "Loodgieter", emoji: "🔧", label: "Loodgieter" },
  { id: "Elektricien", emoji: "⚡", label: "Elektricien" },
  { id: "Schilder", emoji: "🎨", label: "Schilder" },
  { id: "Timmerman", emoji: "🪚", label: "Timmerman" },
  { id: "IKEA montage", emoji: "🛋️", label: "IKEA montage" },
  { id: "Schoonmaak", emoji: "🧹", label: "Schoonmaak" },
];

const POSTCODE_REGEX = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;
const PHONE_REGEX = /^(06|6)[0-9]{8}$/;

export default function JobForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [postcode, setPostcode] = useState("");
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [postcodeErr, setPostcodeErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef(Date.now());

  const pickCat = (id: string) => {
    setCategory(id);
  };

  const goNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const canStep2 = description.trim().length > 10 && postcode.trim().length >= 6;
  const canStep3 = naam.trim().length > 1 && telefoon.replace(/\s/g, "").length >= 9;

  const handleSubmit = async () => {
    if (honeypotRef.current?.value) {
      setSuccess(true);
      return;
    }
    if (Date.now() - startTimeRef.current < 8000) {
      setSuccess(true);
      return;
    }

    const pc = postcode.trim().toUpperCase();
    const ph = telefoon.replace(/\s/g, "");

    if (!POSTCODE_REGEX.test(pc)) {
      setPostcodeErr(true);
      return;
    }
    if (!PHONE_REGEX.test(ph)) {
      setPhoneErr(true);
      return;
    }

    setPostcodeErr(false);
    setPhoneErr(false);
    setSubmitting(true);
    setError(null);

    try {
      await submitKlus({
        category,
        description: description.trim(),
        postcode: pc,
        naam: naam.trim(),
        telefoon: "+31" + ph.replace(/^0/, ""),
      });
      setSuccess(true);
    } catch {
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (success) {
    return (
      <div id="job-form" className="bg-white rounded-2xl border border-[#EBEBEB] shadow-lg overflow-hidden max-w-[500px] mx-auto mb-5">
        <div className="h-0.5 bg-[#E84500] w-full" />
        <div className="p-10 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#DCFCE7] flex items-center justify-center text-2xl text-[#16A34A] font-bold">
            ✓
          </div>
          <h3 className="text-lg font-bold text-[#0C0C0C] mb-2">Je klus is geplaatst!</h3>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">
            We zoeken nu een vakman bij jou in de buurt.<br />Je hoort binnen <strong>2 uur</strong> van ons.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="job-form" className="bg-white rounded-2xl border border-[#EBEBEB] shadow-lg overflow-hidden max-w-[500px] mx-auto mb-5">
      <div className="h-0.5 bg-[#EBEBEB]">
        <div
          className="h-full bg-[#E84500] rounded-r transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-7">
        {/* Step dots */}
        <div className="flex gap-1.5 mb-5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-0.5 flex-1 rounded transition-colors ${
                s < step ? "bg-[#16A34A]" : s === step ? "bg-[#E84500]" : "bg-[#EBEBEB]"
              }`}
            />
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-base font-bold text-[#0C0C0C] mb-4">Wat voor klus is het?</div>
            <div className="grid grid-cols-3 gap-2 mb-5">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => pickCat(c.id)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] text-center transition-all ${
                    category === c.id ? "border-[#E84500] bg-[#E84500]/[0.08]" : "hover:border-[#E84500] hover:bg-[#E84500]/[0.08]"
                  }`}
                >
                  <span className="text-xl">{c.emoji}</span>
                  <span className="text-xs font-semibold text-[#1A1A1A] leading-tight">{c.label}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              disabled={!category}
              className="w-full py-3.5 bg-[#0C0C0C] text-white font-bold rounded-xl disabled:bg-[#E0E0E0] disabled:text-[#ABABAB] disabled:cursor-not-allowed transition-all"
            >
              Volgende →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-base font-bold text-[#0C0C0C] mb-4">Vertel iets meer</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Bijv: lekkende kraan in de badkamer, al 2 dagen..."
              className="w-full py-3 px-4 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl text-[#0C0C0C] placeholder:text-[#C0BDB9] focus:border-[#E84500] focus:bg-white focus:outline-none resize-none mb-4"
            />
            <input
              type="text"
              value={postcode}
              onChange={(e) => { setPostcode(e.target.value); setPostcodeErr(false); }}
              placeholder="Postcode (bijv. 1011 AB)"
              maxLength={7}
              className={`w-full py-3 px-4 bg-[#FAFAFA] border rounded-xl text-[#0C0C0C] placeholder:text-[#C0BDB9] focus:outline-none mb-5 ${
                postcodeErr ? "border-red-500" : "border-[#EBEBEB] focus:border-[#E84500] focus:bg-white"
              }`}
            />
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
            />
            <button
              type="button"
              onClick={goNext}
              disabled={!canStep2}
              className="w-full py-3.5 bg-[#0C0C0C] text-white font-bold rounded-xl disabled:bg-[#E0E0E0] disabled:text-[#ABABAB] disabled:cursor-not-allowed transition-all"
            >
              Volgende →
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="text-base font-bold text-[#0C0C0C] mb-4">Hoe bereiken we je?</div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}
            <input
              type="text"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              placeholder="Jouw naam"
              className="w-full py-3 px-4 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl text-[#0C0C0C] placeholder:text-[#C0BDB9] focus:border-[#E84500] focus:bg-white focus:outline-none mb-4"
            />
            <div className="flex gap-2 mb-5">
              <div className="flex items-center gap-1 py-3 px-3 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl text-sm font-semibold text-[#6B6B6B] shrink-0">
                🇳🇱 +31
              </div>
              <input
                type="tel"
                value={telefoon}
                onChange={(e) => { setTelefoon(e.target.value); setPhoneErr(false); }}
                placeholder="06 12 34 56 78"
                maxLength={12}
                className={`flex-1 py-3 px-4 bg-[#FAFAFA] border rounded-xl text-[#0C0C0C] placeholder:text-[#C0BDB9] focus:outline-none ${
                  phoneErr ? "border-red-500" : "border-[#EBEBEB] focus:border-[#E84500] focus:bg-white"
                }`}
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canStep3 || submitting}
              className="w-full py-3.5 bg-[#E84500] text-white font-bold rounded-xl disabled:bg-[#E0E0E0] disabled:text-[#ABABAB] disabled:cursor-not-allowed transition-all hover:opacity-90"
            >
              {submitting ? "Bezig..." : "✓ Klus plaatsen — gratis"}
            </button>
            <p className="text-center text-[11px] text-[#C0BDB9] font-medium mt-3">
              Geen spam · Geen verplichtingen · Jouw gegevens zijn veilig
            </p>
          </div>
        )}
      </div>

      {/* Trust strip */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 px-5 pb-8">
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#6B6B6B]">
          <div className="w-4 h-4 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px] text-[#16A34A] font-bold">✓</div>
          Gratis plaatsen
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#6B6B6B]">
          <div className="w-4 h-4 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px] text-[#16A34A] font-bold">✓</div>
          Reactie binnen 2 uur
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#6B6B6B]">
          <div className="w-4 h-4 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px] text-[#16A34A] font-bold">✓</div>
          Lokale vakmensen
        </div>
      </div>
    </div>
  );
}
