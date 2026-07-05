import { useEffect, useRef } from 'react';
import { ArrowRight, PhoneMissed, TimerOff, Workflow } from 'lucide-react';
import Button from '../ui/Button';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const range = (value: number, start: number, end: number) => clamp01((value - start) / (end - start));

const signalCards = [
  {
    icon: PhoneMissed,
    title: 'Missed calls',
    copy: 'Captured before intent disappears.',
  },
  {
    icon: TimerOff,
    title: 'Slow replies',
    copy: 'Replaced by instant response systems.',
  },
  {
    icon: Workflow,
    title: 'Manual follow-up',
    copy: 'Turned into automated revenue loops.',
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let frame = 0;
    let duration = 10.054;

    const updateHeroScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollable = Math.max(1, rect.height - window.innerHeight);
        const progress = clamp01(-rect.top / scrollable);

        const introOut = range(progress, 0.16, 0.34);
        const problemIn = range(progress, 0.25, 0.42);
        const problemOut = range(progress, 0.55, 0.72);
        const modulesIn = range(progress, 0.58, 0.76);
        const finalIn = range(progress, 0.78, 0.94);
        const videoSettle = range(progress, 0.18, 0.92);

        section.style.setProperty('--hero-scroll-p', progress.toFixed(3));
        section.style.setProperty('--hero-intro-opacity', (1 - introOut).toFixed(3));
        section.style.setProperty('--hero-intro-y', `${(-46 * introOut).toFixed(1)}px`);
        section.style.setProperty('--hero-problem-opacity', (problemIn * (1 - problemOut)).toFixed(3));
        section.style.setProperty('--hero-problem-y', `${(26 - problemIn * 26 - problemOut * 28).toFixed(1)}px`);
        section.style.setProperty('--hero-modules-opacity', modulesIn.toFixed(3));
        section.style.setProperty('--hero-modules-y', `${(34 - modulesIn * 34).toFixed(1)}px`);
        section.style.setProperty('--hero-final-opacity', finalIn.toFixed(3));
        section.style.setProperty('--hero-final-y', `${(24 - finalIn * 24).toFixed(1)}px`);
        section.style.setProperty('--hero-video-scale', (1 - videoSettle * 0.08).toFixed(3));

        const targetTime = Math.min(duration - 0.04, Math.max(0, progress * duration));
        if (Number.isFinite(targetTime) && Math.abs(video.currentTime - targetTime) > 0.035) {
          video.currentTime = targetTime;
        }
      });
    };

    const onLoadedMetadata = () => {
      duration = video.duration || duration;
      video.pause();
      updateHeroScroll();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    updateHeroScroll();
    window.addEventListener('scroll', updateHeroScroll, { passive: true });
    window.addEventListener('resize', updateHeroScroll);

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      window.removeEventListener('scroll', updateHeroScroll);
      window.removeEventListener('resize', updateHeroScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-cinematic-scroll relative h-[320vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="hero-scroll-scrub-video absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          poster="/images/hero-cinematic-scroll-poster.jpg"
        >
          <source src="/videos/hero-cinematic-scroll.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none relative z-10 flex h-full items-center px-4 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="hero-scroll-intro max-w-3xl pointer-events-auto">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_16px_rgba(0,209,255,0.8)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80">AI Automation Studio</span>
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.2rem] xl:text-[3.7rem]">
                AI systems that turn <span className="hero-cinematic-gradient">missed opportunities</span> into revenue.
              </h1>

              <p className="mb-7 max-w-2xl text-base leading-relaxed text-white/78 xl:text-lg">
                LitX Media builds AI phone callers, chatbots and automations that capture leads, reply instantly and keep your business moving 24/7.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="md" to="/contatti" className="hero-cta group">
                  Book a Strategy Call
                  <ArrowRight className="hero-cta-arrow h-5 w-5" />
                </Button>
                <Button variant="outline" size="md" to="/portfolio" className="hero-cta group border-white/20 bg-black/18 backdrop-blur-sm">
                  See What We Build
                  <ArrowRight className="hero-cta-arrow h-5 w-5 opacity-70" />
                </Button>
              </div>
            </div>

            <div className="hero-scroll-problem pointer-events-none ml-auto max-w-xl rounded-[2rem] border border-white/10 bg-black/18 p-6 text-white backdrop-blur-sm md:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-secondary/80">The brain is processing the leak</p>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] md:text-5xl">
                Most businesses do not need more leads. They need <span className="hero-cinematic-gradient">faster systems.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                The real loss happens between interest and response: missed calls, slow replies, manual follow-up and abandoned intent.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-scroll-modules pointer-events-none absolute inset-x-0 bottom-10 z-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {signalCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-black/22 p-5 text-white backdrop-blur-sm"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Module {index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-scroll-final pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-4 text-center sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] text-white md:text-6xl">
            The AI engine stays fixed. The business delay disappears.
          </p>
        </div>
      </div>
    </section>
  );
}
