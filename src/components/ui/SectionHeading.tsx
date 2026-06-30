import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? 'text-gray-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-600' : 'text-gray-400'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
