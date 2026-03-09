import type { Metadata } from "next";
import { NoticePage } from "@/components/NoticePage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Aviso Legal",
  description: "Aviso legal del sitio web oficial de Emy Barraca.",
  pathname: "/aviso-legal",
});

export default function LegalNoticePage() {
  return (
    <div className="pageShell">
      <NoticePage
        eyebrow="Información legal"
        title="Aviso Legal"
        lead="Esta sección se actualizará con el texto legal definitivo correspondiente al sitio web oficial de Emy Barraca."
        body={`Mientras tanto, si necesitas una aclaración sobre la titularidad del sitio o cualquier cuestión relacionada, puedes escribir a ${siteConfig.contactEmail}.`}
        actions={[
          { href: "/contacto", label: "Ir a contacto" },
          { href: "/", label: "Volver al inicio", variant: "ghost" },
        ]}
      />
    </div>
  );
}
