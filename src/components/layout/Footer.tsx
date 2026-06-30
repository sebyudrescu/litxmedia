import { Link } from 'react-router-dom';
import { Zap, Mail, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { label: 'Chatbot Intelligente 24/7', to: '/servizi/chatbot-ai' },
  { label: 'Siti Web Professionali', to: '/servizi/siti-web-professionali' },
  { label: 'Google Review Automation', to: '/servizi/google-review-automation' },
  { label: 'Database Reactivation', to: '/servizi/database-reactivation' },
  { label: 'Automazioni Personalizzate', to: '/servizi/automazioni-personalizzate' },
];

const companyLinks = [
  { label: 'Chi Siamo', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contatti', to: '/contatti' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'Termini di Servizio', to: '/termini-servizio' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                LitX<span className="text-primary">Media</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Aiutiamo i business a crescere con soluzioni digitali e
              automazioni su misura. Risultati misurabili, delivery in 2-3
              giorni.
            </p>
            <a
              href="mailto:info@litxmedia.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@litxmedia.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Servizi
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Azienda
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contatti
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Prenota una consulenza gratuita e scopri come possiamo aiutarti.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-1.5 text-primary hover:text-secondary text-sm font-medium transition-colors duration-200"
            >
              Prenota Consulenza
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} LitX Media. Tutti i diritti
            riservati.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-gray-400 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
