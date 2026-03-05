import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacto profesional de Emy Barraca para editoriales, medios y colaboraciones.",
  pathname: "/contacto",
});

export default function ContactPage() {
  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Contacto</h1>
        <p className="pageLead">{siteConfig.contactIntro}</p>
      </header>

      <section className={styles.grid}>
        <article className="card">
          <h2 className="sectionTitle">Canales directos</h2>
          <p className={styles.copy}>
            Email profesional: <Link href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</Link>
          </p>
          <p className={styles.copy}>
            Tambien puedes escribir mediante el formulario o visitar redes oficiales.
          </p>
          <Link
            className={`btn btnGhost ${styles.whatsappButton}`}
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <SocialIcon name="whatsapp" className={styles.whatsappIcon} />
            Escribir por WhatsApp
          </Link>
          <SocialLinks />
        </article>

        <div>
          <h2 className="sectionTitle">Formulario</h2>
          <p className={styles.copy}>
            Respuesta estimada: 48-72 horas laborables. El envio se procesa en un endpoint
            simulado y se puede conectar a un proveedor real.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
