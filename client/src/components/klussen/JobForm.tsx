import { useState, useRef } from "react";
import { submitKlus } from "@/lib/supabase";

const CATEGORIES = [
  { id: "Loodgieter",   emoji: "🔧", label: "Loodgieter" },
  { id: "Elektricien",  emoji: "⚡", label: "Elektricien" },
  { id: "Schilder",     emoji: "🎨", label: "Schilder" },
  { id: "Timmerman",    emoji: "🪚", label: "Timmerman" },
  { id: "IKEA montage", emoji: "🛋️", label: "IKEA montage" },
  { id: "Schoonmaak",   emoji: "🧹", label: "Schoonmaak" },
];

const POSTCODE_REGEX = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;
const PHONE_REGEX    = /^(06|6)[0-9]{8}$/;

export default function JobForm() {
  const [step,        setStep]        = useState(1);
  const [category,    setCategory]    = useState("");
  const [description, setDescription] = useState("");
  const [postcode,    setPostcode]    = useState("");
  const [naam,        setNaam]        = useState("");
  const [telefoon,    setTelefoon]    = useState("");
  const [success,     setSuccess]     = useState(false);
  const [error,       setError]       = useState<string | null>(null);
  const [submitting,  setSubmitting]  = useState(false);
  const [postcodeErr, setPostcodeErr] = useState(false);
  const [phoneErr,    setPhoneErr]    = useState(false);
  const honeypotRef  = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef(Date.now());

  const canStep2 = description.trim().length > 10 && postcode.trim().length >= 6;
  const canStep3 = naam.trim().length > 1 && telefoon.replace(/\s/g, "").length >= 9;

  /* Auto-advance: select category → step 2 after 350ms flash */
  const pickCat = (id: string) => {
    setCategory(id);
    setTimeout(() => setStep(2), 350);
  };

  const handleSubmit = async () => {
    if (honeypotRef.current?.value) { setSuccess(true); return; }
    if (Date.now() - startTimeRef.current < 8000) { setSuccess(true); return; }

    const pc = postcode.trim().toUpperCase();
    const ph = telefoon.replace(/\s/g, "");

    if (!POSTCODE_REGEX.test(pc)) { setPostcodeErr(true); return; }
    if (!PHONE_REGEX.test(ph))    { setPhoneErr(true);    return; }

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

  const input =
    "w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm " +
    "placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none transition-colors";

  /* ── Success state ── */
  if (success) {
    return (
      <div
        id="job-form"
        className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden max-w-[500px] mx-auto mb-5"
      >
        <div className="h-[3px] bg-[#FF6A00]" />
        <div className="p-8 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center text-2xl text-green-600">
            ✓
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Je klus is geplaatst!</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            We zoeken nu een vakman bij jou in de buurt.
            <br />Je hoort binnen <strong className="text-gray-700">2 uur</strong> van ons.
          </p>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/31612345678?text=Hoi%2C%20ik%20heb%20net%20een%20klus%20geplaatst%20via%20Smakly!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20be5c] text-white font-semibold rounded-xl text-sm transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Liever via WhatsApp?
          </a>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div
      id="job-form"
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden max-w-[500px] mx-auto mb-5 shadow-md"
    >
      {/* Progress bar */}
      <div className="h-[3px] bg-gray-100">
        <div
          className="h-full bg-[#FF6A00] transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-7">
        {/* Step dots */}
        <div className="flex gap-1.5 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                s < step ? "bg-green-400" : s === step ? "bg-[#FF6A00]" : "bg-gray-100"
              }`}
            />
          ))}
        </div>

        {/* ── Step 1: Category (auto-advance) ── */}
        {step === 1 && (
          <div>
            <p className="text-base font-semibold text-gray-900 mb-1">Wat voor klus is het?</p>
            <p className="text-xs text-gray-400 mb-5">Kies een categorie om te beginnen</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => pickCat(c.id)}
                  className={`flex flex-col items-center justify-center gap-2 min-h-[95px] p-4 rounded-xl border transition-all duration-200 ${
                    category === c.id
                      ? "border-[#FF6A00] bg-[#FF6A00]/[0.07] shadow-sm scale-[1.04]"
                      : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:scale-[1.03] hover:border-[#FF6A00]"
                  }`}
                >
                  <span className="text-2xl leading-none">{c.emoji}</span>
                  <span className="text-xs font-semibold text-gray-800 leading-tight text-center">
                    {c.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 2: Description + postcode ── */}
        {step === 2 && (
          <div>
            <p className="text-base font-semibold text-gray-900 mb-1">Vertel iets meer</p>
            <p className="text-xs text-gray-400 mb-5">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-base">{CATEGORIES.find(c => c.id === category)?.emoji}</span>
                <span className="font-medium text-gray-600">{category}</span>
              </span>
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={500}
              placeholder="Bijv: lekkende kraan in de badkamer, al 2 dagen..."
              className={`${input} resize-none mb-3`}
              autoFocus
            />
            <input
              type="text"
              value={postcode}
              onChange={(e) => { setPostcode(e.target.value); setPostcodeErr(false); }}
              placeholder="Postcode (bijv. 1011 AB)"
              autoComplete="postal-code"
              maxLength={7}
              className={`${postcodeErr
                ? "w-full py-3 px-4 bg-gray-50 border border-red-400 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                : input} mb-6`}
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
              onClick={() => setStep(3)}
              disabled={!canStep2}
              className="w-full py-3.5 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-xl text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Volgende →
            </button>
          </div>
        )}

        {/* ── Step 3: Contact ── */}
        {step === 3 && (
          <div>
            <p className="text-base font-semibold text-gray-900 mb-1">Hoe bereiken we je?</p>
            <p className="text-xs text-gray-400 mb-5">Laatste stap — bijna klaar!</p>
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
              autoComplete="name"
              maxLength={80}
              className={`${input} mb-3`}
              autoFocus
            />
            <div className="flex gap-2 mb-6">
              <div className="flex items-center gap-1 py-3 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-500 shrink-0">
                🇳🇱 +31
              </div>
              <input
                type="tel"
                value={telefoon}
                onChange={(e) => { setTelefoon(e.target.value); setPhoneErr(false); }}
                placeholder="06 12 34 56 78"
                autoComplete="tel"
                maxLength={12}
                className={phoneErr
                  ? "flex-1 py-3 px-4 bg-gray-50 border border-red-400 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                  : "flex-1 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none transition-colors"
                }
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canStep3 || submitting}
              className="w-full py-3.5 bg-[#FF6A00] hover:bg-[#e85f00] text-white font-bold rounded-xl text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              {submitting ? "Bezig..." : "✓ Klus plaatsen — gratis"}
            </button>
            <p className="text-center text-[11px] text-gray-400 mt-3">
              Geen spam · Geen verplichtingen · Jouw gegevens zijn veilig
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
