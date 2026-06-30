import Container from '../components/ui/Container';

export default function CookiePolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Cookie Policy
          </h1>
          <div className="prose-invert space-y-6 text-gray-400 leading-relaxed">
            <p className="text-sm text-gray-500">
              Ultimo aggiornamento: Febbraio 2026
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              1. Cosa Sono i Cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che vengono salvati sul tuo
              dispositivo quando visiti un sito web. Servono a memorizzare
              informazioni sulla tua navigazione per migliorare l&apos;esperienza
              utente.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              2. Cookie Utilizzati
            </h2>

            <h3 className="text-lg font-semibold text-white mt-6">
              Cookie Tecnici Necessari
            </h3>
            <p>
              Questi cookie sono essenziali per il funzionamento del sito web e
              non possono essere disattivati. Includono:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong className="text-gray-300">cookie_consent</strong> -
                Memorizza le tue preferenze sui cookie (localStorage)
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">
              Cookie Analitici
            </h3>
            <p>
              Se accetti i cookie analitici, potremmo utilizzare strumenti come
              Google Analytics per raccogliere dati anonimi sull&apos;utilizzo del
              sito, come pagine visitate, durata delle visite e percorso di
              navigazione. Questi dati ci aiutano a migliorare il sito.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              3. Gestione dei Cookie
            </h2>
            <p>
              Al primo accesso al sito, ti viene mostrato un banner che ti
              permette di scegliere tra:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong className="text-gray-300">Accetta tutti</strong> -
                Acconsenti all&apos;uso di tutti i cookie
              </li>
              <li>
                <strong className="text-gray-300">Solo necessari</strong> -
                Vengono utilizzati solo i cookie tecnici essenziali
              </li>
              <li>
                <strong className="text-gray-300">Rifiuta</strong> - Nessun
                cookie non essenziale viene installato
              </li>
            </ul>
            <p>
              Puoi inoltre gestire le preferenze sui cookie attraverso le
              impostazioni del tuo browser. Tieni presente che la
              disattivazione di alcuni cookie potrebbe influire sulla
              funzionalita\u0300 del sito.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              4. Cookie di Terze Parti
            </h2>
            <p>
              Il nostro sito potrebbe includere servizi di terze parti che
              installano propri cookie, come strumenti di analisi o widget
              social. Questi cookie sono soggetti alle rispettive privacy policy
              dei fornitori terzi.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              5. Durata dei Cookie
            </h2>
            <p>
              I cookie tecnici vengono eliminati alla chiusura del browser
              (cookie di sessione) oppure hanno una durata massima di 12 mesi
              (cookie persistenti). Le preferenze sui cookie vengono conservate
              per 12 mesi.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              6. Aggiornamenti
            </h2>
            <p>
              Questa Cookie Policy puo\u0300 essere aggiornata periodicamente.
              Eventuali modifiche saranno pubblicate su questa pagina.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">7. Contatti</h2>
            <p>
              Per qualsiasi domanda relativa alla nostra Cookie Policy, puoi
              contattarci all&apos;indirizzo: info@litxmedia.com
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
