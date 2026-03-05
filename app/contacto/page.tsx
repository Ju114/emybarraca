import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";
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
  const channels = [
    {
      title: "Email",
      description: "Consultas editoriales, entrevistas y colaboraciones.",
      href: `mailto:${siteConfig.contactEmail}`,
      action: "Enviar correo",
      icon: <MailIcon className={styles.channelIcon} />,
      visibleValue: siteConfig.contactEmail,
    },
    {
      title: "WhatsApp",
      description: "Canal directo para una primera toma de contacto.",
      href: siteConfig.whatsappUrl,
      action: "Escribir por WhatsApp",
      icon: <SocialIcon name="whatsapp" className={styles.channelIcon} />,
    },
  ];

  return (
    <div className="pageShell">
      <header className={styles.intro}>
        <h1 className="pageTitle">Contacto</h1>
        <p className="pageLead">Escríbeme para consultas, prensa o colaboraciones.</p>
      </header>

      <section className={styles.grid} aria-labelledby="canales-contacto">
        <article>
          <h2 id="canales-contacto" className="sectionTitle">
            Canales directos
          </h2>
          <p className={styles.copy}>
            También puedes usar estas vías directas para mensajes rápidos y propuestas.
          </p>
          <div className={styles.channelList}>
            {channels.map((channel) => (
              <article key={channel.title} className={styles.channelCard}>
                <div className={styles.channelHeader}>
                  <span className={styles.channelIconWrap} aria-hidden="true">
                    {channel.icon}
                  </span>
                  <h3>{channel.title}</h3>
                </div>
                <p>{channel.description}</p>
                {"visibleValue" in channel ? (
                  <p className={styles.visibleValue}>
                    <Link href={`mailto:${channel.visibleValue}`}>{channel.visibleValue}</Link>
                  </p>
                ) : null}
                <Link
                  className="btn btnGhost"
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  {channel.action}
                </Link>
              </article>
            ))}
          </div>
        </article>

        <article>
          <h2 className="sectionTitle">Formulario</h2>
          <p className={styles.copy}>
            Respuesta estimada: 48-72 horas laborables. El envío se procesa en un endpoint
            simulado y se puede conectar a un proveedor real.
          </p>
          <ContactForm />
        </article>
      </section>
    </div>
  );
}

type MailIconProps = {
  className?: string;
};

function MailIcon({ className }: MailIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2 .4v.15l7 4.72 7-4.72V6.9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm16 2.56-6.44 4.34a2.5 2.5 0 0 1-2.8 0L3 9.46v8.04c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V9.46Z" />
    </svg>
  );
}
