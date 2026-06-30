import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const reassuranceItems = [
  'Consulenza gratuita',
  'Zero impegno',
  'Risposte in 24h',
];

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto a Far Crescere il Tuo Business?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Prenota una consulenza gratuita di 30 minuti. Analizziamo insieme
            come possiamo aiutarti.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2.5 px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-2xl shadow-white/10"
          >
            Prenota Consulenza Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {reassuranceItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
