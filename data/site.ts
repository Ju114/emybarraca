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

export type StoryMode = "text" | "external";

export type StoryCategory = "relato-breve" | "microrrelato";

export type StoryItem = {
  id: string;
  slug: string;
  title: string;
  category: StoryCategory;
  year?: string;
  excerpt?: string;
  mode: StoryMode;
  content?: string;
  externalUrl?: string;
  migration: {
    source: "wix" | "manual";
    wixItemId?: string;
    notes?: string;
  };
};

export type AwardItem = {
  title: string;
  year?: string;
  organization?: string;
  isPlaceholder?: boolean;
};

export type SocialPlatform = "youtube" | "facebook" | "instagram" | "tiktok";

export type SocialLinkItem = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Emy Barraca",
  role: "Escritora y novelista",
  language: "es-ES",
  tagline: "Historias que vuelven al origen, con la emoción en primer plano.",
  shortIntro:
    "Emy Barraca escribe novelas donde lo íntimo y lo cotidiano se entrelazan con una mirada serena. Sus personajes atraviesan distancia geográfica y emocional para regresar a lo esencial: la verdad de los afectos.",
  contactIntro:
    "Si eres lector, editorial o profesional cultural, este es el mejor punto de encuentro para propuestas, entrevistas y colaboraciones.",
  shortBioFooter:
    "Emy Barraca es autora de narrativa romántica y realista. Sus historias exploran la memoria emocional, los vínculos familiares y los lugares que nos transforman.",
  longBio:
    "EDITABLE: Emy Barraca (España) desarrolla una obra centrada en el drama sentimental y la narrativa realista. Su escritura se caracteriza por una voz clara, sensible y atenta a los matices del vínculo humano. A lo largo de su trayectoria, ha trabajado en relatos y novelas que conectan escenarios internacionales con raíces emocionales profundas.\n\nEDITABLE: Actualmente combina la publicación de novelas con proyectos de relato breve y colaboraciones literarias. Esta sección debe actualizarse con datos verificados sobre formación, hitos editoriales, medios y presentaciones.",
  contactEmail: "contacto@emybarraca.com", // EDITABLE
  // EDITABLE: URLs centrales para canales de contacto.
  instagramUrl: "https://instagram.com/emybarraca", // EDITABLE (placeholder)
  tiktokUrl: "https://tiktok.com/@emybarraca", // EDITABLE (placeholder)
  whatsappUrl: "https://wa.me/34000000000", // EDITABLE (placeholder)
  social: {
    youtube: "https://www.youtube.com/@emybarraca", // EDITABLE
    facebook: "https://www.facebook.com/emybarraca", // EDITABLE
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

export const awards: AwardItem[] = [
  {
    title: "EDITABLE: Premio literario por confirmar",
    year: "EDITABLE",
    organization: "EDITABLE",
    isPlaceholder: true,
  },
  {
    title: "EDITABLE: Reconocimiento editorial por confirmar",
    year: "EDITABLE",
    organization: "EDITABLE",
    isPlaceholder: true,
  },
  {
    title: "EDITABLE: Mencion en certamen narrativo",
    year: "EDITABLE",
    organization: "EDITABLE",
    isPlaceholder: true,
  },
];

export const books: Book[] = [
  {
    slug: "cultivar-dos-jardines",
    title: "Cultivar dos jardines",
    type: "Novela",
    status: "published",
    genreOrTone: "Drama sentimental",
    setting: "Gingerville, India",
    synopsis:
      "EDITABLE: Una historia de decisiones intimas y segundas oportunidades en un entorno que obliga a elegir entre la lealtad al pasado y la promesa de una vida nueva.",
    coverImage: "/images/books/cultivar-dos-jardines.svg",
    amazonUrl: "https://www.amazon.es/dp/EDITABLE-CULTIVAR",
    publicationYear: "EDITABLE",
    metadata: {
      language: "Espanol",
      editorial: "EDITABLE",
      isbn: "EDITABLE",
      pages: 0,
    },
  },
  {
    slug: "un-oceano-de-ida-y-vuelta",
    title: "Un oceano de ida y vuelta",
    type: "Novela",
    status: "published",
    theme: "Herencia y empoderamiento",
    setting: "Miami y Asturias",
    synopsis:
      "EDITABLE: Entre dos orillas y una herencia inesperada, la protagonista reconstruye su identidad y aprende a nombrar su propia voz.",
    coverImage: "/images/books/un-oceano-de-ida-y-vuelta.svg",
    amazonUrl: "https://www.amazon.es/dp/EDITABLE-OCEANO",
    publicationYear: "EDITABLE",
    metadata: {
      language: "Espanol",
      editorial: "EDITABLE",
      isbn: "EDITABLE",
      pages: 0,
    },
  },
  {
    slug: "recopilacion-de-relatos",
    title: "Recopilacion de relatos",
    type: "Recopilacion",
    status: "in-progress",
    synopsis:
      "EDITABLE: Proyecto en proceso que reunira relatos sobre memoria, deseo y pertenencia.",
    coverImage: "/images/books/recopilacion-de-relatos.svg",
    metadata: {
      language: "Espanol",
      editorial: "EDITABLE",
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
    id: "rb-01",
    slug: "el-rumor-de-las-higueras",
    title: "El rumor de las higueras",
    category: "relato-breve",
    year: "EDITABLE",
    excerpt: "Una casa familiar y una carta que no llego a enviarse.",
    mode: "text",
    content:
      "EDITABLE: Texto completo del relato. Sustituir este contenido por la version final validada por la autora.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-01" },
  },
  {
    id: "rb-02",
    slug: "antes-del-monzon",
    title: "Antes del monzon",
    category: "relato-breve",
    year: "EDITABLE",
    excerpt: "Una despedida silenciosa en una estacion de tren.",
    mode: "external",
    externalUrl: "https://example.com/relato/antes-del-monzon",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-02" },
  },
  {
    id: "rb-03",
    slug: "la-luz-de-los-sabados",
    title: "La luz de los sabados",
    category: "relato-breve",
    excerpt: "Un barrio, dos generaciones y una promesa pendiente.",
    mode: "text",
    content:
      "EDITABLE: Texto completo del relato. Este espacio esta preparado para migrar contenido desde Wix.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-03" },
  },
  {
    id: "rb-04",
    slug: "cartografia-de-un-regreso",
    title: "Cartografia de un regreso",
    category: "relato-breve",
    mode: "external",
    externalUrl: "https://example.com/relato/cartografia-de-un-regreso",
    excerpt: "Volver no siempre significa regresar al mismo lugar.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-04" },
  },
  {
    id: "rb-05",
    slug: "la-taza-azul",
    title: "La taza azul",
    category: "relato-breve",
    mode: "text",
    excerpt: "La rutina se rompe con una llamada inesperada.",
    content:
      "EDITABLE: Texto completo del relato. Reemplazar por la version aprobada.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-05" },
  },
  {
    id: "rb-06",
    slug: "viento-en-gijon",
    title: "Viento en Gijon",
    category: "relato-breve",
    mode: "external",
    excerpt: "Tres dias frente al mar para decidir un futuro.",
    externalUrl: "https://example.com/relato/viento-en-gijon",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-06" },
  },
  {
    id: "rb-07",
    slug: "el-nombre-de-las-cosas",
    title: "El nombre de las cosas",
    category: "relato-breve",
    mode: "text",
    excerpt: "Una madre y una hija aprenden a escucharse.",
    content:
      "EDITABLE: Texto completo del relato. Se recomienda mantener estructura por parrafos para buena lectura.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-07" },
  },
  {
    id: "rb-08",
    slug: "nieve-en-junio",
    title: "Nieve en junio",
    category: "relato-breve",
    mode: "external",
    excerpt: "Una amistad antigua se reencuentra en circunstancias nuevas.",
    externalUrl: "https://example.com/relato/nieve-en-junio",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-08" },
  },
  {
    id: "rb-09",
    slug: "una-ciudad-en-el-bolsillo",
    title: "Una ciudad en el bolsillo",
    category: "relato-breve",
    mode: "text",
    excerpt: "Objetos minimos para sostener un duelo grande.",
    content:
      "EDITABLE: Texto completo del relato. Reemplazar por contenido final tras revision editorial.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-09" },
  },
  {
    id: "rb-10",
    slug: "el-idioma-de-las-olas",
    title: "El idioma de las olas",
    category: "relato-breve",
    mode: "external",
    excerpt: "Un viaje breve que cambia una decision de vida.",
    externalUrl: "https://example.com/relato/el-idioma-de-las-olas",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-10" },
  },
  {
    id: "rb-11",
    slug: "la-habitacion-del-fondo",
    title: "La habitacion del fondo",
    category: "relato-breve",
    mode: "text",
    excerpt: "La memoria de una casa tambien narra.",
    content:
      "EDITABLE: Texto completo del relato. Recomendado anadir anio y origen de publicacion.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-11" },
  },
  {
    id: "rb-12",
    slug: "tarde-de-invierno",
    title: "Tarde de invierno",
    category: "relato-breve",
    mode: "external",
    excerpt: "Un cafe, una fotografia y un cierre pendiente.",
    externalUrl: "https://example.com/relato/tarde-de-invierno",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-RB-12" },
  },
  {
    id: "mr-01",
    slug: "microrrelato-hilo-rojo",
    title: "Hilo rojo",
    category: "microrrelato",
    mode: "text",
    excerpt: "Dos frases para una historia de destino.",
    content:
      "EDITABLE: Texto completo del microrrelato.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-MR-01" },
  },
  {
    id: "mr-02",
    slug: "microrrelato-puerta-entornada",
    title: "Puerta entornada",
    category: "microrrelato",
    mode: "external",
    excerpt: "Un gesto minimo puede ser una revelacion.",
    externalUrl: "https://example.com/microrrelato/puerta-entornada",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-MR-02" },
  },
  {
    id: "mr-03",
    slug: "microrrelato-sal-en-las-manos",
    title: "Sal en las manos",
    category: "microrrelato",
    mode: "text",
    excerpt: "Un final abierto en menos de una pagina.",
    content:
      "EDITABLE: Texto completo del microrrelato.",
    migration: { source: "wix", wixItemId: "EDITABLE-WIX-MR-03" },
  },
];

export const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Emy", href: "/sobre-emy" },
  { label: "Novelas", href: "/novelas" },
  { label: "Relatos", href: "/relatos" },
  { label: "Contacto", href: "/contacto" },
];

export const socialLinks: SocialLinkItem[] = [
  { platform: "youtube", label: "YouTube", href: siteConfig.social.youtube },
  { platform: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { platform: "instagram", label: "Instagram", href: siteConfig.instagramUrl },
  { platform: "tiktok", label: "TikTok", href: siteConfig.tiktokUrl },
];

export const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBooks() {
  return featuredBookSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is Book => Boolean(book));
}

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getStoriesByCategory(category: StoryCategory) {
  return stories.filter((story) => story.category === category);
}
