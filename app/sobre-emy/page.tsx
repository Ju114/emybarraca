import type { Metadata } from "next";
import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { siteConfig } from "@/data/site";
import { buildMetadata, getCanonical } from "@/lib/seo";
import styles from "./page.module.css";

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
  "Emy Barraca, nombre literario de Emilia García Castro, ha construido una trayectoria que une la novela con la narrativa breve. Su escritura se mueve entre la emoción, la memoria y los vínculos que dejan huella, y encuentra en cada formato una forma distinta de contar con cercanía, sensibilidad y pulso literario.";

const authorBio = [
  "Bajo el nombre de Emy Barraca, Emilia García Castro desarrolla una voz narrativa atenta a lo íntimo, a los afectos y a los cambios que atraviesan una vida. En su obra conviven la amplitud emocional de la novela y la intensidad concentrada del texto breve.",
  "Su recorrido como autora no se sostiene solo en la publicación de dos novelas, sino también en una práctica continuada de escritura en relatos, cartas y microrrelatos, terreno en el que ha reunido reconocimientos de forma constante a lo largo de los años.",
  "Esa combinación de obra publicada y trayectoria premiada dibuja un perfil literario sólido y reconocible: una autora contemporánea que escribe con sensibilidad, constancia y una clara fidelidad a su universo narrativo.",
];

const recognitionGroups: RecognitionGroup[] = [
  {
    id: "primeros-premios",
    title: "Primeros premios",
    summary:
      "Cartas de amor y relatos breves premiados con continuidad entre 2016 y 2022.",
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
      "Reconocimientos en cuento infantil, relato y carta literaria a lo largo de certámenes de naturaleza diversa.",
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
      "Premios que amplían su recorrido a la reseña literaria y a la publicación en antología.",
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
      "Distinciones complementarias en relato, microrrelato y publicaciones colectivas.",
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

const recognitionSummary = recognitionGroups.map((group) => ({
  id: group.id,
  title: group.title,
  count: group.items.length,
}));

export const metadata: Metadata = buildMetadata({
  title: "Sobre Emy",
  description:
    "Biografía y trayectoria literaria de Emy Barraca, nombre literario de Emilia García Castro, novelista y autora de narrativa breve premiada.",
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
    ].filter(Boolean),
    nationality: "ES",
  };

  return (
    <div className="pageShell">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Sobre la autora</p>
          <h1 className={styles.heroTitle}>{siteConfig.name}</h1>
          <p className={styles.heroSubtitle}>
            Emilia García Castro escribe bajo el nombre de Emy Barraca
          </p>
          <p className={styles.heroLead}>{authorLead}</p>
        </div>

        <figure className={styles.heroFigure}>
          <AuthorPortrait
            sizes="(max-width: 767px) 72vw, (max-width: 1100px) 34vw, 320px"
            preload
            frameClassName={styles.authorFrame}
          />
          <figcaption className={styles.caption}>
            Una voz literaria que alterna la novela con el relato breve sin perder identidad
            ni sensibilidad narrativa.
          </figcaption>
        </figure>
      </section>

      <section className={styles.section} aria-labelledby="autora-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Emy Barraca, autora</p>
          <h2 id="autora-heading" className="sectionTitle">
            Una presentación más biográfica y cercana
          </h2>
          <p className={styles.sectionLead}>
            Esta página reúne el contexto de autora y una panorámica clara de su recorrido
            literario, con una lectura más limpia y centrada en lo esencial.
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
              <h3 className={styles.cardTitle}>Rasgos de su escritura</h3>
              <dl className={styles.snapshotList}>
                <div>
                  <dt>Emoción</dt>
                  <dd>Historias donde los afectos y la intimidad ocupan un lugar central.</dd>
                </div>
                <div>
                  <dt>Memoria</dt>
                  <dd>La huella del pasado y el regreso a los lugares que transforman.</dd>
                </div>
                <div>
                  <dt>Formas</dt>
                  <dd>Novela, relato, carta literaria y microrrelato como espacios complementarios.</dd>
                </div>
                <div>
                  <dt>Trayectoria</dt>
                  <dd>Obra publicada y reconocimientos sostenidos en certámenes literarios.</dd>
                </div>
              </dl>
            </article>
          </aside>
        </div>
      </section>

      <section id="trayectoria" className={styles.section} aria-labelledby="trayectoria-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Trayectoria literaria</p>
          <h2 id="trayectoria-heading" className="sectionTitle">
            Premios y reconocimientos que ordenan su recorrido
          </h2>
          <p className={styles.sectionLead}>
            La continuidad en certámenes de narrativa breve acompaña y refuerza su faceta como
            novelista, con un historial de premios que se extiende a lo largo de varios años.
          </p>
        </div>

        <div className={styles.recognitionIntro}>
          <article className={`card ${styles.recognitionLeadCard}`}>
            <p>
              Entre 2016 y 2023, Emilia García Castro ha reunido {recognitionCount} premios,
              menciones y accésits en relato, carta literaria, microrrelato y cuento infantil.
            </p>
            <dl className={styles.recognitionStats} aria-label="Resumen de premios y reconocimientos">
              {recognitionSummary.map((group) => (
                <div key={group.id}>
                  <dt>{group.title}</dt>
                  <dd>{group.count}</dd>
                </div>
              ))}
            </dl>
            <p>
              El conjunto habla de continuidad, diversidad de formatos y una voz literaria que
              ha mantenido presencia constante en certámenes muy distintos.
            </p>
          </article>

          <article className={`card ${styles.totalRecognitionCard}`}>
            <p className={styles.totalRecognitionLabel}>Total de reconocimientos</p>
            <p className={styles.totalRecognitionValue}>{recognitionCount}</p>
            <p className={styles.totalRecognitionText}>
              8 primeros premios, 9 segundos premios, 2 terceros premios y 8 menciones y
              accésits integrados en una sola lectura de trayectoria.
            </p>
          </article>
        </div>

        <div className={styles.accordionList}>
          {recognitionGroups.map((group, index) => (
            <details key={group.id} className={styles.accordion} open={index === 0}>
              <summary className={styles.accordionSummary}>
                <div className={styles.accordionHeader}>
                  <p className={styles.accordionEyebrow}>Detalle de trayectoria</p>
                  <p className={styles.accordionCount}>
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "reconocimiento" : "reconocimientos"}
                  </p>
                </div>
                <div>
                  <h3 className={styles.accordionTitle}>{group.title}</h3>
                  <p className={styles.accordionText}>{group.summary}</p>
                </div>
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
          <h2 className="sectionTitle">Una autora que escribe desde la constancia</h2>
          <p className={styles.closingText}>
            Bajo el nombre de Emy Barraca, Emilia García Castro ha ido construyendo una presencia
            literaria con obra publicada, sensibilidad narrativa y un recorrido premiado que
            refuerza su credibilidad sin restarle cercanía. El resultado es una autora con voz,
            trayectoria y un universo propio en expansión.
          </p>
        </div>

        <div className={styles.closingActions}>
          <Link className="btn btnPrimary" href="/novelas">
            Explorar novelas
          </Link>
          <Link className="btn btnGhost" href="/relatos">
            Leer narrativa breve
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
