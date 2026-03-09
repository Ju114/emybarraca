import type { Metadata } from "next";
import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { BookCover } from "@/components/BookCover";
import { getBookBySlug, siteConfig } from "@/data/site";
import { buildMetadata, getCanonical } from "@/lib/seo";
import styles from "./page.module.css";

type NovelSpotlight = {
  slug: string;
  publicationDate: string;
  distinction: string;
  publisher: string;
  summary: string;
  tags: string[];
};

type RecognitionItem = {
  distinction: string;
  award: string;
  work: string;
  format: string;
  organizer: string;
  date: string;
  note?: string;
};

type RecognitionGroup = {
  id: string;
  title: string;
  summary: string;
  items: RecognitionItem[];
};

const authorLead =
  "Emy Barraca, nombre literario de Emilia García Castro, desarrolla una trayectoria que une la novela romántica contemporánea con el relato, la carta literaria y el microrrelato. Su recorrido combina obra publicada con Ediciones Rubeo y una presencia constante en certámenes literarios, donde ha reunido un palmarés sólido y sostenido en el tiempo.";

const authorBio = [
  "Bajo el nombre de Emy Barraca, Emilia García Castro ha consolidado una voz narrativa que se mueve con naturalidad entre la amplitud emocional de la novela y la intensidad del texto breve.",
  "Su obra dialoga con los afectos, la memoria y la experiencia íntima, y esa sensibilidad se proyecta tanto en la ficción de largo aliento como en relatos, cartas y microrrelatos reconocidos en numerosos certámenes.",
  "El resultado es el perfil de una autora con recorrido, obra publicada y una relación constante con la escritura literaria: una trayectoria construida con oficio, continuidad y una clara vocación narrativa.",
];

const novelSpotlights: NovelSpotlight[] = [
  {
    slug: "cultivar-dos-jardines",
    publicationDate: "Octubre de 2023",
    distinction:
      'Ganadora del I Certamen Internacional de Novela Corta Romántica "Sanditon. Homenaje a Jane Austen".',
    publisher: "Ediciones Rubeo",
    summary:
      "Su primera novela publicada obtuvo uno de los hitos decisivos de su trayectoria reciente y abrió su etapa editorial con una distinción internacional de especial relevancia en el ámbito romántico.",
    tags: ["Premio internacional", "Novela corta romántica", "Ediciones Rubeo"],
  },
  {
    slug: "un-oceano-de-ida-y-vuelta",
    publicationDate: "Mayo de 2025",
    distinction:
      "Finalista del IV Premio Internacional de Novela Ciudad Ibera de Tugia.",
    publisher: "Ediciones Rubeo",
    summary:
      "Con esta novela, Emy Barraca reafirma su faceta de novelista con una nueva publicación y un reconocimiento destacado dentro del circuito de premios literarios vinculados a la narrativa contemporánea.",
    tags: ["Finalista internacional", "Narrativa contemporánea", "Ediciones Rubeo"],
  },
];

