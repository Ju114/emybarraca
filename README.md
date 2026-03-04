# Web oficial de Emy Barraca

Sitio de autora construido con **Next.js 16 + TypeScript + App Router**.
Objetivo: presentar a Emy Barraca para conversion de lectores (compra de novelas) y contacto profesional con editoriales/colaboradores.

## Stack

- Next.js (App Router)
- TypeScript
- CSS Modules + variables CSS globales
- `next/font` (Playfair Display, Lora, Inter)

## Arranque local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de produccion

```bash
npm run lint
npm run build
npm run start
```

## Estructura principal

```text
app/
  page.tsx                         # Inicio
  sobre-emy/page.tsx               # Bio + premios + schema Person
  novelas/page.tsx                 # Listado de novelas
  novelas/[slug]/page.tsx          # Ficha de novela + schema Book
  relatos/page.tsx                 # Relatos breves y microrrelatos
  relatos/[slug]/page.tsx          # Lectura interna (solo mode="text")
  contacto/page.tsx                # Contacto + formulario
  api/contact/route.ts             # Endpoint simulado de envio
  robots.ts                        # robots.txt
  sitemap.ts                       # sitemap.xml

components/
  Header, Footer, Hero, BookCard, Carousel, ContactForm, SocialLinks

data/
  site.ts                          # Modelo de datos y contenido editable

public/images/
  author-placeholder.svg
  og-default.svg
  books/*.svg                      # Portadas placeholder
```

## Donde editar contenido

### Datos globales

Archivo: `data/site.ts`

- `siteConfig`: tagline, bios, email, redes, SEO general.
- `awards`: premios/reconocimientos.
- `books`: novelas (titulo, sinopsis, metadata, portada, Amazon, estado).
- `stories`: relatos y microrrelatos.

Todo lo marcado como `EDITABLE` debe sustituirse por datos reales.

### Portadas, foto y OG image

- Portadas: `public/images/books/`
- Foto autora: `public/images/author-placeholder.svg`
- Imagen social OG: `public/images/og-default.svg`

Si usas JPG/PNG reales, actualiza las rutas en `data/site.ts`.

## Relatos: modo texto vs enlace externo

Cada item en `stories` usa:

- `mode: "text"` -> se publica en ruta interna `/relatos/[slug]` usando `content`.
- `mode: "external"` -> muestra boton a `externalUrl`.

Esto deja la estructura lista para migracion desde Wix con `migration.wixItemId`.

## Como anadir una novela

1. Anade un objeto en `books` dentro de `data/site.ts`.
2. Define `slug` unico, `title`, `synopsis`, `coverImage`, `status`.
3. Si esta publicada, anade `amazonUrl`.
4. (Opcional) agrega el `slug` en `featuredBookSlugs` para mostrarla en el carrusel de inicio.

La ficha en `/novelas/[slug]` y el SEO se generan automaticamente.

## Como anadir un relato o microrrelato

1. Anade un objeto en `stories` con `category`:
   - `relato-breve` o `microrrelato`
2. Define `slug` unico y `mode` (`text` o `external`).
3. Si `mode` es `text`, completa `content`.
4. Si `mode` es `external`, completa `externalUrl`.

## SEO implementado

- Metadatos por pagina (`title`, `description`, `canonical`, Open Graph, Twitter).
- H1 unico por pagina + jerarquia semantica.
- Schema.org:
  - `Person` en `/sobre-emy`
  - `Book` en `/novelas/[slug]`
- `sitemap.xml` y `robots.txt` generados por App Router.
- URLs limpias:
  - `/`
  - `/sobre-emy`
  - `/novelas`
  - `/novelas/[slug]`
  - `/relatos`
  - `/relatos/[slug]`
  - `/contacto`

## Accesibilidad y rendimiento

- Navegacion por teclado y `focus-visible`.
- Carrusel accesible con botones `prev/next`, indicadores y flechas de teclado.
- Formulario con labels, validacion y feedback.
- `next/image` con `sizes` y `lazy-loading` donde aplica.

## Deploy recomendado

Vercel (flujo nativo Next.js):

1. Subir repo a GitHub.
2. Importar proyecto en Vercel.
3. Deploy automatico por push.

Recuerda actualizar `SITE_URL` en `data/site.ts` con el dominio final.
