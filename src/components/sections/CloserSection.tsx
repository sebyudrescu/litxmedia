import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const bullets = [
  'Il tuo business risponde ai clienti anche di notte e nel weekend',
  'Le tue recensioni crescono da sole — senza fare niente',
  'Recuperi i clienti fermi e smetti di lavorare gratis',
  'Tutto consegnato in 2-3 giorni, non settimane',
  'Supporto dedicato — non sparisci nel vuoto',
];

export default function CloserSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px]" />
      </div>

      <Container>
        <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/8 via-secondary/4 to-accent/3 p-8 md:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-3xl" />

          <div className="relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Ultimo Passo</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400 text-sm ml-2">4.9/5 · 200+ business italiani soddisfatti</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Hai Visto Abbastanza —{' '}
                <span className="gradient-text">Ora Tocca a Te</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Unisciti ai <span className="text-white font-semibold">200+ business italiani</span> che hanno smesso di perdere clienti e tempo. La consulenza è gratuita, l'impegno è zero.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ul className="inline-flex flex-col gap-3 text-left mb-10">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button variant="primary" size="lg" to="/contatti">
                  Voglio Far Crescere il Mio Business
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="md" to="/portfolio">
                  Oppure guarda i risultati reali →
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {['100% Gratuito', 'Zero Impegno', 'Risposta in 24h', 'Nessuna carta di credito'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