const recognitionGroups: RecognitionGroup[] = [
  {
    id: "primeros-premios",
    title: "Primeros premios",
    summary:
      "Ocho primeros puestos entre cartas de amor y relatos breves, con especial constancia entre 2016 y 2022.",
    items: [
      {
        distinction: "Premio nacional",
        award: 'XIII Concurso Internacional de Cartas de Amor "El Canal 2"',
        work: "Para mi viajera",
        format: "Relato",
        organizer: "Aranda de Duero",
        date: "Enero de 2016",
      },
      {
        distinction: "Primer premio",
        award: "XXI Certamen literario de Cartas de Amor Villa de Mijas",
        work: "En un día, un universo",
        format: "Carta",
        organizer: "Villa de Mijas",
        date: "Junio de 2017",
      },
      {
        distinction: "Primer premio",
        award: "V Concurso de Relatos Breves de Quintanilla de Arriba",
        work: "Amor de tinta",
        format: "Relato",
        organizer: "Quintanilla de Arriba",
        date: "Agosto de 2017",
      },
      {
        distinction: "Primer premio",
        award: "IV concurso literario Salud y Mujer",
        work: "Emperadora de las montañas",
        format: "Relato",
        organizer: "Ayuntamiento de El Franco",
        date: "Marzo de 2019",
      },
      {
        distinction: "Primer premio",
        award: "V Certamen Literario de Cartas de Amor",
        work: "Tesoro de mi recreo",
        format: "Carta",
        organizer: "Red de Bibliotecas de San Roque",
        date: "Febrero de 2020",
      },
      {
        distinction: "Primer premio",
        award: "XXVII Certamen Literario Fundación DFA",
        work: "La veo en mis sueños",
        format: "Relato",
        organizer: "Fundación DFA",
        date: "Julio de 2020",
      },
      {
        distinction: "Primer premio",
        award: "Concurso San Valentín 2021",
        work: "Boda al amor de una cuadra",
        format: "Relato",
        organizer: "Ayuntamiento de Salas (Asturias)",
        date: "Febrero de 2021",
      },
      {
        distinction: "Primer premio",
        award: 'III concurso de Relato Corto "Huerta Perrasnegras"',
        work: "Principado Nenúfar",
        format: "Relato",
        organizer: "Ecohuerta Perras Negras de Salas (Asturias)",
        date: "Diciembre de 2022",
      },
    ],
  },
  {
    id: "segundos-premios",
    title: "Segundos premios",
    summary:
      "Nueve reconocimientos en cuento infantil, relato y carta literaria, prueba de una presencia continuada en certámenes de naturaleza diversa.",
    items: [
      {
        distinction: "Segundo premio",
        award: "II Concurso de cuentos infantiles Ojos Verdes Ediciones, Cuentos para soñar",
        work: "Tanina Pellejo",
        format: "Cuento infantil",
        organizer: "Ojos Verdes Ediciones",
        date: "Noviembre de 2017",
      },
      {
        distinction: "Segundo premio",
        award: "III Concurso Literario Salud y Mujer",
        work: "Una espartana en madreñas",
        format: "Relato",
        organizer: "Ayuntamiento de El Franco (Asturias)",
        date: "Marzo de 2018",
      },
      {
        distinction: "Segundo premio",
        award: "VII Concurso MarzoRelatos",
        work: "Recordadas rosas",
        format: "Relato",
        organizer: "Ayuntamiento de Espartinas",
        date: "Abril de 2018",
      },
      {
        distinction: "Segundo premio",
        award: "IV Concurso Literario Efecto Mariposa",
        work: "Son doce mis dedos",
        format: "Relato",
        organizer: "Coordinadora ONG de Desarrollo La Rioja",
        date: "Junio de 2018",
      },
      {
        distinction: "Segundo premio",
        award: 'VI Certamen Literario "Universo de cartas de amor y/o desamor"',
        work: "Con a de amor",
        format: "Carta",
        organizer: "Biblioteca Municipal y Concejalía de Cultura del Ayuntamiento de Almedinilla",
        date: "Febrero de 2020",
      },
      {
        distinction: "Segundo premio",
        award: 'IX Certamen Internacional de Relatos Cortos "En torno a San Isidro"',
        work: "Érase un libro una vez",
        format: "Relato",
        organizer: "Ayuntamiento de Saldaña y Pastoral Rural de Palencia",
        date: "Agosto de 2020",
      },
      {
        distinction: "Segundo premio",
        award: "I Certamen Literario La Buena Letra 2021",
        work: "Nacer de ti otra vez",
        format: "Relato",
        organizer: "Asociación de Escritores La Buena Letra y Ayuntamiento de Fuenlabrada",
        date: "Diciembre de 2021",
      },
      {
        distinction: "Segundo premio",
        award: 'III Certamen de relatos breves "Historias de vida"',
        work: "Simbiosis natural",
        format: "Relato",
        organizer: "Asociación de Yecla de Afectados de Cáncer y Familiares",
        date: "Abril de 2023",
      },
      {
        distinction: "Segundo premio",
        award: 'II Certamen Literario de Relato y Poesía "Miranda: Tierra de Leyenda"',
        work: "Farturín y las vasijas mágicas",
        format: "Relato",
        organizer: "Colegio Luisa de Marillac de Miranda de Avilés (Asturias)",
        date: "Junio de 2023",
      },
    ],
  },
  {
    id: "terceros-premios",
    title: "Terceros premios",
    summary:
      "Dos terceros premios que amplían su presencia a la reseña literaria y a la publicación en antología.",
    items: [
      {
        distinction: "Tercer premio",
        award: "I Concurso de relato libre ENES 2019",
        work: "Se buscan roedores",
        format: "Relato",
        organizer: "Encuentro de escritores indies en Sevilla (ENES)",
        date: "Octubre de 2019",
        note: "Publicado en antología.",
      },
      {
        distinction: "Tercer premio",
        award: 'Concurso "El libro que marcó tu vida"',
        work: "El rayo que no cesa, de Miguel Hernández",
        format: "Reseña",
        organizer: "Biblioteca de la UNED de Tudela",
        date: "Abril de 2021",
      },
    ],
  },
  {
    id: "menciones",
    title: "Menciones y accésits",
    summary:
      "Ocho distinciones complementarias que refuerzan la solidez de su recorrido en relato, microrrelato y publicaciones colectivas.",
    items: [
      {
        distinction: "Mención",
        award: "XIII Concurso de Microrrelatos Mineros Manuel Nevado Madrid",
        work: "Volveré a verte",
        format: "Relato",
        organizer: "Fundación Muñiz Zapico",
        date: "Noviembre de 2016",
        note: "Publicado en antología.",
      },
      {
        distinction: "Mención",
        award: "VII Concurso de Relato Breve Doctor Zarco",
        work: "Enfadado con mamá",
        format: "Relato",
        organizer: "Aula Zarco del Hospital Clínico de Madrid",
        date: "Octubre de 2017",
      },
      {
        distinction: "Mención de Honor",
        award: "III Certamen Literario de la Asociación de Familiares de Enfermos de Alzheimer de Mijas",
        work: "Alegato contra la amnesia",
        format: "Relato",
        organizer: "Asociación de Familiares de Enfermos de Alzheimer de Mijas",
        date: "Noviembre de 2017",
      },
      {
        distinction: "Mención Especial Testimonio Histórico",
        award: "XIV Concurso de Microrrelatos Mineros Manuel Nevado Madrid",
        work: "Pequeño comité",
        format: "Relato",
        organizer: "Concurso Manuel Nevado Madrid",
        date: "Diciembre de 2017",
      },
      {
        distinction: "Accésit",
        award: "VII Concurso Literario Amantes de Lechago",
        work: "Canción triste en un bar",
        format: "Relato",
        organizer: "Concurso Amantes de Lechago",
        date: "Agosto de 2018",
      },
      {
        distinction: "Mención de honor",
        award: "I Concurso Letraheridos",
        work: "Coma enseña gramática",
        format: "Relato",
        organizer: "Concurso Letraheridos",
        date: "Marzo de 2021",
      },
      {
        distinction: "Mención especial",
        award: 'I edición del concurso "Recordando a Margarita Salas"',
        work: "El fago y Margarita",
        format: "Microrrelato",
        organizer: "Universidad de Murcia",
        date: "Julio de 2021",
      },
      {
        distinction: "Accésit",
        award: 'IV Concurso de Relato Corto "Periodista Pedro Soler"',
        work: "El alma del valle",
        format: "Relato",
        organizer: "Ayuntamiento de Abarán (Murcia)",
        date: "Diciembre de 2022",
      },
    ],
  },
];

