import { useRef } from 'react';
import { Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-full p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <blockquote className="text-gray-300 leading-relaxed mb-6 text-base">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/15 bg-white/[0.04] flex-shrink-0">
            <img
              src={testimonial.imageUrl}
              alt={`${testimonial.name}, ${testimonial.role}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {testimonial.name}
            </p>
            <p className="text-gray-500 text-sm">
              {testimonial.role} @ {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
