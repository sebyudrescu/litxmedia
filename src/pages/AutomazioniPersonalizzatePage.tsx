import { Cog } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import HowItWorks from '../components/service-detail/HowItWorks';
import KeyBenefits from '../components/service-detail/KeyBenefits';
import ExpectedResults from '../components/service-detail/ExpectedResults';
import UseCases from '../components/service-detail/UseCases';
import ServiceTestimonial from '../components/service-detail/ServiceTestimonial';
import ServiceFAQ from '../components/service-detail/ServiceFAQ';
import ServiceCTA from '../components/service-detail/ServiceCTA';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function AutomazioniPersonalizzatePage() {
  const heroVisual = (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
            <Cog className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <Cog className="w-10 h-10 text-secondary" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );

  const howItWorksSteps = [
    {
      title: 'Discovery Call',
      description:
        '30 minuti per capire i tuoi processi, colli di bottiglia e obiettivi. Identificare opportunità di automazione.',
    },
    {
      title: 'Proposta Personalizzata',
      description:
        'Creiamo soluzione su misura con workflow dettagliato, integrazioni necessarie e timeline.',
    },
    {
      title: 'Sviluppo & Test',
      description:
        'Costruiamo l\'automazione, testiamo ogni scenario, assicuriamo funzionamento perfetto.',
    },
    {
      title: 'Implementazione & Training',
      description:
        'Attiviamo il sistema, formiamo il team, monitoriamo per assicurare successo.',
    },
  ];

  const automationExamples = [
    {
      icon: '📋',
      title: 'Onboarding Clienti',
      description:
        'Automatizza processo di accoglienza nuovi clienti. Email benvenuto, documenti, training, follow-up.',
    },
    {
      icon: '📊',
      title: 'Report Automatici',
      description:
        'Report settimanali/mensili generati e inviati automaticamente. Zero tempo manuale.',
    },
    {
      icon: '🔔',
      title: 'Notifiche Smart',
      description:
        'Alert personalizzati basati su eventi specifici. Slack, email, SMS quando serve.',
    },
    {
      icon: '🔗',
      title: 'Integrazione Sistemi',
      description:
        'Collega CRM, email, calendario, accounting. Dati sincronizzati automaticamente.',
    },
    {
      icon: '✅',
      title: 'Workflow Approvazioni',
      description:
        'Processi approvazione automatizzati. Richieste, notifiche, escalation automatiche.',
    },
    {
      icon: '📧',
      title: 'Follow-up Intelligenti',
      description:
        'Sequenze email/SMS basate su comportamento cliente. Personalizzazione totale.',
    },
  ];

  const benefits = [
    {
      icon: '⏱️',
      title: 'Risparmio Tempo Massiccio',
      description:
        'Da ore a minuti. Processi che richiedevano giorni completati in secondi.',
    },
    {
      icon: '🎯',
      title: 'Zero Errori Umani',
      description:
        'Automazioni perfette ogni volta. Niente dimenticanze o errori manuali.',
    },
    {
      icon: '📈',
      title: 'Scalabilità Infinita',
      description:
        'Gestisci 10x più volume senza assumere. Il sistema cresce con te.',
    },
    {
      icon: '💡',
      title: 'Soluzioni Uniche',
      description:
        'Non template generici. Automazioni progettate per il tuo business specifico.',
    },
    {
      icon: '🔄',
      title: 'Miglioramento Continuo',
      description:
        'Ottimizziamo nel tempo basandoci su dati e feedback.',
    },
    {
      icon: '🤝',
      title: 'Integrazione Totale',
      description:
        'Colleghiamo qualsiasi sistema tu usi. API, webhook, database.',
    },
  ];

  const results = [
    { value: '10-50 ore', label: 'Risparmiate ogni settimana dal team' },
    { value: '99.9%', label: 'Accuratezza processi automatizzati' },
    { value: '3-7 giorni', label: 'Tempo medio sviluppo automazione' },
    { value: 'ROI 300%+', label: 'Ritorno investimento nel primo anno' },
  ];

  const useCases = [
    {
      title: 'Healthcare',
      description: 'Patient reminders, report management, billing automation',
    },
    {
      title: 'Real Estate',
      description: 'Lead nurturing, document processing, scheduling',
    },
    {
      title: 'Marketing Agencies',
      description: 'Client reporting, social scheduling, lead qualification',
    },
    {
      title: 'Professional Services',
      description: 'Time tracking, invoicing, project management',
    },
    {
      title: 'E-commerce',
      description: 'Inventory sync, order processing, customer support',
    },
  ];

  const faqs = [
    {
      question: 'Quanto costa un\'automazione personalizzata?',
      answer:
        'Dipende dalla complessità. Range tipico €500-3000. Nella consulenza gratuita facciamo stima precisa.',
    },
    {
      question: 'Posso automatizzare processi molto specifici del mio settore?',
      answer:
        'Assolutamente. Ci specializziamo in automazioni uniche. Se è ripetitivo, possiamo automatizzarlo.',
    },
    {
      question: 'Serve formazione tecnica per usare l\'automazione?',
      answer:
        'No. Creiamo interfacce semplici. Se sai usare email, sai usare le nostre automazioni.',
    },
    {
      question: 'Cosa succede se cambio processo dopo?',
      answer:
        'Modifichiamo l\'automazione. Include revisioni, poi offriamo manutenzione per aggiornamenti continui.',
    },
    {
      question: 'Quanto tempo serve per sviluppare?',
      answer:
        'Automazioni semplici: 2-3 giorni. Complesse: 5-7 giorni. Dipende da integrazioni e complessità.',
    },
  ];

  return (
    <>
      <ServiceHero
        headline="Automazioni Su Misura per il Tuo Business"
        subheadline="Ogni business ha sfide uniche. Creiamo automazioni personalizzate che risolvono i tuoi problemi specifici e fanno risparmiare ore ogni settimana."
        problemTitle="🔧 Hai Processi Unici che Ti Fanno Perdere Tempo?"
        problems={[
          'Compiti ripetitivi specifici del tuo settore',
          'Processi manuali soggetti a errori',
          'Integrazioni necessarie tra sistemi diversi',
          'Opportunità di efficienza non sfruttate',
        ]}
        ctaText="Prenota Consulenza Gratuita"
        ctaLink="/contatti"
        visual={heroVisual}
      />

      <HowItWorks headline="Come Funziona" steps={howItWorksSteps} />

      <section className="py-20 md:py-28 bg-white/[0.02]">
        <Container>
          <SectionHeading title="Cosa Possiamo Automatizzare" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationExamples.map((example, index) => (
              <ScrollReveal key={example.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{example.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {example.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <KeyBenefits headline="Benefici delle Automazioni" benefits={benefits} />

      <ExpectedResults headline="Risultati Tipici" results={results} />

      <UseCases headline="Settori & Use Case" cases={useCases} />

      <ServiceTestimonial
        quote="LitX Media ha automatizzato il nostro processo di onboarding pazienti. Risparmiamo 10 ore ogni settimana e zero errori. Il sistema gestisce tutto da solo, dalla raccolta documenti ai promemoria appuntamenti."
        author="Giuseppe Romano"
        role="CEO"
        company="MediClinic"
        imageUrl="/images/testimonials/giuseppe-romano.png"
      />

      <ServiceFAQ headline="Domande Frequenti" faqs={faqs} />

      <ServiceCTA
        headline="Hai un Processo che Vorresti Automatizzare?"
        subheadline="Consulenza gratuita per discutere la tua automazione ideale. Zero impegno."
        ctaText="Prenota Consulenza Gratuita →"
        ctaLink="/contatti"
      />
    </>
  );
}