const recognitionCount = recognitionGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

const heroStats = [
  {
    value: "2",
    label: "Novelas publicadas",
    detail: "Dos hitos editoriales consecutivos con Ediciones Rubeo.",
  },
  {
    value: `${recognitionCount}`,
    label: "Reconocimientos literarios",
    detail: "Entre relatos, cartas, microrrelatos y reseña literaria.",
  },
  {
    value: "8",
    label: "Primeros premios",
    detail: "Una constancia premiada en certámenes de alcance diverso.",
  },
  {
    value: "4",
    label: "Líneas de trabajo",
    detail: "Novela, relato, carta literaria y microrrelato.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Sobre Emy",
  description:
    "Biografía y trayectoria literaria de Emy Barraca, nombre literario de Emilia García Castro, novelista y autora de relatos reconocidos.",
  pathname: "/sobre-emy",
});

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.role,
    description: authorLead,
    url: getCanonical("/sobre-emy"),
    image: getCanonical("/images/foto-de-autora.jpeg"),
    award: [
      'I Certamen Internacional de Novela Corta Romántica "Sanditon. Homenaje a Jane Austen"',
      "IV Premio Internacional de Novela Ciudad Ibera de Tugia (finalista)",
    ],
    sameAs: [
      siteConfig.social.youtube,
      siteConfig.social.facebook,
      siteConfig.instagramUrl,
      siteConfig.tiktokUrl,
    ],
    nationality: "ES",
  };

  return (
    <div className="pageShell">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Sobre la autora</p>
          <h1 className={styles.heroTitle}>{siteConfig.name}</h1>
          <p className={styles.heroSubtitle}>
            Nombre literario de {siteConfig.legalName}
          </p>
          <p className={styles.heroLead}>{authorLead}</p>

          <ul className={styles.tagList} aria-label="Ámbitos literarios">
            <li>Novela</li>
            <li>Relatos</li>
            <li>Cartas</li>
            <li>Microrrelatos</li>
          </ul>

          <div className={styles.heroActions}>
            <Link className="btn btnPrimary" href="#novelas-publicadas">
              Ver novelas publicadas
            </Link>
            <Link className="btn btnGhost" href="#reconocimientos">
              Recorrido literario
            </Link>
          </div>
        </div>

        <figure className={styles.heroFigure}>
          <AuthorPortrait
            sizes="(max-width: 767px) 72vw, (max-width: 1100px) 34vw, 320px"
            preload
            frameClassName={styles.authorFrame}
          />
          <figcaption className={styles.caption}>
            Escritura narrativa entre la novela, el relato breve y la carta literaria.
          </figcaption>
        </figure>
      </section>

      <section className={styles.statsGrid} aria-label="Resumen de trayectoria">
        {heroStats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <p className={styles.statValue}>{stat.value}</p>
            <h2 className={styles.statLabel}>{stat.label}</h2>
            <p className={styles.statDetail}>{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="autora-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Emy Barraca, autora</p>
          <h2 id="autora-heading" className="sectionTitle">
            Una voz literaria con obra publicada y recorrido premiado
          </h2>
          <p className={styles.sectionLead}>
            La faceta de novelista y la trayectoria en relato breve se refuerzan mutuamente y
            dibujan una presencia literaria reconocible, madura y sostenida.
          </p>
        </div>

        <div className={styles.authorGrid}>
          <article className={`card ${styles.narrativeCard}`}>
            {authorBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className={styles.asideStack}>
            <article className={`card ${styles.snapshotCard}`}>
              <h3 className={styles.cardTitle}>Trayectoria en breve</h3>
              <dl className={styles.snapshotList}>
                <div>
                  <dt>Firma literaria</dt>
                  <dd>{siteConfig.name}</dd>
                </div>
                <div>
                  <dt>Nombre completo</dt>
                  <dd>{siteConfig.legalName}</dd>
                </div>
                <div>
                  <dt>Editorial</dt>
                  <dd>Ediciones Rubeo</dd>
                </div>
                <div>
                  <dt>Obra publicada</dt>
                  <dd>Dos novelas publicadas, en 2023 y 2025</dd>
                </div>
                <div>
                  <dt>Reconocimientos</dt>
                  <dd>Premios, menciones y accésits en relatos, cartas y microrrelatos</dd>
                </div>
              </dl>
            </article>

            <article className={`card ${styles.noteCard}`}>
              <h3 className={styles.cardTitle}>Hitos recientes</h3>
              <p>
                En novela, su trayectoria reciente queda marcada por dos hitos claros: el premio
                internacional obtenido con <em>Cultivar dos jardines</em> y la condición de
                finalista alcanzada con <em>Un océano de ida y vuelta</em>.
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section
        id="novelas-publicadas"
        className={styles.section}
        aria-labelledby="novelas-heading"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Faceta de novelista</p>
          <h2 id="novelas-heading" className="sectionTitle">
            Novelas publicadas
          </h2>
          <p className={styles.sectionLead}>
            Su obra novelística ha llegado al catálogo de Ediciones Rubeo con dos publicaciones
            ligadas a reconocimientos de relieve dentro del circuito de premios literarios.
          </p>
        </div>

        <div className={styles.novelsGrid}>
          {novelSpotlights.map((novel) => {
            const book = getBookBySlug(novel.slug);

            if (!book) {
              return null;
            }

            return (
              <article key={novel.slug} className={styles.novelCard}>
                <div className={styles.novelCover}>
                  <BookCover
                    book={book}
                    sizes="(max-width: 767px) 72vw, (max-width: 1100px) 28vw, 230px"
                  />
                </div>

                <div className={styles.novelBody}>
                  <p className={styles.novelKicker}>
                    {novel.publisher} · {novel.publicationDate}
                  </p>
                  <h3 className={styles.novelTitle}>{book.title}</h3>
                  <p className={styles.novelDistinction}>{novel.distinction}</p>
                  <p className={styles.novelSummary}>{novel.summary}</p>

                  <ul className={styles.novelTags} aria-label={`Claves de ${book.title}`}>
                    {novel.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <Link className="btn btnGhost" href={`/novelas/${book.slug}`}>
                    Ver ficha de la novela
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="reconocimientos"
        className={styles.section}
        aria-labelledby="reconocimientos-heading"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Reconocimientos literarios</p>
          <h2 id="reconocimientos-heading" className="sectionTitle">
            Una trayectoria sólida en relatos, cartas y microrrelatos
          </h2>
          <p className={styles.sectionLead}>
            Más allá de un único premio, el recorrido de Emy Barraca muestra continuidad,
            diversidad y presencia sostenida en certámenes literarios. El conjunto transmite
            solidez sin perder cercanía: una autora que ha trabajado de forma constante en el
            territorio del texto breve.
          </p>
        </div>

        <div className={styles.recognitionIntro}>
          <article className={`card ${styles.recognitionLeadCard}`}>
            <h3 className={styles.cardTitle}>Panorámica de la trayectoria</h3>
            <p>
              Entre 2016 y 2023, Emilia García Castro ha reunido primeros, segundos y terceros
              premios, además de menciones y accésits, en certámenes de relatos, cartas de amor,
              microrrelatos y reseña literaria.
            </p>
            <p>
              Esta acumulación de reconocimientos no responde a un episodio aislado, sino a una
              trayectoria constante que acompaña y refuerza su faceta de novelista.
            </p>
          </article>

          <div className={styles.recognitionSummaryGrid}>
            {recognitionGroups.map((group) => (
              <article key={group.id} className={styles.recognitionSummaryCard}>
                <p className={styles.recognitionSummaryValue}>{group.items.length}</p>
                <h3 className={styles.recognitionSummaryTitle}>{group.title}</h3>
                <p className={styles.recognitionSummaryText}>{group.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.accordionList}>
          {recognitionGroups.map((group, index) => (
            <details key={group.id} className={styles.accordion} open={index === 0}>
              <summary className={styles.accordionSummary}>
                <div>
                  <p className={styles.accordionEyebrow}>Detalle curricular</p>
                  <h3 className={styles.accordionTitle}>{group.title}</h3>
                  <p className={styles.accordionText}>{group.summary}</p>
                </div>
                <span className={styles.accordionCount}>{group.items.length}</span>
              </summary>

              <div className={styles.accordionBody}>
                <ul className={styles.recognitionList}>
                  {group.items.map((item) => (
                    <li key={`${group.id}-${item.work}`} className={styles.recognitionItem}>
                      <div className={styles.recognitionItemHeader}>
                        <span className={styles.distinctionBadge}>{item.distinction}</span>
                        <p className={styles.recognitionDate}>{item.date}</p>
                      </div>
                      <h4 className={styles.recognitionAward}>{item.award}</h4>
                      <p className={styles.recognitionWork}>
                        <strong>{item.work}</strong> · {item.format}
                      </p>
                      <p className={styles.recognitionOrganizer}>{item.organizer}</p>
                      {item.note ? <p className={styles.recognitionNote}>{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.closingCard}>
        <div>
          <p className={styles.sectionEyebrow}>Cierre</p>
          <h2 className="sectionTitle">Una obra que crece desde la constancia</h2>
          <p className={styles.closingText}>
            La combinación de novela publicada y reconocimientos continuados en el ámbito del
            relato dibuja una carrera literaria con fundamento, sensibilidad y proyección. Bajo el
            nombre de Emy Barraca, Emilia García Castro sigue construyendo una presencia de autora
            que une cercanía, oficio narrativo y prestigio ganado texto a texto.
          </p>
        </div>

        <div className={styles.closingActions}>
          <Link className="btn btnPrimary" href="/novelas">
            Explorar novelas
          </Link>
          <Link className="btn btnGhost" href="/contacto">
            Contacto
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
