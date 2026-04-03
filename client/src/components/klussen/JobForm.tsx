import { useRef, useState } from "react";
import { submitKlus } from "@/lib/supabase";

declare const gtag: (...args: unknown[]) => void;

const OPTIONS = [
  { id: "ikea-montage", label: "IKEA montage", emoji: "🛠️", backendCategory: "IKEA montage" },
  { id: "reparatie", label: "Reparatie", emoji: "🔧", backendCategory: "Timmerman" },
  { id: "installatie", label: "Installatie", emoji: "⚡", backendCategory: "Elektricien" },
  { id: "anders", label: "Anders", emoji: "📝", backendCategory: "Timmerman" },
];

const POSTCODE_REGEX = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;
const PHONE_REGEX = /^(06|6)[0-9]{8}$/;

export default function JobForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [postcode, setPostcode] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcodeErr, setPostcodeErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef(Date.now());
  const postcodeInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const resolveBackendCategory = () => {
    const selectedOption = OPTIONS.find((option) => option.id === category);
    const lowerDescription = description.toLowerCase();

    if (category === "reparatie" || category === "installatie" || category === "anders") {
      if (/(kraan|lek|lekkage|afvoer|wc|toilet|douche|water)/.test(lowerDescription)) return "Loodgieter";
      if (/(stroom|lamp|stopcontact|schakelaar|elektra|elektr)/.test(lowerDescription)) return "Elektricien";
      if (/(verf|schilder|muur|plafond)/.test(lowerDescription)) return "Schilder";
    }

    return selectedOption?.backendCategory ?? "Timmerman";
  };

  const handleSubmit = async () => {
    if (honeypotRef.current?.value) {
      setSuccess(true);
      return;
    }

    if (Date.now() - startTimeRef.current < 3000) {
      setSuccess(true);
      return;
    }

    const normalizedPostcode = postcode.trim().toUpperCase();
    const normalizedPhone = phone
      .replace(/\s/g, "")
      .replace(/^\+31/, "0")
      .replace(/^0031/, "0");

    if (!POSTCODE_REGEX.test(normalizedPostcode)) {
      setPostcodeErr(true);
      setStep(2);
      postcodeInputRef.current?.focus();
      return;
    }

    if (!PHONE_REGEX.test(normalizedPhone)) {
      setPhoneErr(true);
      phoneInputRef.current?.focus();
      return;
    }

    setPhoneErr(false);
    setSubmitting(true);

    try {
      const selectedOption = OPTIONS.find((option) => option.id === category);
      const backendCategory = resolveBackendCategory();
      const enrichedDescription = [
        `Aanvraagtype: ${selectedOption?.label ?? "Onbekend"}`,
        description.trim() ? `Omschrijving: ${description.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      await submitKlus({
        category: backendCategory,
        description: enrichedDescription,
        postcode: normalizedPostcode,
        naam: name.trim(),
        telefoon: `+31${normalizedPhone.replace(/^0/, "")}`,
      });

      if (typeof gtag !== "undefined") {
        gtag("event", "conversion", {
          send_to: "AW-989714763",
          event_category: "form",
          event_label: "quote_intent_submitted",
        });
      }

      setSuccess(true);
    } catch {
      setPhoneErr(false);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClassName =
    "w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm " +
    "placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none transition-colors";

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
          <h3 className="text-lg font-bold text-gray-900 mb-2">Bedankt!</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We nemen snel contact met je op met een prijsindicatie.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="job-form"
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden max-w-[500px] mx-auto mb-5 shadow-md"
    >
      <div className="h-[3px] bg-gray-100">
        <div
          className="h-full bg-[#FF6A00] transition-all duration-500 ease-out"
          style={{ width: `${(step / 2) * 100}%` }}
        />
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex gap-1.5 mb-6">
          {[1, 2].map((currentStep) => (
            <div
              key={currentStep}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                currentStep < step ? "bg-green-400" : currentStep === step ? "bg-[#FF6A00]" : "bg-gray-100"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#FF6A00] mb-2">
              Stap 1 van 2
            </p>
            <p className="text-base font-semibold text-gray-900 mb-1">Wat moet er gebeuren?</p>
            <p className="text-xs text-gray-400 mb-5">Kies wat het beste past bij jouw klus</p>
            <div className="grid grid-cols-2 gap-3">
              {OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setCategory(option.id)}
                  className={`flex flex-col items-center justify-center gap-2 min-h-[108px] p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    category === option.id
                      ? "border-[#FF6A00] bg-[#FF6A00]/[0.08] shadow-md ring-2 ring-[#FF6A00]/10 scale-[1.02]"
                      : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#FF6A00]/70"
                  }`}
                >
                  <span className="text-2xl leading-none">{option.emoji}</span>
                  <span className="text-sm font-semibold text-gray-800 leading-tight text-center">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="sticky bottom-0 pt-4 mt-4 bg-white/95 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!category}
                className="w-full h-12 bg-[#FF6A00] hover:bg-[#e85f00] text-white font-bold rounded-xl text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Volgende stap
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#FF6A00] mb-2">
              Stap 2 van 2
            </p>
            <p className="text-base font-semibold text-gray-900 mb-1">Waar en wat moet er gebeuren?</p>
            <p className="text-xs text-gray-400 mb-5">Zo kunnen we je sneller helpen met een duidelijke prijs</p>

            <input
              ref={postcodeInputRef}
              type="text"
              value={postcode}
              onChange={(e) => {
                setPostcode(e.target.value);
                setPostcodeErr(false);
              }}
              placeholder="Bijv. 1011 AB"
              autoComplete="postal-code"
              maxLength={7}
              className={postcodeErr
                ? "w-full h-11 px-4 bg-gray-50 border border-red-400 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                : inputClassName}
              autoFocus
            />
            {postcodeErr && (
              <p className="text-red-500 text-xs mt-2 mb-3">
                Vul een geldige postcode in, bijvoorbeeld 1011 AB
              </p>
            )}
            {!postcodeErr && <div className="mb-3" />}

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={300}
              placeholder="Korte omschrijving van je klus (optioneel)"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none resize-none transition-colors mb-4"
            />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jouw naam"
              autoComplete="name"
              maxLength={80}
              className={`${inputClassName} mb-3`}
            />

            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
            />

            <div className="flex gap-2 mb-1">
              <div className="flex items-center gap-1 py-3 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-500 shrink-0">
                🇳🇱 +31
              </div>
              <input
                ref={phoneInputRef}
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneErr(false);
                }}
                placeholder="06 12 34 56 78"
                autoComplete="tel"
                maxLength={15}
                className={phoneErr
                  ? "flex-1 h-11 px-4 bg-gray-50 border border-red-400 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                  : "flex-1 h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none transition-colors"
                }
              />
            </div>
            {phoneErr && (
              <p className="text-red-500 text-xs mb-4 ml-1">
                Vul een geldig Nederlands mobiel nummer in
              </p>
            )}
            {!phoneErr && <div className="mb-5" />}

            <div className="sticky bottom-0 pt-4 bg-white/95 backdrop-blur-sm">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition-colors"
                >
                  Terug
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting || !name.trim() || !phone.trim()}
                  className="w-2/3 h-12 bg-[#FF6A00] hover:bg-[#e85f00] text-white font-bold rounded-xl text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  {submitting ? "Bezig..." : "Bekijk mijn prijs"}
                </button>
              </div>
              <p className="text-center text-[11px] text-gray-400 mt-3">
                Geen verplichtingen • Snelle reactie
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
