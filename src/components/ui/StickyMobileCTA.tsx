import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const nearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 200;
      setVisible(scrollY > 400 && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-5">
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
          <div>
            <div className="text-white text-sm font-semibold">Consulenza gratuita</div>
            <div className="text-gray-400 text-xs">Zero impegno · Risposta in 24h</div>
          </div>
          <Link
            to="/contatti"
            className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap hover:bg-primary-dark transition-colors flex-shrink-0"
          >
            Ottieni Consulenza
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
