import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politica de Privacidad",
  description: "Politica de privacidad del sitio web oficial de Emy Barraca.",
  pathname: "/politica-de-privacidad",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Politica de Privacidad</h1>
        <p className="pageLead">Contenido pendiente de revision.</p>
      </header>
    </div>
  );
}
