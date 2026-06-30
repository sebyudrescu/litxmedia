export interface CaseStudy {
  id: string;
  serviceId: string;
  sector: string;
  client: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    serviceId: 'chatbot',
    sector: 'Healthcare',
    client: 'Studio Dentistico Milano',
    challenge:
      'Lo studio perdeva il 30% delle chiamate fuori orario e il team spendeva ore ogni giorno rispondendo alle stesse domande su orari, prezzi e disponibilita\u0300.',
    solution:
      'Abbiamo implementato un chatbot intelligente sul sito web e su WhatsApp che risponde automaticamente alle domande frequenti, qualifica i pazienti e prenota visite direttamente nel calendario dello studio.',
    results: [
      { label: 'Aumento appuntamenti', value: '+40%' },
      { label: 'Tempo risparmiato/settimana', value: '15 ore' },
      { label: 'Tasso di risposta', value: '100%' },
      { label: 'Tempo di implementazione', value: '2 giorni' },
    ],
    testimonial:
      'Da quando abbiamo implementato il chatbot, rispondiamo ai pazienti 24/7 e abbiamo aumentato gli appuntamenti del 40% in due mesi.',
    testimonialAuthor: 'Dr. Marco Bellini',
    testimonialRole: 'Odontoiatra',
  },
  {
    id: 'cs2',
    serviceId: 'websites',
    sector: 'Beauty',
    client: 'Centro Estetico Roma',
    challenge:
      'Il sito web era datato, lento e non ottimizzato per mobile. Le clienti non riuscivano a trovare informazioni sui trattamenti e il form di contatto non funzionava.',
    solution:
      'Abbiamo progettato e sviluppato un sito web moderno, veloce e ottimizzato per conversioni con galleria trattamenti, sistema di prenotazione e SEO locale.',
    results: [
      { label: 'Richieste giornaliere', value: 'Da 1 a 8' },
      { label: 'Velocita\u0300 caricamento', value: '1.2 secondi' },
      { label: 'Posizione Google locale', value: 'Top 5' },
      { label: 'Tempo di consegna', value: '3 giorni' },
    ],
    testimonial:
      'Il nuovo sito e\u0300 moderno, veloce e finalmente riceviamo richieste ogni giorno. L\u2019investimento si e\u0300 ripagato in meno di un mese.',
    testimonialAuthor: 'Laura Martini',
    testimonialRole: 'Owner',
  },
  {
    id: 'cs3',
    serviceId: 'reviews',
    sector: 'Cleaning',
    client: 'PuliServices',
    challenge:
      'Solo 8 recensioni Google dopo 3 anni di attivita\u0300. I competitors avevano 50+ recensioni e apparivano prima nelle ricerche locali.',
    solution:
      'Abbiamo implementato un sistema automatico che invia una richiesta di recensione personalizzata dopo ogni servizio completato, con follow-up automatico.',
    results: [
      { label: 'Recensioni in 3 mesi', value: 'Da 8 a 45' },
      { label: 'Rating medio', value: '4.8 stelle' },
      { label: 'Visibilita\u0300 Google Maps', value: '+50%' },
      { label: 'Sforzo manuale', value: 'Zero' },
    ],
    testimonial:
      'In 3 mesi siamo passati da 8 a 45 recensioni Google. Il sistema funziona automaticamente e non dobbiamo fare nulla.',
    testimonialAuthor: 'Andrea Conti',
    testimonialRole: 'Manager',
  },
  {
    id: 'cs4',
    serviceId: 'database',
    sector: 'Healthcare',
    client: 'NutriLife',
    challenge:
      'Un database di oltre 500 clienti passati completamente inattivo. Nessuna comunicazione da mesi, clienti persi alla concorrenza.',
    solution:
      'Abbiamo creato campagne di riattivazione segmentate con messaggi personalizzati, offerte mirate e sequenze di follow-up automatiche.',
    results: [
      { label: 'Clienti riattivati', value: '85' },
      { label: 'Nuovi appuntamenti prima settimana', value: '15' },
      { label: 'Fatturato recuperato', value: '+12.000\u20AC' },
      { label: 'Costi pubblicitari', value: '0\u20AC' },
    ],
    testimonial:
      'Abbiamo recuperato clienti che non sentivamo da oltre un anno. 15 nuovi appuntamenti nella prima settimana.',
    testimonialAuthor: 'Sara Bianchi',
    testimonialRole: 'Nutrizionista',
  },
  {
    id: 'cs5',
    serviceId: 'automation',
    sector: 'Healthcare',
    client: 'MediClinic',
    challenge:
      'Il processo di onboarding dei nuovi pazienti richiedeva 45 minuti per paziente tra raccolta dati, invio documenti e conferme. Errori frequenti e pazienti frustrati.',
    solution:
      'Abbiamo automatizzato l\u2019intero processo: raccolta dati digitale, invio automatico documenti, conferme appuntamento e reminder pre-visita.',
    results: [
      { label: 'Tempo risparmiato/settimana', value: '10+ ore' },
      { label: 'Errori di data entry', value: '0' },
      { label: 'Soddisfazione pazienti', value: '+35%' },
      { label: 'Tempo onboarding', value: 'Da 45 a 5 min' },
    ],
    testimonial:
      'LitX Media ha automatizzato il nostro processo di onboarding. Risparmiamo 10 ore ogni settimana e zero errori.',
    testimonialAuthor: 'Giuseppe Romano',
    testimonialRole: 'CEO',
  },
  {
    id: 'cs6',
    serviceId: 'websites',
    sector: 'Food & Beverage',
    client: 'Ristorante Da Luigi',
    challenge:
      'Nessuna presenza online, i clienti non trovavano il menu aggiornato e le prenotazioni avvenivano solo telefonicamente.',
    solution:
      'Sito web con menu digitale sempre aggiornato, sistema di prenotazione online, integrazione Google Maps e ottimizzazione SEO locale.',
    results: [
      { label: 'Prenotazioni online', value: '+60%' },
      { label: 'Chiamate ridotte', value: '-40%' },
      { label: 'Visibilita\u0300 Google', value: 'Top 3 locale' },
      { label: 'Tempo di consegna', value: '2 giorni' },
    ],
    testimonial:
      'Finalmente i clienti possono prenotare online e vedere il menu aggiornato. Le prenotazioni sono aumentate notevolmente.',
    testimonialAuthor: 'Luigi Ferrara',
    testimonialRole: 'Titolare',
  },
];

export const sectors = [
  'Tutti',
  'Healthcare',
  'Beauty',
  'Cleaning',
  'Food & Beverage',
];
