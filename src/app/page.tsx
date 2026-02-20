import Image from "next/image";
import ContactForm from "@/components/contact-form";

const services = [
  {
    title: "Nettsider for bedrifter",
    description: "Skreddersydde sider som bygger tillit og konverterer besøkende.",
  },
  {
    title: "Nettbutikk (e-commerce)",
    description: "Salgsklare nettbutikker med fokus på brukerreise og ytelse.",
  },
  {
    title: "Portefølje-nettsider",
    description: "Vis frem prosjekter med et moderne og minimalistisk uttrykk.",
  },
  {
    title: "Booking- og reservasjonsløsninger",
    description: "Effektive løsninger som sparer tid og gir bedre kundeopplevelser.",
  },
  {
    title: "Vedlikehold og oppgraderinger",
    description: "Trygg drift, sikkerhetsoppdateringer og kontinuerlig forbedring.",
  },
  {
    title: "SEO og ytelsesoptimalisering",
    description: "Raskere sider og bedre synlighet i søkemotorer.",
  },
];

const steps = [
  {
    title: "Gratis konsultasjon",
    description: "Vi avklarer behov, målgruppe og hva som skaper verdi for deg.",
  },
  {
    title: "Planlegging og design",
    description: "Vi utvikler struktur, innhold og visuelt uttrykk.",
  },
  {
    title: "Utvikling og testing",
    description: "Moderne teknologi, optimalisert ytelse og kvalitetssikring.",
  },
  {
    title: "Lansering og oppfølging",
    description: "Trygg lansering, opplæring og videre forbedringer.",
  },
];

const projects = [
  {
    title: "Moderne bedriftsnettside",
    description: "Rene linjer og tydelig budskap for en konsulentbedrift.",
    image: "/portfolio-1.svg",
  },
  {
    title: "Nettbutikk",
    description: "Produktsider med høy konvertering og sømløs checkout.",
    image: "/portfolio-2.svg",
  },
  {
    title: "Restaurant-nettside",
    description: "Fristende visuelle flater og enkel bordbestilling.",
    image: "/portfolio-3.svg",
  },
  {
    title: "Personlig portefølje",
    description: "Profesjonell profil for kreative frilansere.",
    image: "/portfolio-4.svg",
  },
];

const reasons = [
  "Personlig oppfølging",
  "Skreddersydde løsninger",
  "Konkurransedyktige priser",
  "Moderne teknologi",
  "Rask levering",
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-navy">NordWeb</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-navy" href="#tjenester">
              Tjenester
            </a>
            <a className="transition hover:text-navy" href="#prosess">
              Prosess
            </a>
            <a className="transition hover:text-navy" href="#arbeid">
              Arbeid
            </a>
            <a className="transition hover:text-navy" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            className="hidden rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-900 md:inline-flex"
            href="#kontakt"
          >
            Få tilbud
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Moderne webbyrå
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Vi bygger moderne nettsider som gir resultater
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                NordWeb hjelper bedrifter og privatpersoner med profesjonelle,
                raske og brukervennlige nettsider – skreddersydd etter behov og
                mål.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                  href="#kontakt"
                >
                  Få uforpliktende tilbud
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy transition hover:border-slate-300"
                  href="#arbeid"
                >
                  Se vårt arbeid
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  SEO-optimalisert
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Mobiltilpasset
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Høy ytelse
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>nordweb.no</span>
                    <span>Uptime 99.9%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-slate-100"></div>
                    <div className="h-3 w-2/3 rounded-full bg-slate-100"></div>
                    <div className="h-3 w-1/2 rounded-full bg-slate-100"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">Leads</p>
                      <p className="text-xl font-semibold text-navy">+38%</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">Hastighet</p>
                      <p className="text-xl font-semibold text-navy">95/100</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-accent/10 px-4 py-3 text-xs font-semibold text-navy">
                    <span className="inline-flex h-2 w-2 rounded-full bg-accent"></span>
                    Klar for produksjon på Vercel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="om" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-navy">
                Om NordWeb
              </h2>
              <p className="text-base text-slate-600">
                NordWeb er et moderne webbyrå som spesialiserer seg på raske,
                sikre og brukervennlige nettsider. Vi kombinerer design,
                teknologi og strategi for å bygge sterk digital tilstedeværelse
                som skaper resultater.
              </p>
              <p className="text-base text-slate-600">
                Vi fokuserer på rent design, høy ytelse, SEO-optimalisering,
                mobiltilpasning og langsiktig verdi – slik at nettsiden din er
                et solid fundament for vekst.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-surface p-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-navy">Vårt fokus</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1">Design</span>
                  <span className="rounded-full bg-white px-3 py-1">Teknologi</span>
                  <span className="rounded-full bg-white px-3 py-1">Strategi</span>
                  <span className="rounded-full bg-white px-3 py-1">SEO</span>
                  <span className="rounded-full bg-white px-3 py-1">Ytelse</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">
                  "NordWeb leverer en helhetlig løsning som tar nettsiden din fra
                  idé til ferdig leveranse."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tjenester" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold text-navy">Våre tjenester</h2>
              <p className="text-base text-slate-600">
                Vi leverer alt fra enkle presentasjonssider til avanserte
                løsninger med integrasjoner.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prosess" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-navy">Hvordan vi jobber</h2>
            <p className="text-base text-slate-600">
              En tydelig prosess som gir forutsigbare leveranser og høy kvalitet.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-navy">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="arbeid" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold text-navy">Arbeidet vårt</h2>
              <p className="text-base text-slate-600">
                Et lite utvalg av prosjekter og konsepter vi har jobbet med.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-navy">
                Hvorfor velge NordWeb
              </h2>
              <p className="text-base text-slate-600">
                Vi er et lite, dedikert team som leverer personlig oppfølging og
                høy kvalitet fra start til slutt.
              </p>
              <div className="flex flex-wrap gap-3">
                {reasons.map((reason) => (
                  <span
                    key={reason}
                    className="rounded-full bg-surface px-4 py-2 text-xs font-semibold text-navy"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-navy p-6 text-white">
              <p className="text-sm text-white/70">Gjennomsnittlig leveringstid</p>
              <p className="mt-2 text-3xl font-semibold">3–6 uker</p>
              <p className="mt-4 text-sm text-white/70">
                Avhengig av prosjektets omfang og behov.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-surface py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-navy">
                Få et uforpliktende tilbud
              </h2>
              <p className="text-base text-slate-600">
                Send oss litt informasjon om prosjektet ditt, så svarer vi innen
                24 timer.
              </p>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                <p className="font-semibold text-navy">Kontakt</p>
                <p className="mt-2">kontakt@nordweb.no</p>
                <p className="mt-4 text-xs text-slate-400">
                  Vi behandler alle henvendelser konfidensielt.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-navy">NordWeb</p>
            <p>kontakt@nordweb.no</p>
          </div>
          <p>© 2026 NordWeb. Alle rettigheter reservert.</p>
        </div>
      </footer>
    </div>
  );
}
