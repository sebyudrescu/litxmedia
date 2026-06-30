import { XCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const painPoints = [
  'Il telefono squilla mentre sei con un paziente — e quel potenziale cliente non richiama più',
  'I tuoi colleghi hanno 50 recensioni Google e tu ne hai ancora 8 — e lo sai che i clienti scelgono chi ne ha di più',
  'Passi le serate a rispondere ai messaggi invece di stare con la tua famiglia',
  'Hai una lista di ex-clienti che non senti da mesi — e sai che con una telefonata giusta tornebbero',
  'Il tuo sito è fermo al 2018 e non porta nessuna richiesta — ma rifarlo sembra un progetto enorme',
];

const solutions = [
  'I tuoi clienti ricevono risposta immediata — anche a mezzanotte, anche nel weekend',
  'Le tue recensioni crescono da sole — senza che tu debba chiedere niente a nessuno',
  'Il tuo business va avanti anche quando sei in ferie',
];

export default function PASSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.015]" />

      <Container>
        {/* STAT CALLOUT */}
        <ScrollReveal>
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-2xl px-6 py-4 max-w-2xl text-center">
              <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold">Il 68% dei potenziali clienti sceglie il primo che risponde.</span>{' '}
                <span className="text-accent font-semibold">Sei tu?</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: PROBLEM + AGITATE */}
          <div>
            <ScrollReveal>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">I Tuoi Problemi</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ti Riconosci in Qualcuna di Queste Situazioni?
              </h2>
              <p className="text-gray-400 mb-8">
                Non sei solo. Centinaia di business italiani vivono ogni giorno questi stessi problemi. E la buona notizia? Esiste una soluzione.
              </p>
            </ScrollReveal>

            <div className="space-y-4 mb-10">
              {painPoints.map((pain, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-accent/20 transition-colors">
                    <XCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">{pain}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* AGITATE block */}
            <ScrollReveal delay={450}>
              <div className="bg-accent/5 border border-accent/15 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg mb-2">
                  Ogni sera che finisce con messaggi non risposti è un'opportunità persa.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Non è colpa tua — hai già abbastanza da fare. Gestire il tuo lavoro, i clienti, la burocrazia. Ma il problema non si risolve da solo. Ogni giorno che passa, i tuoi concorrenti si muovono più veloci di te.{' '}
                  <span className="text-accent font-semibold">La domanda non è "se" agire, ma "quando".</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: SOLVE */}
          <div>
            <ScrollReveal delay={100}>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-green-400">La Soluzione</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Noi Lo Sistemiamo.{' '}
                <span className="gradient-text">Tu Pensi al Tuo Lavoro.</span>
              </h2>
              <p className="text-gray-400 mb-8">
                In 2-3 giorni mettiamo in piedi sistemi che lavorano 24/7 per te. Non sono promesse vaghe — sono risultati concreti, misurabili, garantiti.
              </p>
            </ScrollReveal>

            <div className="space-y-4 mb-10">
              {solutions.map((sol, i) => (
                <ScrollReveal key={i} delay={150 + i * 80}>
                  <div className="flex items-start gap-3 bg-white/[0.03] border border-green-400/15 rounded-xl p-4 hover:border-green-400/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-200 text-sm leading-relaxed">{sol}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Result metrics */}
            <ScrollReveal delay={420}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '+40%', label: 'Clienti', color: 'text-primary' },
                  { value: '5x', label: 'Recensioni', color: 'text-secondary' },
                  { value: '10h', label: 'Risparmiate/sett', color: 'text-green-400' },
                ].map((m) => (
                  <div key={m.label} className="bg-white/[0.03] border border-white/8 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-bold ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Button variant="primary" size="lg" to="/contatti">
                Sì, Voglio Far Crescere il Mio Business
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                ✓ Consulenza gratuita &nbsp;·&nbsp; ✓ Zero impegno &nbsp;·&nbsp; ✓ Risposta in 24h
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
