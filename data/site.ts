export const SITE_URL = "https://www.emybarraca.com"; // EDITABLE

export type BookStatus = "published" | "in-progress";

export type Book = {
  slug: string;
  title: string;
  type: "Novela" | "Recopilacion";
  status: BookStatus;
  genreOrTone?: string;
  theme?: string;
  setting?: string;
  synopsis: string;
  coverImage: string;
  amazonUrl?: string;
  publicationYear?: string;
  metadata: {
    isbn?: string;
    pages?: number;
    language?: string;
    editorial?: string;
  };
};

export type StoryCategory = "relato" | "microrrelato";

export type StoryReviewField = "title" | "year" | "excerpt";

export type StoryItem = {
  id: string;
  title: string;
  category: StoryCategory;
  yearLabel: string;
  sortYear?: number;
  excerpt?: string;
  externalUrl: string;
  reviewFields?: StoryReviewField[];
};

export type SocialPlatform = "youtube" | "facebook" | "instagram" | "tiktok";

export type SocialLinkItem = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Emy Barraca",
  legalName: "Emilia García Castro",
  role: "Escritora y novelista",
  language: "es-ES",
  tagline: "Historias que vuelven al origen, con la emoción en primer plano.",
  shortIntro:
    "Emy Barraca escribe historias donde la emoción, la memoria y los vínculos ocupan el centro de la escena. Su narrativa se mueve entre la intimidad de los afectos y la huella de los lugares que transforman una vida.",
  contactIntro:
    "Si eres lector, editorial o profesional cultural, este es el mejor punto de encuentro para propuestas, entrevistas y colaboraciones.",
  shortBioFooter:
    "Emy Barraca, nombre literario de Emilia García Castro, es autora de novela y relato premiado. Su obra explora la emoción, la memoria y los vínculos que dejan huella.",
  longBio:
    "Emy Barraca, nombre literario de Emilia García Castro, desarrolla una trayectoria literaria que une la novela con la narrativa breve. Su escritura se mueve en torno a la emoción, la memoria y los vínculos que transforman una vida.\n\nSu obra publicada y sus reconocimientos en certámenes de relato, carta literaria y microrrelato dibujan una voz constante, cercana y literaria, construida con continuidad y vocación narrativa.",
  contactEmail: "contacto@emybarraca.com", // EDITABLE
  // EDITABLE: URLs centrales para canales de contacto.
  instagramUrl: "https://instagram.com/emybarraca", // EDITABLE (placeholder)
  tiktokUrl: "https://tiktok.com/@emybarraca", // EDITABLE (placeholder)
  whatsappUrl: "",
  social: {
    youtube: "",
    facebook: "https://www.facebook.com/emy.barraca",
  },
  primaryCta: {
    label: "Contactar",
    href: "/contacto",
  },
  seo: {
    defaultDescription:
      "Web oficial de la escritora española Emy Barraca. Novelas, relatos, biografía y contacto profesional.",
    ogImage: "/images/og-default.svg", // EDITABLE
  },
};

export const books: Book[] = [
  {
    slug: "cultivar-dos-jardines",
    title: "Cultivar dos jardines",
    type: "Novela",
    status: "published",
    genreOrTone: "Drama sentimental",
    setting: "Gingerville, India",
    synopsis:
      'Novela publicada por Ediciones Rubeo en octubre de 2023 y ganadora del I Certamen Internacional de Novela Corta Romántica "Sanditon. Homenaje a Jane Austen", ambientada en Gingerville, India.',
    coverImage: "/images/books/cultivar-dos-jardines.jpg",
    publicationYear: "2023",
    metadata: {
      language: "Español",
      editorial: "Ediciones Rubeo",
      pages: 0,
    },
  },
  {
    slug: "un-oceano-de-ida-y-vuelta",
    title: "Un océano de ida y vuelta",
    type: "Novela",
    status: "published",
    theme: "Herencia y empoderamiento",
    setting: "Miami y Asturias",
    synopsis:
      "Novela publicada por Ediciones Rubeo en mayo de 2025 y finalista del IV Premio Internacional de Novela Ciudad Ibera de Tugia, ambientada entre Miami y Asturias.",
    coverImage: "/images/books/un-oceano-de-ida-y-vuelta.jpeg",
    publicationYear: "2025",
    metadata: {
      language: "Español",
      editorial: "Ediciones Rubeo",
      pages: 0,
    },
  },
  {
    slug: "recopilacion-de-relatos",
    title: "Recopilación de relatos",
    type: "Recopilacion",
    status: "in-progress",
    synopsis: "Proyecto en preparación que reunirá una selección de narrativa breve de la autora.",
    coverImage: "/images/books/recopilacion-de-relatos.svg",
    metadata: {
      language: "Español",
    },
  },
];

export const featuredBookSlugs = [
  "cultivar-dos-jardines",
  "un-oceano-de-ida-y-vuelta",
  "recopilacion-de-relatos",
];

