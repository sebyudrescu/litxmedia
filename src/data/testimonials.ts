export interface Testimonial {
  id: string;
  serviceId: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    serviceId: 'chatbot',
    quote:
      'Da quando abbiamo implementato il chatbot, rispondiamo ai pazienti 24/7 e abbiamo aumentato gli appuntamenti del 40% in due mesi. Niente piu\u0300 chiamate perse.',
    name: 'Dr. Marco Bellini',
    role: 'Odontoiatra',
    company: 'Studio Dentistico Milano',
    rating: 5,
    imageUrl: '/images/testimonials/marco-bellini.png',
  },
  {
    id: 't2',
    serviceId: 'websites',
    quote:
      'Il nuovo sito e\u0300 moderno, veloce e finalmente riceviamo richieste ogni giorno. L\u2019investimento si e\u0300 ripagato in meno di un mese.',
    name: 'Laura Martini',
    role: 'Owner',
    company: 'Centro Estetico Roma',
    rating: 5,
    imageUrl: '/images/testimonials/laura-martini.png',
  },
  {
    id: 't3',
    serviceId: 'reviews',
    quote:
      'In 3 mesi siamo passati da 8 a 45 recensioni Google. Il sistema funziona automaticamente e non dobbiamo fare nulla.',
    name: 'Andrea Conti',
    role: 'Manager',
    company: 'PuliServices',
    rating: 5,
    imageUrl: '/images/testimonials/andrea-conti.png',
  },
  {
    id: 't4',
    serviceId: 'database',
    quote:
      'Abbiamo recuperato clienti che non sentivamo da oltre un anno. 15 nuovi appuntamenti nella prima settimana.',
    name: 'Sara Bianchi',
    role: 'Nutrizionista',
    company: 'NutriLife',
    rating: 5,
    imageUrl: '/images/testimonials/sara-bianchi.png',
  },
  {
    id: 't5',
    serviceId: 'automation',
    quote:
      'LitX Media ha automatizzato il nostro processo di onboarding. Risparmiamo 10 ore ogni settimana e zero errori.',
    name: 'Giuseppe Romano',
    role: 'CEO',
    company: 'MediClinic',
    rating: 5,
    imageUrl: '/images/testimonials/giuseppe-romano.png',
  },
];
