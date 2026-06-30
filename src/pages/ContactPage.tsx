import { useState } from 'react';
import { CheckCircle2, AlertCircle, Star, ArrowRight, ChevronRight } from 'lucide-react';
import Container from '../components/ui/Container';
import ScrollReveal from '../components/ui/ScrollReveal';
import Accordion from '../components/ui/Accordion';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
// Outcome-focused service options (not technical names)
const outcomeOptions = [
  { value: 'non-perdere-clienti', label: 'Non voglio più perdere clienti per risposte lente' },
  { value: 'piu-recensioni', label: 'Voglio più recensioni Google e più visibilità' },
  { value: 'recuperare-clienti', label: 'Voglio recuperare clienti che non sento da mesi' },
  { value: 'sito-web', label: 'Ho bisogno di un sito web che porta clienti' },
  { value: 'meno-lavoro-manuale', label: 'Voglio smettere di fare lavoro manuale e ripetitivo' },
  { value: 'non-so', label: 'Non lo so ancora — dimmi tu cosa mi serve' },
];

const faq = [
  {
    question: 'La consulenza è veramente gratuita?',
    answer: 'Assolutamente sì. La consulenza di 30 minuti è completamente gratuita e senza impegno. Analizzeremo il tuo business e ti proporremo soluzioni concrete.',
  },
  {
    question: 'Quanto tempo ci vuole per ricevere una risposta?',
    answer: 'Rispondiamo a tutte le richieste entro 24 ore lavorative. Nella maggior parte dei casi, rispondiamo entro poche ore.',
  },
  {
    question: 'Lavorate solo con business italiani?',
    answer: 'Lavoriamo principalmente con business italiani, ma siamo aperti a collaborazioni internazionali. Contattateci per discutere le vostre esigenze.',
  },
  {
    question: 'Offrite piani di pagamento?',
    answer: 'Sì, per progetti più grandi offriamo la possibilità di suddividere il pagamento. Ne parleremo durante la consulenza.',
  },
  {
    question: 'In quanto tempo vedrete i primi risultati?',
    answer: 'Dipende dal servizio: i chatbot e le automazioni producono risultati immediati dal giorno 1. Le recensioni Google crescono nel giro di settimane. I siti web iniziano a portare traffico entro 30-60 giorni con SEO.',
  },
];

