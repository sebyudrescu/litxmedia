import { ArrowRight, Star, TrendingUp, Bell, Clock } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

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

          {/* RIGHT: Animated dashboard visual */}
          <div className="relative animate-fade-up hidden lg:block" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Notification card */}
              <div className="mb-5 bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-secondary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-secondary animate-bounce" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Nuovo cliente prenotato</p>
                    <p className="text-xs text-gray-400 mt-0.5">23:47 — mentre dormivi</p>
                  </div>
                </div>
              </div>

              {/* Review growth card */}
              <div className="mb-5 bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">Le tue recensioni</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-400">⭐ 8</p>
                    <p className="text-xs text-gray-500">Prima</p>
                  </div>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '82%' }} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text">45</p>
                    <p className="text-xs text-gray-500">Oggi</p>
                  </div>
                </div>
              </div>

              {/* Time saved card */}
              <div className="mb-5 bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-green-400/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Tempo risparmiato</p>
                    <p className="text-xs text-gray-400 mt-0.5">Questa settimana</p>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <p className="text-3xl font-bold text-green-400">12h</p>
                    <Clock className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </div>

              {/* Revenue metric card */}
              <div className="bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-accent/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Clienti recuperati</p>
                    <p className="text-xs text-gray-400 mt-0.5">Questo mese</p>
                  </div>
                  <p className="text-3xl font-bold text-accent">+€2.400</p>
                </div>
              </div>
            </div>

            {/* Floating glow accents */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
