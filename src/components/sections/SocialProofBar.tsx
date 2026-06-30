import { useRef } from 'react';
import { Briefcase, Clock, Users, Star } from 'lucide-react';
import Container from '../ui/Container';
import StatCounter from '../ui/StatCounter';
import { useInView } from '../../hooks/useInView';

const stats = [
  {
    icon: Briefcase,
    value: '50+',
    label: 'Progetti',
    description: 'Completati con successo',
  },
  {
    icon: Clock,
    value: '2-3',
    label: 'Giorni',
    description: 'Delivery medio',
  },
  {
    icon: Users,
    value: '4+',
    label: 'Anni',
    description: 'Di esperienza',
  },
  {
    icon: Star,
    value: '100%',
    label: 'Soddisfatti',
    description: 'Clienti in tutta Italia',
  },
];

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <StatCounter value={stat.value} label={stat.label} />
      <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
    </div>
  );
}

export default function SocialProofBar() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-white/[0.02] to-secondary/[0.03]" />
      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
