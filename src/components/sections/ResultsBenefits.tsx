import { useRef } from 'react';
import { Clock, TrendingUp, Zap } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from '../../hooks/useInView';

const benefits = [
  {
    icon: Clock,
    title: 'Automatizza Processi Ripetitivi',
    description:
      'Risparmia decine di ore ogni settimana eliminando compiti manuali. I tuoi sistemi lavorano 24/7 mentre ti concentri sulla crescita.',
    stats: [
      { value: '10+', label: 'Ore risparmiate/settimana' },
      { value: '24/7', label: 'Operatività continua' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Aumenta Conversioni e Lead',
    description:
      'Siti ottimizzati, chatbot intelligenti e automazioni che catturano più opportunità. Clienti soddisfatti che lasciano recensioni automaticamente.',
    stats: [
      { value: '+40%', label: 'Conversioni medie' },
      { value: '5x', label: 'Più recensioni' },
    ],
  },
  {
    icon: Zap,
    title: 'Da Idea a Realtà in Giorni',
    description:
      'Non settimane o mesi. Consegniamo soluzioni funzionanti in 2-3 giorni. Implementazione rapida, risultati immediati.',
    stats: [
      { value: '2-3', label: 'Giorni di delivery' },
      { value: '< 1', label: 'Mese per il ROI' },
    ],
  },
];

function BenefitRow({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.15 });
  const Icon = benefit.icon;
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={isReversed ? 'lg:order-2' : ''}>
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {benefit.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          {benefit.description}
        </p>
        <div className="flex gap-8">
          {benefit.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-12 h-12 text-primary/60" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 animate-pulse" />
              <div className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      </div>
    </div>
  );
}

export default function ResultsBenefits() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Risultati"
          title="Risultati Concreti per il Tuo Business"
        />
        <div className="space-y-20 lg:space-y-28">
          {benefits.map((benefit, index) => (
            <BenefitRow key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
