import { ArrowRight, Star } from 'lucide-react';
import Button from '../ui/Button';

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
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-full overflow-hidden lg:block">
        <div className="absolute right-[-8%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-[62%]">
          <video
            className="absolute inset-0 h-full w-full object-contain opacity-90"
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
        <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-r from-[#030712] via-[#030712]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_45%,rgba(0,209,255,0.12),transparent_34%),linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.88)_38%,rgba(3,7,18,0.52)_64%,rgba(3,7,18,0.84)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300">Disponibili per nuovi progetti</span>
            </div>

            {/* Social proof above headline */}
            <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '80ms' }}>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300">
                <span className="text-white font-semibold">4.9/5</span>
                {' '}·{' '}
                <span className="text-white font-semibold">200+</span> business italiani soddisfatti
              </span>
            </div>

            {/* Headline — outcome formula */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5 animate-fade-up"
              style={{ animationDelay: '150ms' }}
            >
              Il Tuo Business Lavora per Te{' '}
              <span className="gradient-text">— Anche Quando Sei Chiuso</span>
            </h1>

            {/* Sub-headline — empathetic on pain, concrete on solution */}
            <p
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              Sai già che stai perdendo clienti ogni giorno per risposte lente, poche recensioni e troppo lavoro manuale. Noi lo sistemiamo in{' '}
              <span className="text-white font-semibold">2-3 giorni — senza che tu debba fare niente</span>.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button variant="primary" size="lg" to="/contatti">
                Scopri Come Far Crescere il Tuo Business
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" to="/portfolio">
                Vedi i Risultati Reali
              </Button>
            </div>

            {/* FUD removers */}
            <div
              className="flex flex-wrap gap-x-5 gap-y-2 animate-fade-up"
              style={{ animationDelay: '380ms' }}
            >
              {['✓ Consulenza gratuita', '✓ Zero impegno', '✓ Risposta in 24h'].map((item) => (
                <span key={item} className="text-sm text-gray-400">{item}</span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
