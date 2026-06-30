import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended: boolean;
  index: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  recommended,
  index,
}: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
            Consigliato
          </span>
        </div>
      )}
      <div
        className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
          recommended
            ? 'border-primary/50 bg-white/[0.06] shadow-xl shadow-primary/10 scale-[1.02]'
            : 'border-white/10 bg-white/[0.03] hover:border-white/20'
        }`}
      >
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <div className="mb-8">
          <span className="text-4xl font-bold text-white">{price}\u20AC</span>
          <span className="text-gray-500 ml-1">una tantum</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={recommended ? 'primary' : 'outline'}
          to="/contatti"
          className="w-full"
        >
          {recommended ? 'Inizia Ora' : 'Richiedi Preventivo'}
        </Button>
      </div>
    </div>
  );
}
