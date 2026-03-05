import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politica de Cookies",
  description: "Politica de cookies del sitio web oficial de Emy Barraca.",
  pathname: "/politica-de-cookies",
});

export default function CookiesPolicyPage() {
  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Politica de Cookies</h1>
        <p className="pageLead">Contenido pendiente de revision.</p>
      </header>
    </div>
  );
}