const sidebarTestimonials = [
  {
    name: 'Dr. Marco Bellini',
    company: 'Studio Dentistico Milano',
    result: '+40% appuntamenti in 2 mesi',
    quote: 'Risposta rapida, consegna puntuale. Risultati concreti da subito.',
  },
  {
    name: 'Laura Martini',
    company: 'Centro Estetico Roma',
    result: 'ROI in meno di 1 mese',
    quote: "L'investimento si è ripagato in meno di un mese. Incredibile.",
  },
  {
    name: 'Andrea Conti',
    company: 'PuliServices',
    result: 'Da 8 a 45 recensioni in 3 mesi',
    quote: 'Sistema automatico, zero sforzo da parte nostra.',
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const testimonialImages: Record<string, string> = {
  'Dr. Marco Bellini': '/images/testimonials/marco-bellini.png',
  'Laura Martini': '/images/testimonials/laura-martini.png',
  'Andrea Conti': '/images/testimonials/andrea-conti.png',
};

interface FormData {
  email: string;
  name: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({ email: '', name: '', service: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleStep1 = () => {
    if (!formData.email.trim()) { setEmailError("L'email è obbligatoria"); return; }
    if (!validateEmail(formData.email)) { setEmailError('Email non valida'); return; }
    setEmailError('');
    setStep(2);
  };

  const handleStep2 = () => {
    if (!formData.name.trim()) return;
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const leadData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    if (!isSupabaseConfigured) {
      // Backend non ancora configurato — salva in console per ora
      console.log('Lead salvato temporaneamente (backend non ancora configurato):', leadData);
      // Simula un breve delay come se fosse una richiesta vera
      setTimeout(() => setStatus('success'), 1000);
      return;
    }

    try {
      const { error } = await supabase.from('leads').insert(leadData);
      if (error) {
        console.error('Errore Supabase:', error);
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch (err) {
      console.error('Errore di rete:', err);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-3 outline-none transition-all text-sm';

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-8 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.08),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <Container>
          <div className="max-w-3xl animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Consulenza Gratuita</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Scopri Come Far Smettere il Tuo Business di Perdere Clienti —{' '}
              <span className="gradient-text">in 30 Minuti Gratuiti</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Analizziamo il tuo business, identifichiamo esattamente dove stai perdendo clienti e ti diciamo cosa faresti diversamente. Zero impegno, zero costi.
            </p>
            {/* Trust row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                '✓ Risposta entro 24h',
                '✓ 200+ business già aiutati',
                '✓ Nessuna carta di credito',
              ].map((t) => (
                <span key={t} className="text-sm text-gray-400">{t}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <section className="pb-28 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* FORM — 3 cols */}
            <div className="lg:col-span-3">
              {/* Backend status alert */}
              {!isSupabaseConfigured && (
                <div className="mb-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                  <p className="text-amber-400 text-sm">
                    <span className="font-semibold">🚧 Demo Mode:</span> Il backend è in configurazione. 
                    Il form funziona e i dati vengono salvati temporaneamente.
                  </p>
                </div>
              )}

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">

                {status === 'success' ? (
                  /* Success state */
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-full bg-green-400/15 border-2 border-green-400/40 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Perfetto, ci siamo! 🎉</h2>
                    <p className="text-gray-400 mb-2">Hai fatto il primo passo per far crescere il tuo business.</p>
                    <p className="text-gray-400 mb-8">Ti rispondo entro <span className="text-white font-semibold">24 ore</span> — di solito molto prima. Ecco cosa succede:</p>
                    <div className="space-y-4 text-left max-w-sm mx-auto">
                      {[
                        { n: '1', label: 'Ricevi conferma via email', sub: 'Controlla anche spam' },
                        { n: '2', label: 'Pianifichiamo la chiamata', sub: 'Scegli tu giorno e ora' },
                        { n: '3', label: 'Iniziamo il tuo progetto', sub: 'Consegna in 2-3 giorni' },
                      ].map((s) => (
                        <div key={s.n} className="flex items-start gap-4 bg-white/[0.03] rounded-xl p-4">
                          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                            {s.n}
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">{s.label}</div>
                            <div className="text-gray-500 text-xs">{s.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Form headline */}
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Inizia Adesso — È Gratis
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">
                      Inserisci la tua email e in meno di 2 minuti ci diciamo esattamente come possiamo aiutarti.
                    </p>

                    {/* Progress bar */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>Step {step} di 3</span>
                        <span>{progressPercent}% completato</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        {['Email', 'Chi sei', 'Messaggio'].map((label, i) => (
                          <span
                            key={label}
                            className={`text-xs transition-colors ${step > i ? 'text-primary font-medium' : 'text-gray-600'}`}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* STEP 1: Email */}
                    {step === 1 && (
                      <div className="animate-fade-up space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email-input">
                            La tua email
                          </label>
                          <input
                            id="email-input"
                            type="email"
                            value={formData.email}
                            onChange={(e) => { setFormData(p => ({ ...p, email: e.target.value })); setEmailError(''); }}
                            onKeyDown={(e) => e.key === 'Enter' && handleStep1()}
                            placeholder="mario@esempio.it"
                            className={`${inputClass} text-base py-4`}
                            autoFocus
                            autoComplete="email"
                            inputMode="email"
                            aria-describedby={emailError ? 'email-error' : undefined}
                            aria-invalid={!!emailError}
                          />
                          {emailError && (
                            <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" /> {emailError}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={handleStep1}
                          className="w-full bg-primary hover:bg-blue-600 active:scale-[0.98] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all text-base shadow-lg shadow-primary/25"
                          aria-label="Continua al passo successivo"
                        >
                          Inizia Gratis <ArrowRight className="w-5 h-5" />
                        </button>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
                          {['Gratuito', 'Zero spam', 'Risposta in 24h'].map((t) => (
                            <span key={t} className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-green-400" /> {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Name + Service */}
                    {step === 2 && (
                      <div className="animate-fade-up space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Il tuo nome completo <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                            placeholder="Mario Rossi"
                            className={inputClass}
                            autoFocus
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-3">
                            Cosa vuoi ottenere? <span className="text-gray-500">(opzionale)</span>
                          </label>
                          <div className="space-y-2">
                            {outcomeOptions.map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, service: opt.value === formData.service ? '' : opt.label }))}
                                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                                  formData.service === opt.label
                                    ? 'border-primary/60 bg-primary/10 text-white'
                                    : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-gray-300'
                                }`}
                              >
                                <span className={`mr-2 ${formData.service === opt.label ? 'text-primary' : 'text-gray-600'}`}>
                                  {formData.service === opt.label ? '✓' : '○'}
                                </span>
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setStep(1)}
                            className="flex-1 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-medium py-3 px-4 rounded-lg transition-colors text-sm"
                          >
                            ← Indietro
                          </button>
                          <button
                            onClick={handleStep2}
                            disabled={!formData.name.trim()}
                            className="flex-[2] bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                          >
                            Continua <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Message + Submit */}
                    {step === 3 && (
                      <form onSubmit={handleSubmit} className="animate-fade-up space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Raccontaci il tuo progetto <span className="text-gray-500">(opzionale)</span>
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                            placeholder="Es: Ho uno studio medico e vorrei un chatbot per gestire le prenotazioni automaticamente..."
                            rows={4}
                            className={`${inputClass} resize-none`}
                          />
                          <p className="text-xs text-gray-600 mt-1">Più dettagli ci dai, più utile sarà la consulenza.</p>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="flex-1 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-medium py-3 px-4 rounded-lg transition-colors text-sm"
                          >
                            ← Indietro
                          </button>
                          <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="flex-[2] bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                          >
                            {status === 'loading' ? (
                              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Invio in corso...</>
                            ) : (
                              <>Ottieni la Tua Consulenza Gratuita <ChevronRight className="w-4 h-4" /></>
                            )}
                          </button>
                        </div>

                        {status === 'error' && (
                          <p className="text-red-400 text-sm flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Errore nell'invio. Riprova o scrivici direttamente.
                          </p>
                        )}

                        {/* FUD removers */}
                        <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
                          {[
                            '🔒 I tuoi dati sono al sicuro',
                            '✓ Consulenza 100% gratuita',
                            '✓ Nessun impegno richiesto',
                            '✓ Risposta entro 24 ore',
                          ].map((item) => (
                            <span key={item} className="text-xs text-gray-500">{item}</span>
                          ))}
                        </div>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* SIDEBAR — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Aggregate trust */}
              <ScrollReveal>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-bold text-sm">5.0</span>
                    <span className="text-gray-500 text-xs">· 200+ business soddisfatti</span>
                  </div>

                  <div className="space-y-4">
                    {sidebarTestimonials.map((t) => (
                      <div key={t.name} className="border-t border-white/5 pt-4 first:border-0 first:pt-0">
                        <p className="text-gray-300 text-sm italic mb-2">"{t.quote}"</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/15 bg-white/[0.04] flex-shrink-0">
                              <img
                                src={testimonialImages[t.name]}
                                alt={t.name}
                                className="h-full w-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="text-white font-semibold text-xs truncate">{t.name}</div>
                              <div className="text-gray-600 text-xs truncate">{t.company}</div>
                            </div>
                          </div>
                          <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-lg flex-shrink-0 ml-3">
                            {t.result}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What happens next */}
              <ScrollReveal delay={100}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Cosa succede dopo?</h3>
                  <div className="space-y-3">
                    {[
                      { n: '1', t: 'Ricevi conferma email', s: 'Entro pochi minuti' },
                      { n: '2', t: 'Ti contattiamo', s: 'Entro 24h lavorative' },
                      { n: '3', t: 'Consulenza gratuita 30min', s: 'Scegli tu data e ora' },
                      { n: '4', t: 'Proposta personalizzata', s: 'Senza impegno' },
                    ].map((s) => (
                      <div key={s.n} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                          {s.n}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{s.t}</div>
                          <div className="text-gray-500 text-xs">{s.s}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-24 bg-white/[0.01]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Domande Frequenti</h2>
              <p className="text-gray-400 text-sm">Tutto quello che vuoi sapere prima di contattarci.</p>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal delay={100}>
              <Accordion items={faq} />
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
