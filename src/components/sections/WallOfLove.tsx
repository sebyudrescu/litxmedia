import { Star } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';

const testimonials = [
  {
    name: 'Dr. Marco Bellini',
    role: 'Odontoiatra',
    company: 'Studio Dentistico Milano',
    outcomeBadge: 'Piu appuntamenti',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    quote:
      'Da quando abbiamo sistemato la gestione dei pazienti, rispondiamo sempre e abbiamo aumentato gli appuntamenti del 40% in due mesi. Niente piu chiamate perse.',
    result: '+40% appuntamenti',
    rating: 5,
    imageUrl: '/images/testimonials/marco-bellini.png',
  },
  {
    name: 'Laura Martini',
    role: 'Owner',
    company: 'Centro Estetico Roma',
    outcomeBadge: 'Piu visibilita',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/30',
    quote:
      "Il mio business e finalmente visibile online. Ricevo richieste ogni giorno e l'investimento si e ripagato in meno di un mese.",
    result: 'ROI in < 1 mese',
    rating: 5,
    imageUrl: '/images/testimonials/laura-martini.png',
  },
  {
    name: 'Andrea Conti',
    role: 'Manager',
    company: 'PuliServices',
    outcomeBadge: 'Piu recensioni',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    quote:
      'In 3 mesi siamo passati da 8 a 45 recensioni Google. Ora siamo i primi nella nostra zona e i clienti ci trovano loro.',
    result: '8 -> 45 recensioni',
    rating: 5,
    imageUrl: '/images/testimonials/andrea-conti.png',
  },
  {
    name: 'Sara Bianchi',
    role: 'Nutrizionista',
    company: 'NutriLife',
    outcomeBadge: 'Clienti recuperati',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    quote:
      'Avevo una lista di clienti ferma da un anno. In una settimana ne abbiamo riattivati 15. Soldi che credevo persi per sempre.',
    result: '15 clienti recuperati',
    rating: 5,
    imageUrl: '/images/testimonials/sara-bianchi.png',
  },
  {
    name: 'Giuseppe Romano',
    role: 'CEO',
    company: 'MediClinic',
    outcomeBadge: 'Meno lavoro manuale',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    quote:
      'Risparmiamo 10 ore ogni settimana su operazioni che ora vanno da sole. Il mio team puo finalmente concentrarsi sui pazienti.',
    result: '10h/sett risparmiate',
    rating: 5,
    imageUrl: '/images/testimonials/giuseppe-romano.png',
  },
];

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold">
        <span
          style={{
            background:
              'linear-gradient(135deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #34A853 75%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          G
        </span>
      </div>
      <span className="text-xs text-gray-500">Google</span>
    </div>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-white/20 transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.04]">
        <img
          src={t.imageUrl}
          alt={`${t.name}, ${t.role}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <GoogleBadge />
        </div>

        <span
          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 w-fit ${t.badgeColor}`}
        >
          {t.outcomeBadge}
        </span>

        <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">"{t.quote}"</p>

        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-2.5 mb-5">
          <span className="text-primary font-bold text-lg">{t.result}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15 bg-white/[0.04] flex-shrink-0">
            <img src={t.imageUrl} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{t.name}</div>
            <div className="text-gray-500 text-xs">
              {t.role} · {t.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WallOfLove() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Storie Reali · Risultati Verificati
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loro Hanno Smesso di Perdere Clienti -{' '}
              <span className="gradient-text">Ascolta la Loro Storia</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Non parole nostre. Risultati reali, clienti reali, nomi reali.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-[66%] lg:mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <ScrollReveal key={t.name} delay={300 + i * 100}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0 / 5.0</span>
            <span className="text-gray-400 text-sm">-</span>
            <span className="text-gray-400 text-sm">
              Basato su <span className="text-white font-semibold">200+ business italiani soddisfatti</span>
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
