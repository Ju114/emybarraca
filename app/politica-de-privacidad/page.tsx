import type { Metadata } from "next";
import { NoticePage } from "@/components/NoticePage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad",
  description: "Política de privacidad del sitio web oficial de Emy Barraca.",
  pathname: "/politica-de-privacidad",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pageShell">
      <NoticePage
        eyebrow="Información legal"
        title="Política de Privacidad"
        lead="La política de privacidad definitiva se incorporará aquí con el detalle completo sobre tratamiento de datos personales."
        body={`Si necesitas información antes de esa publicación, puedes contactar mediante ${siteConfig.contactEmail}.`}
        actions={[
          { href: "/contacto", label: "Ir a contacto" },
          { href: "/", label: "Volver al inicio", variant: "ghost" },
        ]}
      />
    </div>
  );
}
