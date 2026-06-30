import { useRef } from 'react';
import { Shield, Zap, MessageSquare, ThumbsUp } from 'lucide-react';
import Container from '../ui/Container';
import { useInView } from '../../hooks/useInView';

const badges = [
  { icon: Shield, label: 'Sicurezza & Privacy' },
  { icon: Zap, label: 'Consegna Rapida' },
  { icon: MessageSquare, label: 'Supporto Dedicato' },
  { icon: ThumbsUp, label: 'Soddisfatti o Rimborsati' },
];

export default function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="py-12 border-t border-white/5">
      <Container>
        <div
          ref={ref}
          className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-gray-500"
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
