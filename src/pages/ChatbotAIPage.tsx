import { MessageSquare } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import HowItWorks from '../components/service-detail/HowItWorks';
import KeyBenefits from '../components/service-detail/KeyBenefits';
import ExpectedResults from '../components/service-detail/ExpectedResults';
import UseCases from '../components/service-detail/UseCases';
import ServiceTestimonial from '../components/service-detail/ServiceTestimonial';
import ServiceFAQ from '../components/service-detail/ServiceFAQ';
import ServiceCTA from '../components/service-detail/ServiceCTA';

export default function ChatbotAIPage() {
  const heroVisual = (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <MessageSquare className="w-16 h-16 text-primary" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );

  const howItWorksSteps = [
    {
      title: 'Configurazione Personalizzata',
      description:
        'Analizziamo il tuo business e creiamo conversazioni su misura per i tuoi clienti. Il chatbot parla come il tuo brand.',
    },
    {
      title: 'Integrazione Seamless',
      description:
        'Installiamo il chatbot sul tuo sito web e canali social (WhatsApp, Facebook Messenger). Setup completo in 2-3 giorni.',
    },
    {
      title: 'Training & Test',
      description:
        'Testiamo ogni scenario e ti formiamo su come gestire e migliorare le conversazioni.',
    },
    {
      title: 'Live & Ottimizzazione',
      description:
        'Il chatbot inizia a lavorare 24/7. Monitoriamo performance e ottimizziamo continuamente.',
    },
  ];

  const benefits = [
    {
      icon: '⏰',
      title: 'Disponibilità 24/7',
      description:
        'Rispondi a clienti in qualsiasi momento, anche mentre dormi. Zero opportunità perse.',
    },
    {
      icon: '📈',
      title: 'Più Conversioni',
      description:
        'Qualifica automaticamente i lead e guida clienti verso l\'acquisto. +30-40% conversioni medie.',
    },
    {
      icon: '📅',
      title: 'Prenotazioni Automatiche',
      description:
        'Il chatbot prenota appuntamenti direttamente nel tuo calendario. Zero telefonate necessarie.',
    },
    {
      icon: '⚡',
      title: 'Risposte Istantanee',
      description:
        'Clienti ottengono risposte immediate. Nessuna attesa, massima soddisfazione.',
    },
    {
      icon: '💰',
      title: 'Risparmio Tempo',
      description:
        'Elimina ore di risposte ripetitive. Il tuo team si concentra su compiti ad alto valore.',
    },
    {
      icon: '📊',
      title: 'Insights Preziosi',
      description:
        'Scopri cosa chiedono realmente i clienti. Dati per migliorare prodotti e servizi.',
    },
  ];

  const results = [
    { value: '40%', label: 'Aumento medio conversioni lead in clienti' },
    { value: '24/7', label: 'Disponibilità senza costi staff aggiuntivi' },
    { value: '50+ ore', label: 'Risparmiate ogni mese dal team' },
    { value: '<3 sec', label: 'Tempo medio risposta cliente' },
  ];

  const useCases = [
    {
      title: 'Studi Dentistici & Medici',
      description:
        'Prenota visite, risponde a domande su orari e servizi, invia promemoria appuntamenti.',
    },
    {
      title: 'Centri Estetici & Spa',
      description:
        'Gestisce prenotazioni trattamenti, consiglia servizi, raccoglie feedback clienti.',
    },
    {
      title: 'Ristoranti & Food',
      description:
        'Prende prenotazioni tavoli, mostra menu, gestisce ordini takeaway.',
    },
    {
      title: 'Servizi Professionali',
      description:
        'Qualifica lead, prenota consulenze, invia preventivi automatici.',
    },
    {
      title: 'E-commerce',
      description:
        'Supporto clienti, tracking ordini, consigli prodotti personalizzati.',
    },
  ];

  const faqs = [
    {
      question: 'Il chatbot può integrarsi con il mio sistema esistente?',
      answer:
        'Sì, integriamo il chatbot con il tuo CRM, calendario (Google Calendar, Outlook), e altri strumenti che usi. Parliamone nella consulenza gratuita.',
    },
    {
      question: 'Quanto tempo serve per averlo attivo?',
      answer:
        '2-3 giorni dalla conferma del progetto. Setup veloce e training incluso.',
    },
    {
      question: 'Cosa succede se il chatbot non sa rispondere?',
      answer:
        'Il chatbot trasferisce automaticamente a te o al tuo team, raccogliendo tutte le info necessarie. Zero frustrazione per il cliente.',
    },
    {
      question: 'Posso modificare le risposte dopo il lancio?',
      answer:
        'Assolutamente. Ti formiamo su come aggiornare risposte e flussi. Puoi farlo in autonomia o chiederci supporto.',
    },
    {
      question: 'Quanto costa la manutenzione?',
      answer:
        'Offriamo pacchetti di manutenzione opzionali. Nella consulenza gratuita discutiamo delle tue esigenze specifiche.',
    },
  ];

  return (
    <>
      <ServiceHero
        headline="Chatbot AI che Risponde 24/7 ai Tuoi Clienti"
        subheadline="Smetti di perdere clienti fuori orario. Il tuo assistente virtuale qualifica lead, prenota appuntamenti e risponde a domande frequenti mentre dormi."
        problemTitle="😫 Ti suona familiare?"
        problems={[
          'Clienti che chiamano fuori orario e non ricevono risposta',
          'Tempo sprecato a rispondere alle stesse domande',
          'Opportunità perse perché non puoi essere sempre disponibile',
          'Staff sovraccarico di domande ripetitive',
        ]}
        ctaText="Prenota Demo Gratuita"
        ctaLink="/contatti"
        visual={heroVisual}
      />

      <HowItWorks headline="Come Funziona il Chatbot LitX Media" steps={howItWorksSteps} />

      <KeyBenefits headline="Cosa Ottieni con il Chatbot AI" benefits={benefits} />

      <ExpectedResults headline="Risultati Tipici dei Nostri Clienti" results={results} />

      <UseCases headline="Perfetto Per Questi Settori" cases={useCases} />

      <ServiceTestimonial
        quote="Da quando abbiamo implementato il chatbot, rispondiamo ai pazienti 24/7 e abbiamo aumentato gli appuntamenti del 40% in due mesi. Niente più chiamate perse. LitX Media ha configurato tutto in 3 giorni e il sistema funziona perfettamente."
        author="Dr. Marco Bellini"
        role="Odontoiatra"
        company="Studio Dentistico Milano"
        imageUrl="/images/testimonials/marco-bellini.png"
      />

      <ServiceFAQ headline="Domande Frequenti" faqs={faqs} />

      <ServiceCTA
        headline="Inizia a Rispondere 24/7 ai Tuoi Clienti"
        subheadline="Prenota una consulenza gratuita. Ti mostriamo come il chatbot può trasformare il tuo business."
        ctaText="Prenota Consulenza Gratuita →"
        ctaLink="/contatti"
      />
    </>
  );
}
