import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-base leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Ultimo aggiornamento: Luglio 2025</p>

      <p className="mb-4">
        Il presente sito web (<strong>gerardonastri.it</strong>) è gestito da Gerardo Nastri,
        sviluppatore web. Questa informativa sulla privacy descrive come vengono
        raccolti, utilizzati e protetti i dati personali degli utenti che compilano il modulo di contatto.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Dati raccolti</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Nome</li>
        <li>Email</li>
        <li>Messaggio</li>
      </ul>
      <p className="mb-4">
        Questi dati vengono raccolti esclusivamente per poter rispondere alle richieste
        inviate tramite il modulo di contatto.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Finalità del trattamento</h2>
      <p className="mb-4">I dati forniti vengono trattati per le seguenti finalità:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Rispondere alle richieste inviate dall’utente</li>
        <li>Gestire eventuali rapporti professionali che possano nascere</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Base giuridica</h2>
      <p className="mb-4">
        Il trattamento è basato sul consenso dell’utente, espresso compilando e inviando il modulo di contatto.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Conservazione dei dati</h2>
      <p className="mb-4">
        I dati vengono conservati solo per il tempo necessario a rispondere alla richiesta
        e non vengono condivisi con terze parti.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Cookie e strumenti di tracciamento</h2>
      <p className="mb-4">
        Questo sito <strong>non utilizza cookie di profilazione</strong> né strumenti di
        tracciamento di terze parti. Potrebbero essere presenti cookie tecnici essenziali
        al funzionamento del sito.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Diritti dell’utente</h2>
      <p className="mb-4">In ogni momento puoi richiedere:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>L’accesso ai tuoi dati</li>
        <li>La rettifica o cancellazione</li>
        <li>La limitazione o opposizione al trattamento</li>
      </ul>
      <p className="mb-4">
        Per esercitare tali diritti puoi scrivere a:{" "}
        <strong>gerardonastri.dev@gmail.com</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Titolare del trattamento</h2>
      <p className="mb-4">
        <strong>Gerardo Nastri</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:gerardonastri.dev@gmail.com"
          className="text-blue-600 underline dark:text-blue-400"
        >
          gerardonastri.dev@gmail.com
        </a>
      </p>

      <p className="mb-4">
        L’utilizzo del sito implica l’accettazione di questa Privacy Policy.
        Eventuali modifiche verranno pubblicate su questa pagina.
      </p>
    </main>
  );
}
