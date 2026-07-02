import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const headlineWords = ['AI', 'Systems', 'That', 'Turn'];

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const range = (value: number, start: number, end: number) => clamp01((value - start) / (end - start));

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateHeroScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollable = Math.max(1, rect.height - window.innerHeight * 0.2);
        const progress = clamp01(-rect.top / scrollable);

        const subFade = range(progress, 0.25, 0.55);
        const ctaFade = range(progress, 0.25, 0.55);
        const headlineFade = range(progress, 0.35, 0.75);
        const videoSettle = range(progress, 0.2, 0.8);

        section.style.setProperty('--hero-scroll-p', progress.toFixed(3));
        section.style.setProperty('--hero-headline-y', `${(-54 * headlineFade).toFixed(1)}px`);
        section.style.setProperty('--hero-headline-opacity', (1 - headlineFade * 0.75).toFixed(3));
        section.style.setProperty('--hero-sub-opacity', (1 - subFade).toFixed(3));
        section.style.setProperty('--hero-sub-y', `${(-16 * subFade).toFixed(1)}px`);
        section.style.setProperty('--hero-cta-opacity', (1 - ctaFade).toFixed(3));
        section.style.setProperty('--hero-cta-y', `${(18 * ctaFade).toFixed(1)}px`);
        section.style.setProperty('--hero-video-scale', (1 - videoSettle * 0.14).toFixed(3));
        section.style.setProperty('--hero-video-opacity', (0.9 - videoSettle * 0.45).toFixed(3));
        section.style.setProperty('--hero-label-a', (1 - range(progress, 0.22, 0.42)).toFixed(3));
        section.style.setProperty('--hero-label-b', (1 - range(progress, 0.32, 0.54)).toFixed(3));
        section.style.setProperty('--hero-label-c', (1 - range(progress, 0.42, 0.66)).toFixed(3));
      });
    };

    updateHeroScroll();
    window.addEventListener('scroll', updateHeroScroll, { passive: true });
    window.addEventListener('resize', updateHeroScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateHeroScroll);
      window.removeEventListener('resize', updateHeroScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-scroll-shell relative min-h-[115vh] flex items-center pt-20 overflow-hidden bg-[#030712]"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/7 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Premium neural video layer */}
      <div className="hero-neural-stage pointer-events-none absolute inset-y-0 right-0 z-0 w-full overflow-hidden">
        <div className="absolute right-[-8%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="neural-orbit absolute right-[-18%] top-1/2 z-[1] h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-secondary/15 md:right-[0%] md:h-[520px] md:w-[520px] lg:right-[7%] lg:h-[560px] lg:w-[560px]" />
        <div className="neural-orbit neural-orbit-delayed absolute right-[-8%] top-1/2 z-[1] h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-primary/10 md:right-[6%] md:h-[380px] md:w-[380px] lg:right-[11%] lg:h-[420px] lg:w-[420px]" />
        <div className="hero-video-motion absolute inset-y-0 right-[-22%] w-full md:right-[-8%] lg:right-0 lg:w-[62%]">
          <video
            className="neural-head-video absolute inset-0 h-full w-full object-contain"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/neural-head-poster.jpg"
          >
            <source src="/videos/neural-head-360.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="neural-scan-line absolute inset-y-[16%] right-[18%] z-[2] w-px bg-gradient-to-b from-transparent via-secondary/60 to-transparent lg:right-[10%]" />
        <div className="hero-floating-label hero-floating-label-a neural-engine-card absolute right-[5%] top-[18%] z-[3] hidden w-56 rounded-2xl border border-white/10 bg-[#030712]/40 p-4 backdrop-blur-xl md:block lg:right-[7%]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-secondary/80">AI Engine</p>
          <p className="mt-2 text-sm font-semibold text-white">Neural automation core</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="neural-progress h-full rounded-full bg-gradient-to-r from-primary via-secondary to-white" />
          </div>
        </div>
        <div className="hero-floating-label hero-floating-label-b neural-signal-card absolute bottom-[19%] right-[12%] z-[3] rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-200 backdrop-blur-xl">
          360° customer response loop
        </div>
        <div className="hero-floating-label hero-floating-label-c absolute right-[18%] top-[62%] z-[3] hidden rounded-full border border-secondary/15 bg-[#030712]/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/70 backdrop-blur-xl md:block">
          Processing intent
        </div>
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-r from-[#030712] via-[#030712]/75 to-[#030712]/20 lg:w-[70%] lg:via-[#030712]/35 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030712] via-[#030712]/75 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_45%,rgba(0,209,255,0.12),transparent_34%),linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.88)_38%,rgba(3,7,18,0.52)_64%,rgba(3,7,18,0.84)_100%)]" />
      <div className="hero-bottom-veil pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-[#05070f] via-[#05070f]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-10 lg:gap-12 items-center">

          {/* LEFT: Text content */}
          <div className="max-w-3xl">
            {/* Cinematic badge — appears after the neural head emerges */}
            <div className="hero-badge mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_16px_rgba(0,209,255,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gray-200">AI Automation Studio</span>
            </div>

            <div className="hero-scroll-headline">
              {/* Headline — choreographed to the 7-second head rotation */}
              <h1
                className="mb-4 text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[3rem] xl:text-[3rem]"
              >
                <span className="mb-2 flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
                  {headlineWords.map((word, index) => (
                    <span key={word} className="hero-word-mask inline-block overflow-hidden pb-1">
                      <span
                        className="hero-word block text-white"
                        style={{ animationDelay: `${1200 + index * 80}ms` }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
                <span className="hero-gradient-reveal relative mb-2 inline-block text-[1em] text-transparent">
                  Missed Opportunities
                </span>
                <span className="hero-revenue-line block text-white">
                  Into <span className="hero-revenue-shine">Revenue.</span>
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="hero-scroll-sub">
              <p
                className="hero-subheadline mb-6 max-w-2xl text-base leading-relaxed text-gray-300 xl:text-lg"
              >
                LitX Media builds AI phone callers, chatbots and automations that capture leads, reply instantly and keep your business moving 24/7.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="hero-scroll-cta">
              <div
                className="hero-cta-row mb-5 flex flex-col gap-4 sm:flex-row"
              >
                <Button variant="primary" size="md" to="/contatti" className="hero-cta hero-cta-primary group">
                  Book a Strategy Call
                  <ArrowRight className="hero-cta-arrow w-5 h-5" />
                </Button>
                <Button variant="outline" size="md" to="/portfolio" className="hero-cta hero-cta-secondary group">
                  See What We Build
                  <ArrowRight className="hero-cta-arrow w-5 h-5 opacity-70" />
                </Button>
              </div>
            </div>

            {/* Trust line */}
            <div
              className="hero-trust-line text-sm text-gray-500"
            >
              Voice AI <span>•</span> Chatbots <span>•</span> CRM Automations <span>•</span> Lead Reactivation
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
