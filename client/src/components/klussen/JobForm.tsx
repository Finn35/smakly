import { useRef, useState } from "react";

const OPTIONS = [
  { id: "ikea-montage", label: "IKEA montage", emoji: "🛠️" },
  { id: "reparatie", label: "Reparatie", emoji: "🔧" },
  { id: "installatie", label: "Installatie", emoji: "⚡" },
  { id: "anders", label: "Anders", emoji: "📝" },
];

const POSTCODE_REGEX = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;

export default function JobForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [postcode, setPostcode] = useState("");
  const [description, setDescription] = useState("");
  const [postcodeErr, setPostcodeErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const postcodeInputRef = useRef<HTMLInputElement>(null);

  const pickCategory = (id: string) => {
    setCategory(id);
    setTimeout(() => setStep(2), 180);
  };

  const handleSubmit = async () => {
    const normalizedPostcode = postcode.trim().toUpperCase();

    if (!POSTCODE_REGEX.test(normalizedPostcode)) {
      setPostcodeErr(true);
      postcodeInputRef.current?.focus();
      return;
    }

    setPostcodeErr(false);
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setSuccess(true);
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
            We nemen snel contact met je op.
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
          style={{ width: `${step === 1 ? 50 : 100}%` }}
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
            <p className="text-base font-semibold text-gray-900 mb-1">Wat moet er gebeuren?</p>
            <p className="text-xs text-gray-400 mb-5">Kies wat het beste past</p>
            <div className="grid grid-cols-2 gap-3">
              {OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => pickCategory(option.id)}
                  className={`flex flex-col items-center justify-center gap-2 min-h-[108px] p-4 rounded-xl border transition-all duration-200 ${
                    category === option.id
                      ? "border-[#FF6A00] bg-[#FF6A00]/[0.07] shadow-sm scale-[1.02]"
                      : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#FF6A00]"
                  }`}
                >
                  <span className="text-2xl leading-none">{option.emoji}</span>
                  <span className="text-sm font-semibold text-gray-800 leading-tight text-center">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-base font-semibold text-gray-900 mb-1">Wat is je postcode?</p>
            <p className="text-xs text-gray-400 mb-5">Optioneel kun je je klus kort toelichten</p>

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
                : `${inputClassName} mb-0`}
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
                disabled={submitting}
                className="w-2/3 h-12 bg-[#FF6A00] hover:bg-[#e85f00] text-white font-bold rounded-xl text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {submitting ? "Bezig..." : "Verstuur aanvraag"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