export const stories: StoryItem[] = [
  {
    id: "emperadora-de-las-montanas",
    title: "Emperadora de las montañas",
    category: "relato",
    yearLabel: "2021",
    sortYear: 2021,
    excerpt:
      "Nata fue una mujer de una fortaleza inesperada, casi sobrenatural, hasta que cayó postrada en la cama y alcanzó su último día.",
    externalUrl: "https://www.elfranco.es/images/noticias/documento_570.pdf",
  },
  {
    id: "una-espartana-en-madrenas",
    title: "Una espartana en madreñas",
    category: "relato",
    yearLabel: "2018",
    sortYear: 2018,
    excerpt:
      "La abuelita vivió en las montañas y tenía más valor que los trescientos de las Termópilas, con Leónidas al frente.",
    externalUrl: "https://www.elfranco.es/images/noticias/documento_558.pdf",
  },
  {
    id: "contigo-en-doggerland",
    title: "Contigo en Doggerland",
    category: "relato",
    yearLabel: "Pendiente de revisión",
    externalUrl:
      "https://www.solonovelanegra.es/contigo-en-doggerland-de-emilia-garcia-castro/",
    reviewFields: ["year", "excerpt"],
  },
  {
    id: "fallece-un-guerrero",
    title: "Fallece un guerrero",
    category: "relato",
    yearLabel: "2019",
    sortYear: 2019,
    excerpt:
      "Visitar una mina auténtica y poder sentir, aunque sea como turista, lo que vivieron los mineros del pozo San Luis es algo que tenía pendiente.",
    externalUrl:
      "https://vagamundosmoleskin.wordpress.com/2019/05/27/moleskin19-fallece-un-guerrero-autora-emilia-garcia-castro/",
  },
  {
    id: "asi-es-la-guerra",
    title: "Así es la guerra",
    category: "microrrelato",
    yearLabel: "2019",
    sortYear: 2019,
    excerpt:
      "Fue un día como cualquier otro, salvo por una diferencia: no me acordé de ti para nada.",
    externalUrl:
      "https://www.heraldo.es/noticias/ocio-y-cultura/2019/04/17/asi-es-la-guerra-1309854.html",
  },
  {
    id: "ebro",
    title: "Ebro",
    category: "microrrelato",
    yearLabel: "2012",
    sortYear: 2012,
    excerpt: "Me llamo Ebro y hoy voy a desobedecer a mi padre.",
    externalUrl: "https://estanochetecuento.com/276-ebro-de-rio/",
  },
  {
    id: "un-dia-un-universo",
    title: "Un día, un universo",
    category: "relato",
    yearLabel: "2020",
    sortYear: 2020,
    externalUrl:
      "https://www.mijas.es/wp-content/uploads/2020/06/2107%20Premio.%20Un%20dia%20un%20universo.%20Emilia%20Garcia%20Castro.pdf",
    reviewFields: ["excerpt"],
  },
  {
    id: "celos-de-lola",
    title: "Celos de Lola",
    category: "relato",
    yearLabel: "2019",
    sortYear: 2019,
    excerpt:
      "Relato seleccionado de entre los presentados al II concurso de relatos y poesía «Las cenas del Picoesquina».",
    externalUrl:
      "https://rlpicoesquina.wordpress.com/2019/12/27/celos-de-lola-emilia-garcia-castro/",
  },
  {
    id: "mama-me-canta-en-suenos",
    title: "Mamá me canta en sueños",
    category: "relato",
    yearLabel: "2020",
    sortYear: 2020,
    excerpt:
      "Tengo doce años y soy un niño como otro cualquiera del mundo. Lo que es muy diferente es el lugar donde vivo.",
    externalUrl:
      "https://vagamundosmoleskin.wordpress.com/2020/06/23/moleskin20-mama-me-canta-en-suenos-autor-emilia-garcia-castro/",
  },
  {
    id: "el-unico-siempre",
    title: "El único siempre",
    category: "relato",
    yearLabel: "2019",
    sortYear: 2019,
    externalUrl:
      "http://relatohiperbreve.blogspot.com/2019/04/306-el-unico-siempre-adulta-2019.html",
    reviewFields: ["excerpt"],
  },
  {
    id: "craso-error",
    title: "Craso error",
    category: "relato",
    yearLabel: "Pendiente de revisión",
    externalUrl: "https://relatos-cortos.es/aventuras/craso-error/",
    reviewFields: ["year", "excerpt"],
  },
  {
    id: "empresa-por-sorpresa",
    title: "Empresa por sorpresa",
    category: "relato",
    yearLabel: "2022",
    sortYear: 2022,
    excerpt:
      "Quién le mandaría a Huertas meterse a hortelano. Estaría escrito ese destino en su apellido o sería culpa del aburrimiento de cirujano jubilado.",
    externalUrl:
      "https://laorugazl.blogspot.com/2022/08/empresa-por-sorpresa-por-emilia-garcia.html",
  },
  {
    id: "nacer-a-un-lado-del-cielo",
    title: "Nacer a un lado del cielo",
    category: "relato",
    yearLabel: "2021",
    sortYear: 2021,
    excerpt:
      "Uno sabe muy bien cuándo está en las últimas, porque eso que se dice de que ves toda tu vida pasar de golpe, como si fuera una película, es verdad.",
    externalUrl: "https://laorugazl.blogspot.com/2021/08/nacer-un-lado-del-cielo-por-emilia.html",
  },
  {
    id: "jaleos-en-la-comunidad",
    title: "Jaleos en la comunidad",
    category: "relato",
    yearLabel: "2021",
    sortYear: 2021,
    excerpt:
      "Lo que le sucedió a mi amiga Choui no se había visto nunca en mi edificio de cuatro pisos más buhardilla.",
    externalUrl:
      "https://pazmartinezpoeta.wordpress.com/sembrando-palabras-2/relatos-2109/jaleos-en-la-comunidad-por-emilia-garcia-castro-oviedo/",
  },
  {
    id: "turismo-virtual",
    title: "Turismo virtual",
    category: "relato",
    yearLabel: "2020",
    sortYear: 2020,
    excerpt:
      "Quien tiene un amigo como Cefe tiene un problema. Es mi inseparable desde niños, pero, como un supercuñado, pertenece a la clase de seres que saben de todo.",
    externalUrl:
      "https://www.hoyesarte.com/literatura/premio-de-cuentos-breves/turismo-virtual_274403/",
  },
  {
    id: "recordadas-rosas",
    title: "Recordadas rosas",
    category: "microrrelato",
    yearLabel: "Pendiente de revisión",
    externalUrl:
      "https://acrobat.adobe.com/id/urn:aaid:sc:EU:a6e1d5a8-d809-40dd-badf-4d85bf4f4346",
    reviewFields: ["year", "excerpt"],
  },
  {
    id: "relato-enlace-adobe-2",
    title: "Relato con enlace Adobe 2",
    category: "relato",
    yearLabel: "Pendiente de revisión",
    externalUrl:
      "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:25da96de-c421-32e9-9b41-909e19473b8c",
    reviewFields: ["title", "year", "excerpt"],
  },
  {
    id: "relato-enlace-adobe-3",
    title: "Relato con enlace Adobe 3",
    category: "relato",
    yearLabel: "Pendiente de revisión",
    externalUrl:
      "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:1588ce50-68af-31eb-ade8-3c40363da372",
    reviewFields: ["title", "year", "excerpt"],
  },
  {
    id: "relato-pdf-espartinas",
    title: "Relato PDF Espartinas",
    category: "relato",
    yearLabel: "Pendiente de revisión",
    externalUrl:
      "https://www.espartinas.es/export/sites/espartinas/.galleries/documentos-noticias/2018marzorelatosfinalistas.pdf",
    reviewFields: ["title", "year", "excerpt"],
  },
];

