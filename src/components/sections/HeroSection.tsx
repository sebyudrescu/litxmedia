import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const headlineWords = ['AI', 'Systems', 'That', 'Turn'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030712]">
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
        <div className="absolute inset-y-0 right-[-22%] w-full md:right-[-8%] lg:right-0 lg:w-[62%]">
          <video
            className="neural-head-video absolute inset-0 h-full w-full object-contain opacity-90"
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
        <div className="neural-engine-card absolute right-[5%] top-[18%] z-[3] hidden w-56 rounded-2xl border border-white/10 bg-[#030712]/40 p-4 backdrop-blur-xl md:block lg:right-[7%]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-secondary/80">AI Engine</p>
          <p className="mt-2 text-sm font-semibold text-white">Neural automation core</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="neural-progress h-full rounded-full bg-gradient-to-r from-primary via-secondary to-white" />
          </div>
        </div>
        <div className="neural-signal-card absolute bottom-[19%] right-[12%] z-[3] rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-200 backdrop-blur-xl">
          360° customer response loop
        </div>
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-r from-[#030712] via-[#030712]/75 to-[#030712]/20 lg:w-[70%] lg:via-[#030712]/35 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_45%,rgba(0,209,255,0.12),transparent_34%),linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.88)_38%,rgba(3,7,18,0.52)_64%,rgba(3,7,18,0.84)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-10 lg:gap-12 items-center">

          {/* LEFT: Text content */}
          <div className="max-w-3xl">
            {/* Cinematic badge — appears after the neural head emerges */}
            <div className="hero-badge mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_16px_rgba(0,209,255,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gray-200">AI Automation Studio</span>
            </div>

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

            {/* Sub-headline */}
            <p
              className="hero-subheadline mb-6 max-w-2xl text-base leading-relaxed text-gray-300 xl:text-lg"
            >
              LitX Media builds AI phone callers, chatbots and automations that capture leads, reply instantly and keep your business moving 24/7.
            </p>

            {/* CTA buttons */}
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
