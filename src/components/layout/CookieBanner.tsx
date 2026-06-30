import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

type CookieConsent = 'all' | 'necessary' | 'rejected' | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent') as CookieConsent;
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    setConsent(stored);
  }, []);

  const handleConsent = (type: 'all' | 'necessary' | 'rejected') => {
    localStorage.setItem('cookie_consent', type);
    setConsent(type);
    setVisible(false);
  };

  if (consent || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-[#161616] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0 mt-0.5">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-1">
              Rispettiamo la tua privacy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro
              sito. Puoi scegliere quali cookie accettare.{' '}
              <Link
                to="/cookie-policy"
                className="text-primary hover:text-secondary underline"
              >
                Scopri di piu\u0300
              </Link>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleConsent('all')}
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200"
              >
                Accetta tutti
              </button>
              <button
                onClick={() => handleConsent('necessary')}
                className="px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                Solo necessari
              </button>
              <button
                onClick={() => handleConsent('rejected')}
                className="px-5 py-2.5 text-gray-400 text-sm font-medium rounded-lg hover:text-white hover:bg-white/5 transition-colors duration-200"
              >
                Rifiuta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