export const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Emy", href: "/sobre-emy" },
  { label: "Novelas", href: "/novelas" },
  { label: "Relatos", href: "/relatos" },
  { label: "Contacto", href: "/contacto" },
];

export const socialLinks = [
  { platform: "youtube", label: "YouTube", href: siteConfig.social.youtube },
  { platform: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { platform: "instagram", label: "Instagram", href: siteConfig.instagramUrl },
  { platform: "tiktok", label: "TikTok", href: siteConfig.tiktokUrl },
].filter((link): link is SocialLinkItem => Boolean(link.href));

export const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function isPlaceholderValue(value?: string | null) {
  return !value || value.includes("EDITABLE");
}

export function hasBookPurchaseLink(url?: string) {
  return Boolean(url && !isPlaceholderValue(url));
}

function buildAmazonSearchUrl(book: Book) {
  const params = new URLSearchParams({
    i: "stripbooks",
    k: `${book.title} Emilia Garcia Castro`,
  });

  return `https://www.amazon.es/s?${params.toString()}`;
}

export function getBookPurchaseUrl(book: Book) {
  if (hasBookPurchaseLink(book.amazonUrl)) {
    return book.amazonUrl;
  }

  if (book.status !== "published") {
    return undefined;
  }

  return buildAmazonSearchUrl(book);
}

export function getBookDescription(book: Book) {
  if (!isPlaceholderValue(book.synopsis)) {
    return book.synopsis;
  }

  switch (book.slug) {
    case "cultivar-dos-jardines":
      return 'Novela publicada por Ediciones Rubeo en octubre de 2023 y ganadora del I Certamen Internacional de Novela Corta Romántica "Sanditon. Homenaje a Jane Austen".';
    case "un-oceano-de-ida-y-vuelta":
      return "Novela publicada por Ediciones Rubeo en mayo de 2025 y finalista del IV Premio Internacional de Novela Ciudad Ibera de Tugia.";
    case "recopilacion-de-relatos":
      return "Proyecto en proceso dedicado a reunir relatos y textos breves de la autora.";
    default:
      return "";
  }
}

export function getFeaturedBooks() {
  return featuredBookSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is Book => Boolean(book));
}

export function getStories() {
  return [...stories].sort((left, right) => {
    const yearDelta = (right.sortYear ?? -1) - (left.sortYear ?? -1);

    if (yearDelta !== 0) {
      return yearDelta;
    }

    return left.title.localeCompare(right.title, "es");
  });
}
