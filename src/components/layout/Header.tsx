import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { services } from '../../data/services';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Servizi', to: '/servizi', hasDropdown: true },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Chi Siamo', to: '/about' },
    { label: 'Contatti', to: '/contatti' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070f]/72 backdrop-blur-2xl border-b border-secondary/10 shadow-2xl shadow-cyan-950/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              LitX<span className="text-primary">Media</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={`nav-glow-link flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(link.to)
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  <div
                    className={`absolute top-full left-0 mt-1 w-72 py-2 rounded-xl bg-[#161616] border border-white/10 shadow-2xl transition-all duration-200 ${
                      servicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.id}
                          to={`/servizi/${service.slug}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-200"
                        >
                          <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-sm text-white font-medium">
                              {service.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="border-t border-white/5 mt-2 pt-2 px-4">
                      <Link
                        to="/servizi"
                        className="block py-2 text-sm text-primary hover:text-secondary transition-colors"
                      >
                        Vedi tutti i servizi
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`nav-glow-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" size="sm" to="/contatti">
              Prenota Consulenza Gratuita
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link, index) =>
            link.hasDropdown ? (
              <div key={link.label} className={`mobile-menu-item ${mobileOpen ? 'is-open' : ''}`} style={{ transitionDelay: `${index * 55}ms` }}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400'
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/servizi/${service.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      to="/servizi"
                      className="block px-4 py-2.5 text-sm text-primary font-medium"
                    >
                      Tutti i servizi
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`mobile-menu-item ${mobileOpen ? 'is-open' : ''} px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-white bg-white/10'
                    : 'text-gray-400'
                }`}
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Button variant="primary" to="/contatti" className="w-full">
              Prenota Consulenza Gratuita
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
