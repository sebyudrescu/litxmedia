import { useRef } from 'react';
import {
  Stethoscope,
  Sparkles,
  SprayCan,
  UtensilsCrossed,
  Briefcase,
} from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from '../../hooks/useInView';

const sectors = [
  { icon: Stethoscope, label: 'Healthcare', description: 'Studi medici, dentistici e cliniche' },
  { icon: Sparkles, label: 'Beauty', description: 'Centri estetici e parrucchieri' },
  { icon: SprayCan, label: 'Cleaning', description: 'Imprese di pulizia e facility' },
  { icon: UtensilsCrossed, label: 'Food & Beverage', description: 'Ristoranti, bar e catering' },
  { icon: Briefcase, label: 'Professional Services', description: 'Consulenti, studi e professionisti' },
];

function SectorCard({
  sector,
  index,
}: {
  sector: (typeof sectors)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const Icon = sector.icon;

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
        <Icon className="w-7 h-7 text-gray-300" />
      </div>
      <h3 className="text-white font-semibold mb-1">{sector.label}</h3>
      <p className="text-gray-500 text-sm">{sector.description}</p>
    </div>
  );
}

export default function SectorsSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5">
      <Container>
        <SectionHeading
          label="Settori"
          title="Lavoriamo Con Diversi Settori"
          subtitle="La nostra esperienza copre molteplici industrie, ma non ci limitiamo a queste."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.label} sector={sector} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
