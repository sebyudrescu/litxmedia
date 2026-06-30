export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientRole?: string;
  sector: string;
  service: string;
  serviceType: 'chatbot' | 'website' | 'automation' | 'reviews';
  imageUrl: string;
  shortDescription: string;
  keyResult: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  timeline?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'studio-dentistico-milano',
    title: 'Studio Dentistico Milano',
    client: 'Dr. Marco Bellini',
    clientRole: 'Direttore Sanitario',
    sector: 'Healthcare',
    service: 'Chatbot AI 24/7',
    serviceType: 'chatbot',
    imageUrl: '/images/testimonials/marco-bellini.png',
    shortDescription:
      'Sistema intelligente per gestire prenotazioni e rispondere a domande dei pazienti automaticamente.',
    keyResult: '+40% appuntamenti prenotati',
    challenge:
      'Lo studio riceveva molte chiamate fuori orario che andavano perse, e lo staff era sovraccarico durante il giorno. Molti potenziali pazienti non riuscivano a mettersi in contatto e sceglievano altri studi.',
    solution:
      'Abbiamo implementato un chatbot intelligente 24/7 sul sito web e WhatsApp dello studio. Il sistema gestisce automaticamente prenotazioni, conferme, promemoria, e risponde alle domande più frequenti sui trattamenti e prezzi.',
    results: [
      {
        metric: '+40%',
        description: 'Aumento appuntamenti prenotati',
      },
      {
        metric: '50 ore',
        description: 'Risparmiate ogni mese dallo staff',
      },
      {
        metric: '0',
        description: 'Chiamate perse fuori orario',
      },
    ],
    testimonial: {
      quote:
        'Da quando abbiamo implementato il chatbot, rispondiamo ai pazienti 24/7 e abbiamo aumentato gli appuntamenti del 40% in due mesi. Il sistema si è ripagato in meno di 3 settimane.',
      author: 'Dr. Marco Bellini',
      role: 'Direttore Sanitario',
      company: 'Studio Dentistico Milano',
    },
    timeline: 'Completato in 5 giorni',
    featured: true,
  },
  {
    id: '2',
    slug: 'centro-estetico-roma',
    title: 'Centro Estetico Roma',
    client: 'Laura Martini',
    clientRole: 'Owner',
    sector: 'Beauty & Wellness',
    service: 'Sito Web Professional',
    serviceType: 'website',
    imageUrl: '/images/testimonials/laura-martini.png',
    shortDescription:
      'Sito web moderno con SEO ottimizzato e sistema di prenotazione online integrato.',
    keyResult: '3x richieste mensili',
    challenge:
      'Il sito esistente era datato, non mobile-friendly, e generava pochissime richieste. Il centro non era visibile su Google per le ricerche locali e perdeva clienti a favore dei competitor.',
    solution:
      'Abbiamo creato un nuovo sito web responsive con design moderno, ottimizzato per SEO locale, sistema di booking online integrato, e galleria professionale dei trattamenti. Implementato anche tracking conversioni e analytics.',
    results: [
      {
        metric: '3x',
        description: 'Aumento richieste mensili',
      },
      {
        metric: 'Top 5',
        description: 'Posizionamento Google per keyword principali',
      },
      {
        metric: '<30 giorni',
        description: 'ROI raggiunto',
      },
    ],
    testimonial: {
      quote:
        'Il nuovo sito è moderno, veloce e finalmente riceviamo richieste ogni giorno. Abbiamo triplicato i contatti in un mese e mezzo.',
      author: 'Laura Martini',
      role: 'Owner',
      company: 'Centro Estetico Roma',
    },
    timeline: 'Completato in 7 giorni',
    featured: true,
  },
  {
    id: '3',
    slug: 'puliservices-cleaning',
    title: 'PuliServices',
    client: 'Andrea Conti',
    clientRole: 'Manager',
    sector: 'Cleaning Services',
    service: 'Google Review Automation',
    serviceType: 'reviews',
    imageUrl: '/images/testimonials/andrea-conti.png',
    shortDescription:
      'Sistema automatico per raccogliere recensioni Google e aumentare la visibilità locale.',
    keyResult: 'Da 8 a 45 recensioni in 3 mesi',
    challenge:
      'L\'azienda aveva solo 8 recensioni su Google mentre i competitor ne avevano decine. Questo impattava negativamente la visibilità su Google Maps e la fiducia dei potenziali clienti.',
    solution:
      'Implementato sistema automatico che invia richieste di recensione via SMS ed email dopo ogni servizio completato. Il sistema è personalizzato e sincronizzato con il loro gestionale.',
    results: [
      {
        metric: '45',
        description: 'Nuove recensioni Google in 3 mesi',
      },
      {
        metric: '+35%',
        description: 'Chiamate da Google Maps',
      },
      {
        metric: '4.8★',
        description: 'Rating medio mantenuto',
      },
    ],
    testimonial: {
      quote:
        'In 3 mesi siamo passati da 8 a 45 recensioni Google. Il sistema funziona automaticamente e ora riceviamo molte più chiamate.',
      author: 'Andrea Conti',
      role: 'Manager',
      company: 'PuliServices',
    },
    timeline: 'Completato in 2 giorni',
  },
  {
    id: '4',
    slug: 'nutrilife-nutrizionista',
    title: 'NutriLife',
    client: 'Sara Bianchi',
    clientRole: 'Nutrizionista',
    sector: 'Health & Wellness',
    service: 'Database Reactivation',
    serviceType: 'automation',
    imageUrl: '/images/testimonials/sara-bianchi.png',
    shortDescription:
      'Campagne automatizzate per riattivare clienti dormienti e generare nuovi appuntamenti.',
    keyResult: '20% clienti riattivati',
    challenge:
      'Database di oltre 500 clienti che non prenotavano da mesi o anni. Opportunità di revenue non sfruttata e nessuna strategia di ricontatto in atto.',
    solution:
      'Analisi e segmentazione del database per comportamento e tempo di inattività. Creazione di campagne email e SMS personalizzate con offerte rilevanti per ogni segmento. Automazione completa delle sequenze.',
    results: [
      {
        metric: '20%',
        description: 'Clienti riattivati dal database',
      },
      {
        metric: '15',
        description: 'Appuntamenti nella prima settimana',
      },
      {
        metric: '€5,000',
        description: 'Revenue da database dormiente',
      },
    ],
    testimonial: {
      quote:
        'Abbiamo recuperato clienti che non sentivamo da oltre un anno. 15 nuovi appuntamenti nella prima settimana. Il sistema si ripaga da solo ogni mese.',
      author: 'Sara Bianchi',
      role: 'Nutrizionista',
      company: 'NutriLife',
    },
    timeline: 'Operativo in 3 giorni',
  },
  {
    id: '5',
    slug: 'ristorante-gourmet-milano',
    title: 'Ristorante Gourmet Milano',
    client: 'Chef Alessandro R.',
    clientRole: 'Chef & Owner',
    sector: 'Food & Beverage',
    service: 'Chatbot + Automazione Prenotazioni',
    serviceType: 'chatbot',
    imageUrl: '/images/testimonials/chef-alessandro-r.png',
    shortDescription:
      'Chatbot WhatsApp per gestire prenotazioni automaticamente e ridurre chiamate perse.',
    keyResult: '70% prenotazioni via chatbot',
    challenge:
      'Il telefono era sempre occupato durante il servizio, molte chiamate andavano perse e lo staff doveva gestire prenotazioni manualmente sottraendo tempo al servizio clienti.',
    solution:
      'Chatbot WhatsApp intelligente che gestisce prenotazioni 24/7, conferme automatiche, gestione liste d\'attesa, e promemoria. Integrato con sistema di gestione tavoli del ristorante.',
    results: [
      {
        metric: '70%',
        description: 'Prenotazioni gestite da chatbot',
      },
      {
        metric: '0',
        description: 'Telefonate perse',
      },
      {
        metric: '30 ore',
        description: 'Risparmiate ogni mese',
      },
    ],
    testimonial: {
      quote:
        'I clienti prenotano direttamente via WhatsApp 24/7. Non perdiamo più clienti per linea occupata e lo staff può concentrarsi sul servizio.',
      author: 'Chef Alessandro R.',
      role: 'Chef & Owner',
      company: 'Ristorante Gourmet Milano',
    },
    timeline: 'Completato in 4 giorni',
    featured: true,
  },
  {
    id: '6',
    slug: 'mediclinic-onboarding',
    title: 'MediClinic',
    client: 'Giuseppe Romano',
    clientRole: 'CEO',
    sector: 'Healthcare',
    service: 'Automazione Custom - Onboarding Pazienti',
    serviceType: 'automation',
    imageUrl: '/images/testimonials/giuseppe-romano.png',
    shortDescription:
      'Sistema automatizzato per gestire onboarding nuovi pazienti senza errori.',
    keyResult: '10 ore/settimana risparmiate',
    challenge:
      'Il processo di onboarding era completamente manuale: raccolta documenti, consensi informati, anamnesi. Errori frequenti, documenti incompleti, e molto tempo sprecato dallo staff amministrativo.',
    solution:
      'Workflow automatizzato che guida nuovi pazienti passo-passo attraverso compilazione documenti online, upload certificati, firma digitale consensi, e sincronizzazione con cartella clinica digitale. Promemoria automatici per documenti mancanti.',
    results: [
      {
        metric: '10 ore',
        description: 'Risparmiate ogni settimana',
      },
      {
        metric: '99%',
        description: 'Documenti completi (vs 60% prima)',
      },
      {
        metric: '0',
        description: 'Errori amministrativi',
      },
    ],
    testimonial: {
      quote:
        'Risparmiamo 10 ore ogni settimana e zero errori. Il sistema gestisce tutto da solo, dalla raccolta documenti ai promemoria appuntamenti.',
      author: 'Giuseppe Romano',
      role: 'CEO',
      company: 'MediClinic',
    },
    timeline: 'Completato in 6 giorni',
  },
  {
    id: '7',
    slug: 'studio-legale-torino',
    title: 'Studio Legale Torino',
    client: 'Avv. Federica M.',
    clientRole: 'Partner',
    sector: 'Professional Services',
    service: 'Sito Web Ultimate + Chatbot',
    serviceType: 'website',
    imageUrl: '/images/testimonials/federica-m.png',
    shortDescription:
      'Sito SEO ottimizzato con chatbot per acquisizione e qualificazione lead.',
    keyResult: '5x richieste consulenze',
    challenge:
      'Lo studio dipendeva completamente da passaparola e non aveva presenza online efficace. Ricevevano poche richieste e molte non qualificate, sprecando tempo in consulenze non a target.',
    solution:
      'Sito web premium SEO-optimized con blog legale, chatbot intelligente per qualificazione lead automatica, sistema prenotazione consulenze online, e contenuti ottimizzati per posizionamento organico.',
    results: [
      {
        metric: '5x',
        description: 'Aumento richieste di consulenza',
      },
      {
        metric: '80%',
        description: 'Lead pre-qualificati da chatbot',
      },
      {
        metric: 'Top 3',
        description: 'Google per keyword strategiche',
      },
    ],
    testimonial: {
      quote:
        'In 4 mesi abbiamo quintuplicato le richieste di consulenza. Il chatbot filtra i contatti e ci arrivano solo clienti realmente interessati.',
      author: 'Avv. Federica M.',
      role: 'Partner',
      company: 'Studio Legale Torino',
    },
    timeline: 'Completato in 10 giorni',
  },
  {
    id: '8',
    slug: 'salonbella-parrucchiere',
    title: 'SalonBella',
    client: 'Maria G.',
    clientRole: 'Owner',
    sector: 'Beauty',
    service: 'Google Reviews + Chatbot',
    serviceType: 'reviews',
    imageUrl: '/images/testimonials/maria-g.png',
    shortDescription:
      'Sistema recensioni automatico e chatbot per gestione appuntamenti.',
    keyResult: 'Da 12 a 60 recensioni in 4 mesi',
    challenge:
      'Poche recensioni online limitavano la visibilità. Gestione appuntamenti caotica con continue chiamate e conferme manuali. Molte dimenticanze e no-show.',
    solution:
      'Sistema duplice: automazione raccolta recensioni Google dopo ogni servizio + chatbot per prenotazioni e conferme automatiche. Promemoria automatici riducono no-show.',
    results: [
      {
        metric: '60',
        description: 'Recensioni Google (da 12)',
      },
      {
        metric: '50%',
        description: 'Appuntamenti gestiti via chatbot',
      },
      {
        metric: '-90%',
        description: 'Riduzione telefonate',
      },
    ],
    testimonial: {
      quote:
        'Le recensioni sono quintuplicate e gestiamo metà degli appuntamenti automaticamente. Il telefono finalmente non squilla più continuamente.',
      author: 'Maria G.',
      role: 'Owner',
      company: 'SalonBella',
    },
    timeline: 'Completato in 4 giorni',
  },
];

export const stats = [
  { value: '50+', label: 'Progetti Completati' },
  { value: '4+', label: 'Anni Esperienza' },
  { value: '15+', label: 'Settori' },
  { value: '98%', label: 'Clienti Soddisfatti' },
];

export const serviceTypes = [
  { id: 'all', label: 'Tutti i Progetti' },
  { id: 'chatbot', label: 'Chatbot AI' },
  { id: 'website', label: 'Siti Web' },
  { id: 'automation', label: 'Automazioni' },
  { id: 'reviews', label: 'Google Reviews' },
];
