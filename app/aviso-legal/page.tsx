import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Aviso Legal",
  description: "Aviso legal del sitio web oficial de Emy Barraca.",
  pathname: "/aviso-legal",
});

export default function LegalNoticePage() {
  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Aviso Legal</h1>
        <p className="pageLead">Contenido pendiente de revision.</p>
      </header>
    </div>
  );
}
