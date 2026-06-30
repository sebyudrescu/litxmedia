import Container from '../components/ui/Container';

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose-invert space-y-6 text-gray-400 leading-relaxed">
            <p className="text-sm text-gray-500">
              Ultimo aggiornamento: Febbraio 2026
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              1. Titolare del Trattamento
            </h2>
            <p>
              Il titolare del trattamento dei dati personali e\u0300 LitX Media, con
              sede operativa in Italia. Per qualsiasi informazione relativa al
              trattamento dei dati personali, e\u0300 possibile contattarci
              all&apos;indirizzo email: info@litxmedia.com
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              2. Tipologie di Dati Raccolti
            </h2>
            <p>
              Raccogliamo le seguenti categorie di dati personali quando
              compilate il form di contatto presente sul nostro sito:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono (facoltativo)</li>
              <li>Servizio di interesse</li>
              <li>Messaggio</li>
            </ul>
            <p>
              Inoltre, attraverso l&apos;utilizzo di cookie tecnici, potremmo raccogliere
              dati di navigazione quali indirizzo IP, tipo di browser, pagine
              visitate e durata della sessione.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              3. Finalita\u0300 del Trattamento
            </h2>
            <p>I dati personali sono trattati per le seguenti finalita\u0300:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Rispondere alle richieste di contatto e fornire informazioni sui
                nostri servizi
              </li>
              <li>Gestire la prenotazione di consulenze gratuite</li>
              <li>
                Adempiere agli obblighi contrattuali e pre-contrattuali
              </li>
              <li>
                Migliorare l&apos;esperienza di navigazione sul nostro sito web
              </li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-8">
              4. Base Giuridica del Trattamento
            </h2>
            <p>
              Il trattamento dei dati personali si basa sul consenso
              dell&apos;interessato (art. 6, comma 1, lett. a del GDPR) e
              sull&apos;esecuzione di misure pre-contrattuali (art. 6, comma 1,
              lett. b del GDPR).
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              5. Conservazione dei Dati
            </h2>
            <p>
              I dati personali saranno conservati per il tempo necessario al
              raggiungimento delle finalita\u0300 per le quali sono stati raccolti,
              e comunque per un periodo non superiore a 24 mesi dall&apos;ultima
              interazione con l&apos;interessato, salvo obblighi di legge che ne
              richiedano una conservazione piu\u0300 lunga.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              6. Diritti dell&apos;Interessato
            </h2>
            <p>
              In conformita\u0300 al Regolamento UE 2016/679 (GDPR), l&apos;interessato
              ha il diritto di:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Accedere ai propri dati personali</li>
              <li>Richiederne la rettifica o la cancellazione</li>
              <li>Limitare il trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilita\u0300 dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p>
              Per esercitare tali diritti, e\u0300 possibile contattarci
              all&apos;indirizzo: info@litxmedia.com
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              7. Sicurezza dei Dati
            </h2>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative adeguate
              per proteggere i dati personali da accessi non autorizzati,
              perdita, distruzione o danno accidentale.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">
              8. Modifiche alla Privacy Policy
            </h2>
            <p>
              Ci riserviamo il diritto di modificare la presente Privacy Policy
              in qualsiasi momento. Le modifiche saranno pubblicate su questa
              pagina con la data di ultimo aggiornamento.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
