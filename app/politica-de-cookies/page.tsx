import type { Metadata } from "next";
import { NoticePage } from "@/components/NoticePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Cookies",
  description: "Política de cookies del sitio web oficial de Emy Barraca.",
  pathname: "/politica-de-cookies",
});

export default function CookiesPolicyPage() {
  return (
    <div className="pageShell">
      <NoticePage
        eyebrow="Información legal"
        title="Política de Cookies"
        lead="Aquí se publicará la política de cookies definitiva del sitio, con el detalle completo sobre su uso y gestión."
        body="Hasta entonces, la navegación principal de la web sigue disponible en las secciones de inicio, novelas, relatos, biografía y contacto."
        actions={[
          { href: "/contacto", label: "Ir a contacto" },
          { href: "/", label: "Volver al inicio", variant: "ghost" },
        ]}
      />
    </div>
  );
}
