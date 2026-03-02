import { useState } from "react";
import { submitContactMessage } from "@/lib/supabase";

export default function KlussenFooter() {
  const [open,       setOpen]       = useState(false);
  const [naam,       setNaam]       = useState("");
  const [email,      setEmail]      = useState("");
  const [bericht,    setBericht]    = useState("");
  const [sending,    setSending]    = useState(false);
  const [sent,       setSent]       = useState(false);
  const [err,        setErr]        = useState(false);

  const canSend = naam.trim().length > 1 && email.includes("@") && bericht.trim().length > 5;

  const handleSend = async () => {
    setSending(true);
    setErr(false);
    try {
      await submitContactMessage({ naam: naam.trim(), email: email.trim(), bericht: bericht.trim() });
      setSent(true);
    } catch {
      setErr(true);
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setNaam(""); setEmail(""); setBericht(""); setSent(false); setErr(false); }, 300);
  };

  const input =
    "w-full py-2.5 px-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 " +
    "placeholder:text-gray-400 focus:border-[#FF6A00] focus:bg-white focus:outline-none transition-colors";

  return (
    <>
      <footer className="bg-gray-900 py-6 px-6">
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2025 Smakly · Amsterdam · Alleen lokale vakmensen
          </p>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setOpen(true)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              Contact
            </button>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200 transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-gray-200 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>

      {/* ── Contact modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={handleClose} />

          {/* Card */}
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Orange top line */}
            <div className="h-[3px] bg-[#FF6A00]" />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-base font-bold text-gray-900">Neem contact op</h2>
                  <p className="text-xs text-gray-500 mt-0.5">We reageren binnen 1 werkdag</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>

              {sent ? (
                /* Success state */
                <div className="py-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600">
                    ✓
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Bericht verstuurd!</p>
                  <p className="text-xs text-gray-500">We nemen zo snel mogelijk contact met je op.</p>
                  <button
                    onClick={handleClose}
                    className="mt-5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                /* Form */
                <div className="space-y-3">
                  <input
                    type="text"
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    placeholder="Jouw naam"
                    autoComplete="name"
                    maxLength={80}
                    className={input}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mailadres"
                    autoComplete="email"
                    maxLength={100}
                    className={input}
                  />
                  <textarea
                    value={bericht}
                    onChange={(e) => setBericht(e.target.value)}
                    placeholder="Je bericht..."
                    rows={3}
                    maxLength={1000}
                    className={`${input} resize-none`}
                  />

                  {err && (
                    <p className="text-xs text-red-500">Er ging iets mis. Probeer het opnieuw.</p>
                  )}

                  <button
                    onClick={handleSend}
                    disabled={!canSend || sending}
                    className="w-full py-3 bg-[#FF6A00] hover:bg-[#e85f00] text-white font-semibold rounded-lg text-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors mt-1"
                  >
                    {sending ? "Versturen..." : "Verstuur bericht →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
