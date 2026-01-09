import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="63.924"
        height="56.899"
        viewBox="0 0 63.924 56.899"
      >
        <path
          id="Icon_core-map"
          data-name="Icon core-map"
          d="M62.714,8.877,42.889,3.332l-19.883,5.6L4.515,3.687A2.663,2.663,0,0,0,1.125,6.25V51.609a3.209,3.209,0,0,0,2.324,3.075L23,60.23l19.892-5.6,18.775,5.252a2.663,2.663,0,0,0,3.381-2.566V11.955a3.207,3.207,0,0,0-2.335-3.078ZM20.7,55.148,5.387,50.8V8.364L20.7,12.709ZM40.76,50.8l-15.8,4.45V12.808l15.8-4.45Zm20.027,4.407L45.021,50.8V8.353l15.766,4.41Z"
          transform="translate(-1.125 -3.332)"
          fill="#019289"
        />
      </svg>
    ),
    title: "Luogo",
    paragraphHTML: `<a class='text-primary hover:underline' target='_blank' href='https://www.google.com/maps/place/Grand+Hotel+Salerno/@40.6725175,14.7733016,17z/data=!3m1!4b1!4m9!3m8!1s0x133bc246d5b3550b:0x14eeac8b514c5197!5m2!4m1!1i2!8m2!3d40.6725135!4d14.7758765!16s%2Fg%2F1tj5515h?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
       Grand Hotel Salerno via Lungomare Clemente Tafuri, 1 - 84127 Salerno (SA)
      </a> con parcheggio <a class='text-primary hover:underline' target='_blank' href='https://www.google.com/maps/place/Via+Torrione,+6-80,+84127+Salerno+SA/@40.6731502,14.7749734,18z/data=!3m1!4b1!4m17!1m10!3m9!1s0x133bc246d5b3550b:0x14eeac8b514c5197!2sGrand+Hotel+Salerno!5m2!4m1!1i2!8m2!3d40.6725135!4d14.7758765!16s%2Fg%2F1tj5515h!3m5!1s0x133bc2476c3a2413:0x194f102b39a83728!8m2!3d40.6731482!4d14.7762257!16s%2Fg%2F11w36_cs09?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>qui</a>
      <br/> <strong>l'acqua nelle stanze non è potabile</strong>
      <br/> <strong>WIFI in camera è libero </strong>`,
  },
  {
    id: 10,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41.497"
        height="60"
        viewBox="0 0 41.497 60"
      >
        <path
          id="Icon_simple-googlemaps"
          data-name="Icon simple-googlemaps"
          d="M45.117,12c3.03,6.52,2.343,14.195-1.013,20.432-2.752,5.117-6.86,9.35-10.245,14.035a37.536,37.536,0,0,0-4.172,6.817c-.353.813-.658,1.645-.958,2.48s-.56,1.682-.85,2.52c-.272.785-.59,1.71-1.568,1.717h-.017c-1.165,0-1.448-1.325-1.737-2.217A37.294,37.294,0,0,0,22.01,51.47a53.175,53.175,0,0,0-4.475-6.677ZM17.662,19.263,7.765,31.03c1.81,3.85,4.553,7.157,7.178,10.45.617.775,1.235,1.555,1.843,2.34l12.46-14.812-.072.025a8.862,8.862,0,0,1-10.98-4.967,8.443,8.443,0,0,1-.522-1.79,8.858,8.858,0,0,1-.01-3l0-.017ZM10.03,7.873l-.008.01A22.217,22.217,0,0,0,7.23,29.807L19.192,15.585l-.145-.125L10.03,7.873ZM32.952,1.09,23.357,12.5q.033-.014.068-.025a8.862,8.862,0,0,1,10.55,4.065,8.011,8.011,0,0,1,.943,2.612,8.863,8.863,0,0,1,.03,3.05l-.007.04,9.59-11.4A20.955,20.955,0,0,0,32.975,1.1l-.022-.008ZM19.965,14.67,31.7.713l-.118-.03A20.775,20.775,0,0,0,26.265,0,21.1,21.1,0,0,0,10.842,6.915l-.04.045,9.163,7.71Z"
          transform="translate(-5.55)"
          fill="#019289"
        />
      </svg>
    ),
    title: "Parcheggio",
    paragraphHTML: `<strong>Parcheggio via A. Carella</strong>: aperto ( con parcometro), adiacente Hotel Salerno, Tariffa 1€ ogni 2 ore, (aperto H24)<br />
<strong>Parcheggio Vinciprova: chiuso  </strong>( con sbarre), a circa 100 m dall' Hotel Salerno, Tariffa 1 € ogni 2 ore, (aperto H 24 )<br />
<strong>Parcheggio interrato Foce Irno Chiuso</strong> ( con sbarre), con ingresso da via lungomare, adiacente Hotel Salerno, tariffa diurna 1 € ogni ora, tariffa notturna 1 € ogni 2 ore, (aperto H 24 ).`,
  },

  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35.918"
        height="45.425"
        viewBox="0 0 35.918 45.425"
      >
        <path
          id="Icon_core-euro"
          data-name="Icon core-euro"
          d="M35.307,10.413H43.23V6.188H35.307a22.75,22.75,0,0,0-21.286,14.79H7.313V25.2H12.9a22.736,22.736,0,0,0,0,7.395H7.313v4.226h6.709a22.75,22.75,0,0,0,21.286,14.79h7.923V47.387H35.307a18.51,18.51,0,0,1-16.7-10.564H39V32.6H17.192a18.574,18.574,0,0,1,0-7.395H39V20.977h-20.4a18.51,18.51,0,0,1,16.7-10.564Z"
          transform="translate(-7.313 -6.188)"
          fill="#019289"
        />
      </svg>
    ),
    title: "Costi",
    paragraphHTML: `<strong>Camera singola Esaurita</strong> <br/>
  <strong>Camera doppia</strong> euro 230,00€ <br/>
  <strong>Camera tripla Esaurita</strong><br/>
  <strong>Camera quadrupla Esaurita</strong><br/>
  la tassa di soggiorno, di tre euro per notte, è inclusa nel prezzo della stanza.`,
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 52 52"
      >
        <g
          id="Icon_akar-calendar"
          data-name="Icon akar-calendar"
          transform="translate(-1.5 -1.5)"
        >
          <path
            id="Tracciato_62"
            data-name="Tracciato 62"
            d="M12.8,6H42.2A9.8,9.8,0,0,1,52,15.8V40.3a9.8,9.8,0,0,1-9.8,9.8H12.8A9.8,9.8,0,0,1,3,40.3V15.8A9.8,9.8,0,0,1,12.8,6Z"
            transform="translate(0 1.9)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_63"
            data-name="Tracciato 63"
            d="M17.7,3v9.8M37.3,3v9.8M3,22.6H52"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
    title: "Giorni",
    paragraph: "Dal 7 al 9 di Marzo",
  },
  {
    id: 8,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59.341"
        height="59.341"
        viewBox="0 0 59.341 59.341"
      >
        <g
          id="Icon_akar-clock"
          data-name="Icon akar-clock"
          transform="translate(1.5 1.5)"
        >
          <path
            id="Tracciato_64"
            data-name="Tracciato 64"
            d="M59.341,31.171A28.171,28.171,0,1,1,31.171,3,28.171,28.171,0,0,1,59.341,31.171Z"
            transform="translate(-3 -3)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_65"
            data-name="Tracciato 65"
            d="M26.451,37.171l-6.8-6.8A5.634,5.634,0,0,1,18,26.387V9"
            transform="translate(10.171 2.268)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
    title: "Orari",
    paragraphHTML:
      "Il check-in si potra' effettuare dalle ore 14:00 di venerdi' 7 - il corso iniziera' alle ore 15 e terminera' alle ore 12 di domenica 9.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64.975"
        height="53.707"
        viewBox="0 0 64.975 53.707"
      >
        <g
          id="Icon_feather-users"
          data-name="Icon feather-users"
          transform="translate(1.5 1.5)"
        >
          <path
            id="Tracciato_66"
            data-name="Tracciato 66"
            d="M46.573,39.4V33.768A11.268,11.268,0,0,0,35.3,22.5H12.768A11.268,11.268,0,0,0,1.5,33.768V39.4"
            transform="translate(-1.5 11.305)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_67"
            data-name="Tracciato 67"
            d="M30.037,15.768A11.268,11.268,0,1,1,18.768,4.5,11.268,11.268,0,0,1,30.037,15.768Z"
            transform="translate(3.768 -4.5)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_68"
            data-name="Tracciato 68"
            d="M43.719,55.036V49.4a11.268,11.268,0,0,0-8.451-10.9M24,4.7a11.268,11.268,0,0,1,0,21.832"
            transform="translate(18.256 -4.329)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
    title: "Partecipanti",
    paragraph: "Responsabili fino a capitolo",
  },

  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59.341"
        height="48.073"
        viewBox="0 0 59.341 48.073"
      >
        <g
          id="Icon_akar-credit-card"
          data-name="Icon akar-credit-card"
          transform="translate(1.5 1.5)"
        >
          <path
            id="Tracciato_69"
            data-name="Tracciato 69"
            d="M8.634,6H53.707a5.634,5.634,0,0,1,5.634,5.634v33.8a5.634,5.634,0,0,1-5.634,5.634H8.634A5.634,5.634,0,0,1,3,45.439v-33.8A5.634,5.634,0,0,1,8.634,6Z"
            transform="translate(-3 -6)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_70"
            data-name="Tracciato 70"
            d="M24.585,16.362A7.871,7.871,0,0,0,18.548,13.5,8.258,8.258,0,0,0,10.5,21.951,8.258,8.258,0,0,0,18.548,30.4a7.866,7.866,0,0,0,6.037-2.862m14.085-5.589A8.258,8.258,0,0,1,30.622,30.4a8.257,8.257,0,0,1-8.048-8.451A8.257,8.257,0,0,1,30.622,13.5,8.258,8.258,0,0,1,38.671,21.951Z"
            transform="translate(3.585 0.585)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
    title: "Metodo di pagamento",
    paragraphHTML: `Bonifico bancario <strong>entro il 10 Febbraio</strong> <br/>
    intestato a: Dapro Viaggi Tour Operator Sas <br>
    IBAN: <strong>IT93S0542415102000000001950</strong><br />
    Banca Popolare di Bari <br />
    Causale: SGI - Nome, Cognome, Camera singola/doppia/tripla/quadrupla`,
  },

  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60.519"
        height="48.073"
        viewBox="0 0 60.519 48.073"
      >
        <g
          id="Icon_feather-mail"
          data-name="Icon feather-mail"
          transform="translate(2.089 1.5)"
        >
          <path
            id="Tracciato_71"
            data-name="Tracciato 71"
            d="M8.634,6H53.707a5.651,5.651,0,0,1,5.634,5.634v33.8a5.651,5.651,0,0,1-5.634,5.634H8.634A5.651,5.651,0,0,1,3,45.439v-33.8A5.651,5.651,0,0,1,8.634,6Z"
            transform="translate(-3 -6)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Tracciato_72"
            data-name="Tracciato 72"
            d="M59.341,9,31.171,28.719,3,9"
            transform="translate(-3 -3.366)"
            fill="none"
            stroke="#019289"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    ),
    title: "Contatti",
    paragraphHTML: `Per chiarimenti e/o informazioni scrivere al comitato dell'incontro:
                <a class='text-primary hover:underline' target='_blank' href="mailto:gruppo.ginkgo@sgi-italia.org">
                  gruppo.ginkgo@sgi-italia.org
                </a>`,
  },
];
export default featuresData;
