import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/servizi/${service.slug}`}>
        <div className="relative h-full p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.06] transition-all duration-500 group-hover:-translate-y-2">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-5">
              {service.shortDescription}
            </p>
            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
              Scopri di piu\u0300
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
