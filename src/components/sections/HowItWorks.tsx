import { useRef } from 'react';
import {
  Calendar,
  FileText,
  Rocket,
  CheckCircle,
  Headphones,
} from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';

const steps = [
  {
    icon: Calendar,
    title: 'Consulenza Gratuita',
    description:
      '30 minuti per capire il tuo business e le opportunit\u00e0. Zero impegno.',
  },
  {
    icon: FileText,
    title: 'Proposta Personalizzata',
    description:
      'Creiamo una soluzione su misura con prezzi chiari e timeline precisa.',
  },
  {
    icon: Rocket,
    title: 'Sviluppo Rapido',
    description:
      'Lavoriamo velocemente con aggiornamenti costanti. 2-3 giorni per la maggior parte dei progetti.',
  },
  {
    icon: CheckCircle,
    title: 'Launch & Training',
    description:
      'Consegna finale, test e formazione completa su come usare il sistema.',
  },
  {
    icon: Headphones,
    title: 'Supporto Continuo',
    description:
      'Assistenza disponibile per qualsiasi necessit\u00e0. Manutenzione opzionale.',
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
        Step {index + 1}
      </span>

      <h3 className="text-base font-bold text-white mb-2 leading-tight">
        {step.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </div>
  );
}

function MobileStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-5 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {index < steps.length - 1 && (
          <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
        )}
      </div>
      <div className="pb-10">
        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
          Step {index + 1}
        </span>
        <h3 className="text-lg font-bold text-white mt-1 mb-2">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <Container className="relative">
        <SectionHeading
          label="Come Funziona"
          title="Come Funziona Lavorare con LitX Media"
          subtitle="Processo semplice, veloce e trasparente. Dal primo contatto al lancio in pochi giorni."
        />

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <TimelineStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden max-w-lg mx-auto">
          {steps.map((step, index) => (
            <MobileStep key={index} step={step} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="primary" to="/contatti">
            Inizia Oggi
          </Button>
        </div>
      </Container>
    </section>
  );
}
