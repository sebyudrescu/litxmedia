import { Globe } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import HowItWorks from '../components/service-detail/HowItWorks';
import KeyBenefits from '../components/service-detail/KeyBenefits';
import ExpectedResults from '../components/service-detail/ExpectedResults';
import PricingSection from '../components/service-detail/PricingSection';
import ServiceTestimonial from '../components/service-detail/ServiceTestimonial';
import ServiceFAQ from '../components/service-detail/ServiceFAQ';
import ServiceCTA from '../components/service-detail/ServiceCTA';

export default function SitiWebPage() {
  const heroVisual = (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Globe className="w-16 h-16 text-primary" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );

  const howItWorksSteps = [
    {
      title: 'Brief & Design',
      description:
        'Consulenza dove capiamo il tuo brand, obiettivi e clienti ideali. Creiamo mockup design personalizzato.',
    },
    {
      title: 'Sviluppo Rapido',
      description:
        'Costruiamo il sito con tecnologie moderne. Veloce, sicuro, responsive su ogni dispositivo.',
    },
    {
      title: 'Contenuti & SEO',
      description:
        'Ottimizziamo testi e struttura per Google. Il tuo sito inizia a posizionarsi nei risultati di ricerca.',
    },
    {
      title: 'Launch & Formazione',
      description:
        'Pubblichiamo il sito e ti formiamo su come gestire contenuti e aggiornamenti.',
    },
  ];

  const benefits = [
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description:
        'Perfetto su smartphone, tablet e desktop. Il 70% dei visitatori è da mobile.',
    },
    {
      icon: '⚡',
      title: 'Velocità Ottimale',
      description:
        'Caricamento ultra-rapido. Google premia siti veloci con miglior posizionamento.',
    },
    {
      icon: '🎯',
      title: 'Ottimizzato per Conversioni',
      description:
        'Design studiato per trasformare visitatori in lead. Form, CTA e UX ottimizzati.',
    },
    {
      icon: '🔍',
      title: 'SEO Friendly',
      description:
        'Struttura ottimizzata per apparire su Google. Più visibilità = più clienti.',
    },
    {
      icon: '🔒',
      title: 'Sicuro & Affidabile',
      description:
        'HTTPS, backup automatici, protezione da attacchi. Il tuo sito è sempre online.',
    },
    {
      icon: '✏️',
      title: 'Facile da Gestire',
      description:
        'Aggiorna contenuti in autonomia. Interfaccia intuitiva, zero competenze tecniche.',
    },
  ];

  const results = [
    { value: '50%', label: 'Aumento medio tempo permanenza sul sito' },
    { value: '3x', label: 'Più richieste di contatto rispetto a siti vecchi' },
    { value: '<2 sec', label: 'Tempo di caricamento medio pagina' },
    { value: 'Top 10', label: 'Posizionamento Google per keyword locali' },
  ];

  const pricingPlans = [
    {
      name: 'Base',
      price: 400,
      description: 'Perfetto per piccole attività, landing page, portfolio',
      features: [
        'Design moderno responsive',
        'Fino a 5 pagine',
        'Form contatti funzionante',
        'Ottimizzazione mobile',
        'HTTPS & Sicurezza',
        'Consegna in 2-3 giorni',
        '1 revisione design inclusa',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      price: 700,
      description: 'Perfetto per aziende che vogliono crescere online',
      features: [
        'Tutto del Pacchetto Base',
        'Fino a 10 pagine',
        'SEO ottimizzato per Google',
        'Blog/News section',
        'Google Analytics integrato',
        'Speed optimization avanzata',
        'Integrazione social media',
        '3 revisioni design',
        '30 giorni supporto post-lancio',
      ],
      recommended: true,
    },
    {
      name: 'Ultimate',
      price: 1400,
      description: 'Perfetto per business che vogliono il massimo',
      features: [
        'Tutto del Pacchetto Professional',
        'Pagine illimitate',
        'Chatbot AI integrato 24/7',
        'Supporto prioritario 24/7',
        '10 modifiche gratuite al mese',
        'Manutenzione e aggiornamenti inclusi',
        'E-commerce (se necessario)',
        'Integrazioni CRM/tools custom',
        'Revisioni illimitate',
        'Training completo team',
      ],
      recommended: false,
    },
  ];

  const faqs = [
    {
      question: 'Posso aggiornare il sito da solo dopo il lancio?',
      answer:
        'Sì, ti formiamo su come gestire contenuti. Per modifiche tecniche complesse, siamo sempre disponibili.',
    },
    {
      question: 'Il prezzo include hosting e dominio?',
      answer:
        'I prezzi coprono sviluppo e design. Hosting e dominio sono separati (circa €50-100/anno). Possiamo gestirlo per te.',
    },
    {
      question: 'Posso passare da un pacchetto all\'altro?',
      answer:
        'Assolutamente. Puoi fare upgrade in qualsiasi momento pagando solo la differenza.',
    },
    {
      question: 'Cosa succede se voglio più di 10 pagine nel Professional?',
      answer:
        'Nessun problema, ogni pagina extra costa €50. O passa a Ultimate per pagine illimitate.',
    },
    {
      question: 'Offrite e-commerce?',
      answer:
        'Sì, incluso nel Pacchetto Ultimate o come addon ai pacchetti Base/Professional.',
    },
  ];

  return (
    <>
      <ServiceHero
        headline="Siti Web che Convertono Visitatori in Clienti"
        subheadline="Siti moderni, veloci e ottimizzati per Google. Design professionale che riflette la qualità del tuo business. Consegna in 2-3 giorni."
        problemTitle="🚫 Il Tuo Sito Attuale Ti Sta Costando Clienti?"
        problems={[
          'Sito vecchio che non ispira fiducia',
          'Lento e non ottimizzato per mobile',
          'Nessuno ti trova su Google',
          'Visitatori che escono senza contattarti',
        ]}
        ctaText="Richiedi Preventivo"
        ctaLink="/contatti"
        visual={heroVisual}
      />

      <HowItWorks headline="Come Funziona" steps={howItWorksSteps} />

      <KeyBenefits headline="Cosa Ottieni con il Nostro Servizio" benefits={benefits} />

      <ExpectedResults headline="Risultati Tipici" results={results} />

      <PricingSection
        headline="Prezzi Trasparenti, Zero Sorprese"
        plans={pricingPlans}
        note="💬 Non sei sicuro quale pacchetto scegliere? Prenota una consulenza gratuita e troviamo la soluzione perfetta per te."
      />

      <ServiceTestimonial
        quote="Il nuovo sito è moderno, veloce e finalmente riceviamo richieste ogni giorno. L'investimento si è ripagato in meno di un mese. LitX Media ha capito esattamente cosa serviva al nostro centro estetico."
        author="Laura Martini"
        role="Owner"
        company="Centro Estetico Roma"
        imageUrl="/images/testimonials/laura-martini.png"
      />

      <ServiceFAQ headline="Domande Frequenti" faqs={faqs} />

      <ServiceCTA
        headline="Pronto per un Sito che Converte?"
        subheadline="Richiedi preventivo gratuito. Troveremo il pacchetto perfetto per il tuo business."
        ctaText="Richiedi Preventivo →"
        ctaLink="/contatti"
      />
    </>
  );
}
