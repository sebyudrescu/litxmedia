import { DatabaseZap } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import HowItWorks from '../components/service-detail/HowItWorks';
import KeyBenefits from '../components/service-detail/KeyBenefits';
import ExpectedResults from '../components/service-detail/ExpectedResults';
import UseCases from '../components/service-detail/UseCases';
import ServiceTestimonial from '../components/service-detail/ServiceTestimonial';
import ServiceFAQ from '../components/service-detail/ServiceFAQ';
import ServiceCTA from '../components/service-detail/ServiceCTA';

export default function DatabaseReactivationPage() {
  const heroVisual = (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <DatabaseZap className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-accent/20 border border-accent/30 animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );

  const howItWorksSteps = [
    {
      title: 'Analisi Database',
      description:
        'Analizziamo il tuo database clienti e segmentiamo per comportamento, tempo inattività, valore storico.',
    },
    {
      title: 'Strategia Personalizzata',
      description:
        'Creiamo campagne su misura per ogni segmento. Email, SMS o WhatsApp personalizzati.',
    },
    {
      title: 'Automazione Sequenze',
      description:
        'Configuriamo sequenze automatiche che riattivano clienti al momento giusto con offerte rilevanti.',
    },
    {
      title: 'Monitoraggio & Ottimizzazione',
      description:
        'Tracciamo risultati, ottimizziamo messaggi e massimizziamo il ROI.',
    },
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'ROI Immediato',
      description:
        'Recupera clienti senza costi pubblicità. Ogni vendita è puro profitto.',
    },
    {
      icon: '📧',
      title: 'Campagne Automatiche',
      description:
        'Il sistema lavora in background. Una volta impostato, genera vendite continuamente.',
    },
    {
      icon: '🎯',
      title: 'Messaggi Personalizzati',
      description:
        'Ogni cliente riceve offerta rilevante basata su storico acquisti e preferenze.',
    },
    {
      icon: '📊',
      title: 'Risultati Misurabili',
      description:
        'Dashboard chiara che mostra esattamente quanti clienti riattivi e vendite generate.',
    },
    {
      icon: '⚡',
      title: 'Setup Veloce',
      description:
        'Operativo in 3 giorni. Inizi a vedere risultati nella prima settimana.',
    },
    {
      icon: '🔄',
      title: 'Recupero Continuo',
      description:
        'Non solo riattiva vecchi clienti, ma previene futuri abbandoni.',
    },
  ];

  const results = [
    { value: '15-25%', label: 'Tasso medio riattivazione clienti dormienti' },
    { value: '€5-10', label: 'ROI per ogni €1 investito' },
    { value: '7 giorni', label: 'Per vedere primi risultati tangibili' },
    { value: '30%+', label: 'Aumento lifetime value clienti' },
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Riattiva chi non compra da 3-6 mesi con offerte personalizzate',
    },
    {
      title: 'Servizi',
      description: 'Richiama clienti per manutenzione/check-up annuale',
    },
    {
      title: 'Beauty & Wellness',
      description: 'Promemoria trattamenti periodici, nuovi servizi',
    },
    {
      title: 'B2B',
      description: 'Follow-up prospect freddi, rinnovi contratti',
    },
    {
      title: 'Palestre',
      description: 'Riattiva membri inattivi con promozioni speciali',
    },
  ];

  const faqs = [
    {
      question: 'Quanti clienti posso riattivare realisticamente?',
      answer:
        'Dipende dal database, ma mediamente 15-25% dei clienti dormienti risponde. Anche il 5% può significare centinaia di nuove vendite.',
    },
    {
      question: 'Non sembrerò spam contattando clienti vecchi?',
      answer:
        'No, se fatto bene. Creiamo messaggi personalizzati e di valore. Clienti apprezzano che ti ricordi di loro.',
    },
    {
      question: 'Funziona con qualsiasi CRM/database?',
      answer:
        'Sì, lavoriamo con Excel, Google Sheets, e tutti i CRM principali. Anche se hai solo una lista nomi.',
    },
    {
      question: 'Quanto tempo serve per vedere risultati?',
      answer:
        'Primi risultati in 7-10 giorni. ROI completo in 30-60 giorni.',
    },
    {
      question: 'Cosa succede dopo la prima campagna?',
      answer:
        'Configuriamo sequenze continue. Il sistema continua a lavorare e riattivare clienti automaticamente.',
    },
  ];

  return (
    <>
      <ServiceHero
        headline="Trasforma Clienti Dormienti in Nuove Vendite"
        subheadline="Il tuo database è pieno di opportunità non sfruttate. Riattiva clienti inattivi con campagne automatizzate personalizzate."
        problemTitle="💤 Il Tuo Database Sta Dormendo?"
        problems={[
          'Centinaia di clienti che non acquistano da mesi/anni',
          'Database che costa mantenere ma non genera vendite',
          'Non sai come ricontattarli senza sembrare invadente',
          'Budget pubblicità sprecato quando hai già clienti esistenti',
        ]}
        ctaText="Prenota Consulenza Gratuita"
        ctaLink="/contatti"
        visual={heroVisual}
      />

      <HowItWorks headline="Come Funziona il Sistema" steps={howItWorksSteps} />

      <KeyBenefits headline="Cosa Ottieni con Database Reactivation" benefits={benefits} />

      <ExpectedResults headline="Risultati Tipici" results={results} />

      <UseCases headline="Perfetto Per Questi Settori" cases={useCases} />

      <ServiceTestimonial
        quote="Abbiamo recuperato clienti che non sentivamo da oltre un anno. 15 nuovi appuntamenti nella prima settimana. Il sistema si ripaga da solo ogni mese con i clienti riattivati."
        author="Sara Bianchi"
        role="Nutrizionista"
        company="NutriLife"
        imageUrl="/images/testimonials/sara-bianchi.png"
      />

      <ServiceFAQ headline="Domande Frequenti" faqs={faqs} />

      <ServiceCTA
        headline="Trasforma il Tuo Database in Macchina di Vendite"
        subheadline="Consulenza gratuita per analizzare il potenziale del tuo database."
        ctaText="Prenota Consulenza Gratuita →"
        ctaLink="/contatti"
      />
    </>
  );
}
