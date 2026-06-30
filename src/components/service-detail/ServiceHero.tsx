import { ReactNode } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  problemTitle: string;
  problems: string[];
  ctaText: string;
  ctaLink: string;
  visual?: ReactNode;
}

export default function ServiceHero({
  headline,
  subheadline,
  problemTitle,
  problems,
  ctaText,
  ctaLink,
  visual,
}: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {subheadline}
            </p>
            <Button variant="primary" size="lg" to={ctaLink}>
              {ctaText}
            </Button>

            <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">{problemTitle}</h3>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {visual && (
            <div className="relative">
              {visual}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
