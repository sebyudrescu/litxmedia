import { Star } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import HowItWorks from '../components/service-detail/HowItWorks';
import KeyBenefits from '../components/service-detail/KeyBenefits';
import ExpectedResults from '../components/service-detail/ExpectedResults';
import UseCases from '../components/service-detail/UseCases';
import ServiceTestimonial from '../components/service-detail/ServiceTestimonial';
import ServiceFAQ from '../components/service-detail/ServiceFAQ';
import ServiceCTA from '../components/service-detail/ServiceCTA';

export default function GoogleReviewsPage() {
  const heroVisual = (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Star className="w-16 h-16 text-accent fill-accent" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-accent/20 border border-accent/30"
              style={{
                top: `${20 + i * 15}%`,
                left: `${-10 + i * 25}%`,
                animation: 'pulse 2s ease-in-out infinite',
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <Star className="w-4 h-4 text-accent fill-accent m-auto mt-1" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );

  const howItWorksSteps = [
    {
      title: 'Setup Sistema',
      description:
        'Configuriamo il sistema automatizzato collegato al tuo business Google. Setup in 1 giorno.',
    },
    {
      title: 'Template Personalizzato',
      description:
        'Creiamo messaggi personalizzati con il tuo brand. Professionale e non invadente.',
    },
    {
      title: 'Automazione Attiva',
      description:
        'Dopo ogni servizio completato, il sistema invia automaticamente richiesta recensione via SMS/Email.',
    },
    {
      title: 'Crescita Costante',
      description:
        'Le recensioni arrivano automaticamente. Tu non fai nulla, il sistema lavora 24/7.',
    },
  ];

  const benefits = [
    {
      icon: '🌟',
      title: 'Più Recensioni Costantemente',
      description:
        'Flusso continuo di nuove recensioni. Nessuno sforzo manuale richiesto.',
    },
    {
      icon: '📍',
      title: 'Migliore Posizionamento Locale',
      description:
        'Google premia business con più recensioni. Appari prima dei competitor.',
    },
    {
      icon: '🤝',
      title: 'Aumenta Fiducia',
      description:
        'I nuovi clienti scelgono chi ha più recensioni positive. Credibilità automatica.',
    },
    {
      icon: '⏱️',
      title: 'Zero Tempo Sprecato',
      description:
        'Sistema completamente automatico. Imposti una volta, funziona per sempre.',
    },
    {
      icon: '📊',
      title: 'Feedback Utili',
      description:
        'Scopri cosa pensano davvero i clienti. Migliora servizi basandoti su dati reali.',
    },
    {
      icon: '🎯',
      title: 'Timing Perfetto',
      description:
        'Richiesta arriva quando cliente è più soddisfatto. Massimo tasso di risposta.',
    },
  ];

  const results = [
    { value: '5x', label: 'Aumento medio recensioni mensili' },
    { value: '3 mesi', label: 'Per passare da 10 a 50+ recensioni' },
    { value: '60%', label: 'Tasso risposta medio clienti soddisfatti' },
    { value: '+25%', label: 'Aumento visite da Google My Business' },
  ];

  const useCases = [
    {
      title: 'Ristoranti',
      description: 'Recensione richiesta 2 giorni dopo visita',
    },
    {
      title: 'Servizi Pulizie',
      description: 'Dopo ogni intervento completato',
    },
    {
      title: 'Studi Medici/Dentisti',
      description: '3 giorni dopo appuntamento',
    },
    {
      title: 'Centri Estetici',
      description: 'Dopo trattamento, quando cliente vede risultati',
    },
    {
      title: 'Professionisti',
      description: 'Dopo consegna progetto/consulenza',
    },
    {
      title: 'Servizi Auto',
      description: 'Dopo riparazione o manutenzione completata',
    },
  ];

  const faqs = [
    {
      question: 'I clienti saranno infastiditi dalle richieste?',
      answer:
        'No. Il messaggio è personalizzato, educato e arriva al momento giusto. Chiediamo solo a clienti che hanno completato un servizio.',
    },
    {
      question: 'Cosa succede se un cliente lascia recensione negativa?',
      answer:
        'Il sistema ti notifica immediatamente. Puoi rispondere velocemente e risolvere il problema prima che danneggi la reputazione.',
    },
    {
      question: 'Funziona con SMS, Email o entrambi?',
      answer:
        'Entrambi. Configuriamo in base alle tue preferenze e al tipo di clienti.',
    },
    {
      question: 'Posso personalizzare il messaggio?',
      answer:
        'Sì, creiamo template insieme che riflettono il tuo brand e tone of voice.',
    },
    {
      question: 'È conforme al GDPR?',
      answer:
        'Assolutamente. Chiediamo recensioni solo a clienti reali che hanno usato i tuoi servizi.',
    },
  ];

  return (
    <>
      <ServiceHero
        headline="Raccogli Recensioni Google Automaticamente"
        subheadline="Sistema automatico che chiede recensioni ai tuoi clienti dopo ogni servizio. Più recensioni = più clienti da Google."
        problemTitle="⭐ Perché Hai Poche Recensioni?"
        problems={[
          'Imbarazzo a chiedere recensioni di persona',
          'Clienti dimenticano anche se soddisfatti',
          'Processo manuale che richiede tempo',
          'Competitor con più recensioni ti superano',
        ]}
        ctaText="Prenota Consulenza Gratuita"
        ctaLink="/contatti"
        visual={heroVisual}
      />

      <HowItWorks headline="Come Funziona il Sistema" steps={howItWorksSteps} />

      <KeyBenefits headline="Cosa Ottieni con Review Automation" benefits={benefits} />

      <ExpectedResults headline="Risultati Tipici dei Nostri Clienti" results={results} />

      <UseCases headline="Perfetto Per Questi Settori" cases={useCases} />

      <ServiceTestimonial
        quote="In 3 mesi siamo passati da 8 a 45 recensioni Google. Il sistema funziona automaticamente e non dobbiamo fare nulla. Riceviamo molto più chiamate da Google Maps ora."
        author="Andrea Conti"
        role="Manager"
        company="PuliServices"
        imageUrl="/images/testimonials/andrea-conti.png"
      />

      <ServiceFAQ headline="Domande Frequenti" faqs={faqs} />

      <ServiceCTA
        headline="Inizia a Raccogliere Recensioni in Automatico"
        subheadline="Consulenza gratuita per vedere come funziona il sistema per il tuo business."
        ctaText="Prenota Consulenza Gratuita →"
        ctaLink="/contatti"
      />
    </>
  );
}
