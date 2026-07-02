import { useEffect, useRef, useState } from 'react';
import { PhoneMissed, TimerOff, Workflow, Briefcase, Clock, Users, Star } from 'lucide-react';
import Container from '../ui/Container';
import StatCounter from '../ui/StatCounter';
import { useInView } from '../../hooks/useInView';

const stats = [
  { icon: Briefcase, value: '50+', label: 'Progetti', description: 'Completati con successo' },
  { icon: Clock, value: '2-3', label: 'Giorni', description: 'Delivery medio' },
  { icon: Users, value: '4+', label: 'Anni', description: 'Di esperienza' },
  { icon: Star, value: '100%', label: 'Soddisfatti', description: 'Clienti in tutta Italia' },
];

const problemCards = [
  { icon: PhoneMissed, title: 'Missed calls become missed revenue', detail: 'Intent disappears when nobody answers in the moment.' },
  { icon: TimerOff, title: 'Slow replies kill intent', detail: 'Every delay lowers trust before the sale even starts.' },
  { icon: Workflow, title: 'Manual follow-up does not scale', detail: 'A business cannot grow on reminders, notes and luck.' },
];

const manifesto = [
  { text: 'Every missed call is lost intent.', keyword: 'missed call' },
  { text: 'Every slow reply lowers trust.', keyword: 'slow reply' },
  { text: 'Every manual task creates friction.', keyword: 'manual task' },
  { text: 'AI systems remove the delay.', keyword: 'AI systems' },
  { text: 'LitX Media turns response into revenue.', keyword: 'revenue' },
];

function HighlightLine({ text, keyword }: { text: string; keyword: string }) {
  const lower = text.toLowerCase();
  const start = lower.indexOf(keyword.toLowerCase());
  if (start === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, start)}
      <span className="cinematic-keyword">{text.slice(start, start + keyword.length)}</span>
      {text.slice(start + keyword.length)}
    </>
  );
}

function StatItem({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
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
        <div className="system-icon w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <StatCounter value={stat.value} label={stat.label} />
      <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
    </div>
  );
}

export default function SocialProofBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeLine, setActiveLine] = useState(0);
  const isInViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(isInViewRef, { threshold: 0.18 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateActiveLine = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const total = Math.max(1, rect.height - window.innerHeight * 0.55);
        const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - rect.top) / total));
        setActiveLine(Math.min(manifesto.length - 1, Math.floor(progress * manifesto.length)));
      });
    };

    updateActiveLine();
    window.addEventListener('scroll', updateActiveLine, { passive: true });
    window.addEventListener('resize', updateActiveLine);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveLine);
      window.removeEventListener('resize', updateActiveLine);
    };
  }, []);

  return (
    <section ref={sectionRef} className="cinematic-problem-panel relative -mt-28 overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[#05070f] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 via-violet-500/5 to-transparent" />
      <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_0%,rgba(0,209,255,0.11),transparent_35%),radial-gradient(circle_at_18%_34%,rgba(139,92,246,0.09),transparent_34%)]" />

      <Container className="relative">
        <div ref={isInViewRef} className="mx-auto max-w-5xl text-center">
          <div className={`panel-kicker mb-6 ${isInView ? 'is-visible' : ''}`}>The business problem</div>
          <h2 className="panel-headline mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white md:text-6xl">
            {['Most businesses', 'do not need more leads.', 'They need faster systems.'].map((line, index) => (
              <span
                key={line}
                className={`panel-headline-line block ${isInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 160}ms` }}
              >
                {index === 2 ? (
                  <>They need <span className="cinematic-keyword">faster systems.</span></>
                ) : line}
              </span>
            ))}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {problemCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`system-module-card panel-card ${isInView ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${520 + index * 130}ms` }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="system-icon relative flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/15 bg-secondary/10">
                      <span className="status-pulse-dot absolute -right-1 -top-1" />
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary/60">Signal</span>
                  </div>
                  <h3 className="text-left text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-left text-sm leading-relaxed text-gray-500">{card.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cinematic-manifesto mx-auto mt-20 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl md:p-10">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
            Neural processing sequence
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          </div>
          <div className="space-y-5">
            {manifesto.map((line, index) => (
              <p
                key={line.text}
                className={`manifesto-line ${index === activeLine ? 'is-active' : ''}`}
              >
                <HighlightLine text={line.text} keyword={line.keyword} />
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
