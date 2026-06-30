import {
  MessageSquare,
  Globe,
  Star,
  DatabaseZap,
  Cog,
} from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  icon: typeof MessageSquare;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  delivery: string;
  heroHeadline: string;
  heroSubtitle: string;
  howItWorks: { step: string; title: string; description: string }[];
  results: { metric: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: 'chatbot',
    slug: 'chatbot-ai',
    icon: MessageSquare,
    title: 'Chatbot Intelligente 24/7',
    shortDescription:
      'Rispondi ai clienti 24 ore su 24, qualifica lead e prenota appuntamenti automaticamente.',
    problem:
      'Perdi clienti fuori orario lavorativo e sprechi ore ogni settimana rispondendo alle stesse domande.',
    solution:
      'Un chatbot intelligente che risponde ai tuoi clienti 24/7, qualifica i lead e prenota appuntamenti direttamente nel tuo calendario.',
    benefits: [
      'Risparmi decine di ore ogni settimana',
      'Aumenti le conversioni del 30-40%',
      'Prenota appuntamenti direttamente nel calendario',
      'I clienti ottengono risposte immediate, sempre',
      'Qualificazione automatica dei lead',
      'Nessuna chiamata persa, nessun cliente ignorato',
    ],
    delivery: '2-3 giorni',
    heroHeadline: 'Non Perdere Mai Piu\u0300 un Cliente',
    heroSubtitle:
      'Il tuo assistente digitale risponde 24 ore su 24, qualifica i contatti e prenota appuntamenti mentre tu ti concentri sul tuo lavoro.',
    howItWorks: [
      {
        step: '01',
        title: 'Analisi del Business',
        description:
          'Studiamo il tuo business, le domande frequenti dei clienti e i tuoi processi di prenotazione.',
      },
      {
        step: '02',
        title: 'Configurazione Personalizzata',
        description:
          'Creiamo un chatbot su misura con risposte personalizzate per il tuo settore e i tuoi servizi.',
      },
      {
        step: '03',
        title: 'Integrazione & Test',
        description:
          'Integriamo il chatbot nel tuo sito web e testiamo ogni scenario possibile.',
      },
      {
        step: '04',
        title: 'Go Live & Monitoraggio',
        description:
          'Attiviamo il sistema e monitoriamo le performance per ottimizzare i risultati.',
      },
    ],
    results: [
      { metric: '+40%', description: 'Aumento appuntamenti medi' },
      { metric: '24/7', description: 'Disponibilita\u0300 per i tuoi clienti' },
      { metric: '-70%', description: 'Tempo risparmiato sulle risposte' },
      { metric: '< 3s', description: 'Tempo medio di risposta' },
    ],
    faq: [
      {
        question: 'Il chatbot puo\u0300 gestire domande complesse?',
        answer:
          'Si\u0300, il chatbot viene addestrato specificamente sul tuo business e puo\u0300 gestire conversazioni articolate. Per richieste molto specifiche, trasferisce la conversazione a te.',
      },
      {
        question: 'Funziona anche su WhatsApp o solo sul sito?',
        answer:
          'Possiamo integrare il chatbot sia sul tuo sito web che su WhatsApp, Facebook Messenger e altre piattaforme.',
      },
      {
        question: 'Quanto tempo ci vuole per configurarlo?',
        answer:
          'Il setup standard richiede 2-3 giorni. Con il servizio premium, possiamo consegnare in 1 giorno.',
      },
      {
        question: 'Posso personalizzare le risposte?',
        answer:
          'Assolutamente. Ogni risposta viene creata su misura per il tuo business, il tuo tono di voce e i tuoi servizi specifici.',
      },
    ],
  },
  {
    id: 'websites',
    slug: 'siti-web-professionali',
    icon: Globe,
    title: 'Siti Web Professionali',
    shortDescription:
      'Siti web moderni, veloci e ottimizzati per trasformare visitatori in clienti.',
    problem:
      'Il tuo sito e\u0300 vecchio, lento e non converte i visitatori in clienti paganti.',
    solution:
      'Un sito web moderno, veloce e progettato strategicamente per generare contatti e vendite.',
    benefits: [
      'Aumenti visibilita\u0300 online e credibilita\u0300',
      'Design mobile-responsive e veloce',
      'Ottimizzato per apparire su Google (SEO)',
      'Sistema di lead capture integrato',
      'Caricamento ultra-veloce',
      'Design professionale che ispira fiducia',
    ],
    delivery: '2-3 giorni',
    heroHeadline: 'Un Sito Web Che Lavora Per Te',
    heroSubtitle:
      'Non solo bello da vedere. Un sito progettato per convertire visitatori in clienti, veloce e ottimizzato per Google.',
    howItWorks: [
      {
        step: '01',
        title: 'Brief & Strategia',
        description:
          'Analizziamo il tuo business, i competitors e definiamo la strategia di conversione.',
      },
      {
        step: '02',
        title: 'Design & Sviluppo',
        description:
          'Creiamo un design moderno e sviluppiamo il sito con le migliori tecnologie.',
      },
      {
        step: '03',
        title: 'Ottimizzazione SEO',
        description:
          'Ottimizziamo ogni pagina per i motori di ricerca e la velocita\u0300 di caricamento.',
      },
      {
        step: '04',
        title: 'Lancio & Formazione',
        description:
          'Pubblichiamo il sito e ti formiamo su come gestirlo in autonomia.',
      },
    ],
    results: [
      { metric: '< 2s', description: 'Tempo di caricamento medio' },
      { metric: '+60%', description: 'Aumento contatti dal sito' },
      { metric: '100%', description: 'Mobile responsive' },
      { metric: 'Top 10', description: 'Posizionamento Google locale' },
    ],
    faq: [
      {
        question: 'Quanto tempo ci vuole per avere il sito pronto?',
        answer:
          'Il sito viene consegnato in 2-3 giorni lavorativi. Con il servizio premium, anche in 1 giorno.',
      },
      {
        question: 'Posso aggiornare il sito da solo dopo?',
        answer:
          'Si\u0300, ti forniamo formazione completa e documentazione per gestire il sito in autonomia.',
      },
      {
        question: 'Il sito sara\u0300 ottimizzato per Google?',
        answer:
          'Tutti i nostri siti includono ottimizzazione SEO di base. I pacchetti Professional e Ultimate includono SEO avanzato.',
      },
      {
        question: 'Offrite manutenzione dopo il lancio?',
        answer:
          'Si\u0300, offriamo piani di manutenzione mensile che includono aggiornamenti, backup e assistenza tecnica.',
      },
      {
        question: 'Che tecnologie utilizzate?',
        answer:
          'Utilizziamo le tecnologie piu\u0300 moderne e performanti del mercato per garantire velocita\u0300, sicurezza e scalabilita\u0300.',
      },
    ],
  },
  {
    id: 'reviews',
    slug: 'google-review-automation',
    icon: Star,
    title: 'Google Review Automation',
    shortDescription:
      'Aumenta automaticamente le tue recensioni Google senza nessuno sforzo manuale.',
    problem:
      'Hai poche recensioni Google e chiedere feedback manualmente richiede troppo tempo.',
    solution:
      'Un sistema automatico che chiede recensioni ad ogni cliente dopo il servizio, con messaggi personalizzati e link diretto.',
    benefits: [
      'Crescita costante delle recensioni Google',
      'Migliore posizionamento nelle ricerche locali',
      'Aumenta la fiducia dei nuovi clienti',
      'Zero sforzo manuale richiesto',
      'Messaggi personalizzati automatici',
      'Monitoraggio risultati in tempo reale',
    ],
    delivery: '2-3 giorni',
    heroHeadline: 'Piu\u0300 Recensioni, Piu\u0300 Clienti',
    heroSubtitle:
      'Automatizza la raccolta di recensioni Google e costruisci una reputazione online solida senza muovere un dito.',
    howItWorks: [
      {
        step: '01',
        title: 'Setup del Sistema',
        description:
          'Colleghiamo il sistema al tuo profilo Google Business e configuriamo i messaggi.',
      },
      {
        step: '02',
        title: 'Personalizzazione Messaggi',
        description:
          'Creiamo messaggi personalizzati per il tuo brand con il link diretto alla recensione.',
      },
      {
        step: '03',
        title: 'Attivazione Automatica',
        description:
          'Dopo ogni servizio completato, il sistema invia automaticamente la richiesta di recensione.',
      },
      {
        step: '04',
        title: 'Monitoraggio & Ottimizzazione',
        description:
          'Monitoriamo i tassi di risposta e ottimizziamo i messaggi per massimizzare le recensioni.',
      },
    ],
    results: [
      { metric: '5x', description: 'Aumento medio recensioni' },
      { metric: '+35%', description: 'Visibilita\u0300 su Google Maps' },
      { metric: '90%', description: 'Tasso di apertura messaggi' },
      { metric: '0 min', description: 'Tempo manuale richiesto' },
    ],
    faq: [
      {
        question: 'Come viene inviata la richiesta di recensione?',
        answer:
          'Il sistema invia un messaggio personalizzato (SMS o email) con un link diretto alla pagina Google per lasciare la recensione.',
      },
      {
        question: 'Posso controllare cosa viene inviato?',
        answer:
          'Assolutamente. Approvi ogni messaggio prima dell\u2019attivazione e puoi modificarlo in qualsiasi momento.',
      },
      {
        question: 'Funziona con qualsiasi tipo di business?',
        answer:
          'Si\u0300, il sistema e\u0300 adattabile a qualsiasi attivita\u0300 che abbia un profilo Google Business.',
      },
    ],
  },
  {
    id: 'database',
    slug: 'database-reactivation',
    icon: DatabaseZap,
    title: 'Database Reactivation',
    shortDescription:
      'Riattiva i clienti dormienti e genera vendite dal tuo database esistente.',
    problem:
      'Hai un database pieno di clienti che non comprano da mesi. Soldi lasciati sul tavolo.',
    solution:
      'Campagne automatizzate e personalizzate per riattivare i clienti dormienti e trasformarli in vendite.',
    benefits: [
      'Recupera clienti persi senza costi pubblicitari',
      'ROI immediato dal database esistente',
      'Campagne personalizzate e automatiche',
      'Nuovi ordini dalla base clienti attuale',
      'Segmentazione intelligente del database',
      'Report dettagliati sui risultati',
    ],
    delivery: '2-3 giorni',
    heroHeadline: 'Trasforma il Tuo Database in Fatturato',
    heroSubtitle:
      'I tuoi clienti passati sono la tua risorsa piu\u0300 preziosa. Riattivali con campagne automatiche e genera vendite senza spendere in pubblicita\u0300.',
    howItWorks: [
      {
        step: '01',
        title: 'Analisi Database',
        description:
          'Analizziamo il tuo database, identifichiamo i segmenti e le opportunita\u0300 di riattivazione.',
      },
      {
        step: '02',
        title: 'Creazione Campagne',
        description:
          'Creiamo sequenze di messaggi personalizzati per ogni segmento di clienti.',
      },
      {
        step: '03',
        title: 'Lancio Automatico',
        description:
          'Attiviamo le campagne che lavorano automaticamente per riportare i clienti.',
      },
      {
        step: '04',
        title: 'Analisi & Ottimizzazione',
        description:
          'Monitoriamo i risultati e ottimizziamo le campagne per massimizzare le conversioni.',
      },
    ],
    results: [
      { metric: '+25%', description: 'Clienti riattivati in media' },
      { metric: '0\u20AC', description: 'Spesa pubblicitaria necessaria' },
      { metric: '7 giorni', description: 'Per vedere i primi risultati' },
      { metric: '3-5x', description: 'ROI medio delle campagne' },
    ],
    faq: [
      {
        question: 'Di che tipo di database ho bisogno?',
        answer:
          'Basta un elenco di contatti con nome, email o numero di telefono. Puo\u0300 essere un file Excel, un CRM o qualsiasi altro formato.',
      },
      {
        question: 'Quanto devo avere come minimo di contatti?',
        answer:
          'Consigliamo almeno 100 contatti per ottenere risultati significativi, ma possiamo lavorare anche con database piu\u0300 piccoli.',
      },
      {
        question: 'Le campagne sono conformi al GDPR?',
        answer:
          'Si\u0300, tutte le campagne rispettano le normative sulla privacy e includono opzione di opt-out.',
      },
    ],
  },
  {
    id: 'automation',
    slug: 'automazioni-personalizzate',
    icon: Cog,
    title: 'Automazioni Business Personalizzate',
    shortDescription:
      'Automazioni su misura per eliminare processi manuali e far crescere il tuo business.',
    problem:
      'Processi manuali che ti fanno perdere tempo, causano errori e limitano la crescita del tuo business.',
    solution:
      'Automazioni personalizzate progettate sulle tue esigenze specifiche per eliminare il lavoro manuale.',
    benefits: [
      'Risparmio di ore ogni settimana',
      'Zero errori umani nei processi',
      'Processi scalabili che crescono con te',
      'Soluzioni uniche per problemi unici',
      'Integrazione con i tuoi strumenti esistenti',
      'Report e notifiche automatiche',
    ],
    delivery: '3-7 giorni',
    heroHeadline: 'Automatizza. Semplifica. Cresci.',
    heroSubtitle:
      'Ogni minuto speso in attivita\u0300 ripetitive e\u0300 un minuto tolto alla crescita del tuo business. Automatizziamo i tuoi processi su misura.',
    howItWorks: [
      {
        step: '01',
        title: 'Discovery Call',
        description:
          'Analizziamo i tuoi processi attuali e identifichiamo le opportunita\u0300 di automazione.',
      },
      {
        step: '02',
        title: 'Progettazione Soluzione',
        description:
          'Progettiamo l\u2019automazione su misura con un piano dettagliato di implementazione.',
      },
      {
        step: '03',
        title: 'Sviluppo & Test',
        description:
          'Sviluppiamo l\u2019automazione e la testiamo a fondo prima dell\u2019attivazione.',
      },
      {
        step: '04',
        title: 'Deploy & Formazione',
        description:
          'Attiviamo il sistema, ti formiamo sull\u2019utilizzo e forniamo documentazione completa.',
      },
    ],
    results: [
      { metric: '10+ ore', description: 'Risparmiate ogni settimana' },
      { metric: '0', description: 'Errori nei processi automatizzati' },
      { metric: '100%', description: 'Personalizzazione su misura' },
      { metric: '\u221E', description: 'Scalabilita\u0300 dei processi' },
    ],
    faq: [
      {
        question: 'Che tipo di processi potete automatizzare?',
        answer:
          'Praticamente qualsiasi processo ripetitivo: onboarding clienti, invio notifiche, generazione report, sincronizzazione dati tra sistemi, workflow di approvazione e molto altro.',
      },
      {
        question: 'Quanto tempo ci vuole?',
        answer:
          'Dipende dalla complessita\u0300. Automazioni semplici richiedono 3 giorni, progetti piu\u0300 complessi fino a 7 giorni.',
      },
      {
        question: 'Si integra con i miei strumenti attuali?',
        answer:
          'Si\u0300, ci integriamo con la maggior parte degli strumenti: Google Workspace, CRM, tool di gestione, piattaforme di comunicazione e molto altro.',
      },
      {
        question: 'Cosa succede se ho bisogno di modifiche dopo?',
        answer:
          'Offriamo supporto continuo e possiamo modificare o espandere le automazioni in qualsiasi momento.',
      },
    ],
  },
];

export const pricingPlans = [
  {
    name: 'Base',
    price: 400,
    description: 'Tutto il necessario per una presenza online professionale.',
    features: [
      'Sito web professionale responsive',
      'Design moderno e veloce',
      '5 pagine standard',
      'Form contatti funzionante',
      'Ottimizzazione mobile',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 700,
    description: 'La scelta ideale per chi vuole crescere online.',
    features: [
      'Tutto del pacchetto Base',
      'SEO ottimizzato per Google',
      'Blog / news section',
      'Integrazione Google Analytics',
      'Speed optimization avanzata',
      '10 pagine',
    ],
    recommended: true,
  },
  {
    name: 'Ultimate',
    price: 1400,
    description: 'La soluzione completa per dominare il tuo mercato.',
    features: [
      'Tutto del pacchetto Professional',
      'Chatbot integrato 24/7',
      'Supporto prioritario 24/7',
      '10 modifiche gratuite al mese',
      'Manutenzione e aggiornamenti inclusi',
      'Pagine illimitate',
      'Integrazioni CRM / tools',
    ],
    recommended: false,
  },
];
