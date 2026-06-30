import { Clock, Star, TrendingUp, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const outcomes = [
  {
    icon: Clock,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    glowColor: 'bg-primary/5',
    metric: '+40%',
    metricLabel: 'clienti in più',
    badge: 'Risposta immediata 24/7',
    headline: 'Non Perdere Mai Più un Cliente per una Risposta Lenta',
    description: 'I tuoi clienti vogliono risposta immediata — di giorno, di notte, nel weekend. Chi risponde per primo vince. Noi facciamo sì che il tuo business risponda sempre, automaticamente, senza che tu faccia niente.',
    example: 'Dr. Bellini — Studio Dentistico: +40% appuntamenti in 2 mesi',
    howTo: 'Risposta automatica · Gestione appuntamenti · Follow-up clienti',
  },
  {
    icon: Star,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    glowColor: 'bg-secondary/5',
    metric: '5x',
    metricLabel: 'più recensioni',
    badge: 'Primo su Google Maps',
    headline: 'Diventa il Business Più Recensito e Scelto della Tua Zona',
    description: 'Quando qualcuno cerca il tuo servizio su Google, chi ha più recensioni vince. Sempre. Noi facciamo crescere le tue recensioni automaticamente, senza che tu debba chiedere niente a nessuno.',
    example: 'PuliServices: da 8 a 45 recensioni in 3 mesi',
    howTo: 'Raccolta recensioni automatica · SMS/Email · Google Maps',
  },
  {
    icon: TrendingUp,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
    glowColor: 'bg-accent/5',
    metric: '10h',
    metricLabel: 'risparmiate/sett',
    badge: 'Più guadagni, meno fatica',
    headline: 'Recupera i Clienti che Hai Già e Smetti di Lavorare Gratis',
    description: 'Hai già una lista di clienti che non senti da mesi — sono soldi fermi sul tavolo. E ogni ora che passi su cose ripetitive è un\'ora che non stai usando per crescere. Noi recuperiamo quei clienti e automatizziamo il lavoro noioso.',
    example: 'NutriLife: 85 clienti recuperati · MediClinic: 10h/sett risparmiate',
    howTo: 'Riattivazione clienti · Automazioni · Siti web professionali',
  },
];

export default function OutcomesSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">I Risultati</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tre Cose che Ogni Business Vuole —{' '}
              <span className="gradient-text">e Noi Le Realizziamo in 2-3 Giorni</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Non vendiamo strumenti tecnici. Ti consegniamo risultati concreti che cambiano il tuo business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <ScrollReveal key={o.headline} delay={i * 150}>
                <div className={`relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:border-white/20 transition-all group overflow-hidden`}>
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${o.glowColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon + metric */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${o.bgColor} border ${o.borderColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${o.color}`} />
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${o.color}`}>{o.metric}</div>
                        <div className="text-xs text-gray-500">{o.metricLabel}</div>
                      </div>
                    </div>

                    {/* Badge */}
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${o.bgColor} ${o.color} ${o.borderColor} mb-4 w-fit`}>
                      {o.badge}
                    </span>

                    {/* Headline */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                      {o.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {o.description}
                    </p>

                    {/* Example result */}
                    <div className={`${o.bgColor} border ${o.borderColor} rounded-xl p-3 mb-4`}>
                      <p className={`text-xs font-semibold ${o.color}`}>Risultato reale:</p>
                      <p className="text-white text-sm font-medium mt-0.5">{o.example}</p>
                    </div>

                    {/* How we do it — tiny, almost hidden */}
                    <p className="text-xs text-gray-600 mb-5">
                      Come lo facciamo: {o.howTo}
                    </p>

                    {/* CTA */}
                    <a
                      href="/contatti"
                      className={`flex items-center gap-1.5 text-sm font-semibold ${o.color} hover:gap-3 transition-all`}
                    >
                      Scopri come <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Reassurance + CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center bg-white/[0.02] border border-white/8 rounded-2xl p-8">
            <p className="text-gray-400 mb-2">
              <span className="text-white font-semibold">Non sai ancora di cosa hai bisogno?</span> Nessun problema.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Te lo diciamo noi durante la consulenza gratuita — analizziamo il tuo business e ti diciamo esattamente cosa farebbe la differenza.
            </p>
            <Button variant="primary" size="lg" to="/contatti">
              Parla con Noi Gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-xs text-gray-600 mt-3">✓ Gratuito · ✓ Zero impegno · ✓ Risposta in 24h</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
