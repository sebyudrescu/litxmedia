import {
  Zap,
  Target,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Award,
  Clock,
  Users,
  CheckCircle2,
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import StatCounter from '../components/ui/StatCounter';

const differentiators = [
  {
    icon: Zap,
    title: 'Velocita\u0300',
    description:
      'Delivery in 2-3 giorni per la maggior parte dei progetti. Non settimane, non mesi.',
  },
  {
    icon: Target,
    title: 'Personalizzazione',
    description:
      'Ogni soluzione e\u0300 progettata su misura per il tuo business specifico. Zero template.',
  },
  {
    icon: TrendingUp,
    title: 'Risultati',
    description:
      'Focus totale su ROI misurabile. Se non genera risultati, non lo proponiamo.',
  },
  {
    icon: MessageCircle,
    title: 'Supporto',
    description:
      'Sempre disponibili quando ne hai bisogno. Comunicazione diretta e trasparente.',
  },
];

const values = [
  'Trasparenza totale su prezzi e tempistiche',
  'Nessun contratto vincolante a lungo termine',
  'Risultati misurabili e concreti',
  'Comunicazione chiara e diretta',
  'Consegne puntuali, sempre',
  'Supporto post-lancio garantito',
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2" />
        </div>
        <Container className="relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                Chi Siamo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Aiutiamo i Business a{' '}
                <span className="gradient-text">Crescere</span> nel Digitale
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                LitX Media nasce con una missione chiara: fornire soluzioni
                digitali che generano risultati concreti, in tempi rapidi e a
                costi accessibili.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="4+" label="Anni di Esperienza" />
            <StatCounter value="50+" label="Progetti Completati" />
            <StatCounter value="5+" label="Settori Serviti" />
            <StatCounter value="2-3" label="Giorni Delivery Medio" />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                  La Nostra Storia
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  4 Anni di Crescita e Risultati
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    LitX Media e\u0300 nata dalla convinzione che ogni business,
                    indipendentemente dalle dimensioni, meriti accesso a
                    soluzioni digitali di alta qualita\u0300.
                  </p>
                  <p>
                    In 4 anni abbiamo aiutato oltre 50 aziende in settori
                    diversi \u2014 dalla sanita\u0300 alla ristorazione, dall\u2019estetica ai
                    servizi professionali \u2014 a crescere attraverso chatbot
                    intelligenti, siti web professionali, automazioni e
                    strategie digitali.
                  </p>
                  <p>
                    Quello che ci distingue non e\u0300 solo la qualita\u0300 del lavoro, ma
                    la velocita\u0300 con cui lo consegnamo. Mentre altri impiegano
                    settimane, noi consegnamo in 2-3 giorni.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: '4+ anni', sub: 'di esperienza' },
                  { icon: Users, label: '50+', sub: 'clienti serviti' },
                  { icon: Clock, label: '2-3 giorni', sub: 'delivery medio' },
                  {
                    icon: TrendingUp,
                    label: '100%',
                    sub: 'clienti soddisfatti',
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-xl font-bold text-white">
                        {item.label}
                      </p>
                      <p className="text-gray-500 text-sm">{item.sub}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-white/5">
        <Container>
          <SectionHeading
            label="Cosa Ci Rende Diversi"
            title="Perche\u0300 Scegliere LitX Media"
            subtitle="Non siamo l\u2019unica agenzia digitale, ma siamo diversi per come lavoriamo."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="I Nostri Valori"
              title="Come Lavoriamo"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 60}>
                  <div className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/[0.03] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <Container className="relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Lavorare con Noi?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Prenota una consulenza gratuita e scopri come possiamo aiutare il
              tuo business a crescere.
            </p>
            <Button variant="primary" size="lg" to="/contatti">
              Prenota Consulenza Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
