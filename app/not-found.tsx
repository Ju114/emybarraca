import { NoticePage } from "@/components/NoticePage";

export default function NotFound() {
  return (
    <div className="pageShell">
      <NoticePage
        eyebrow="Navegación"
        title="Página no encontrada"
        lead="La URL solicitada no está disponible o ha cambiado de ubicación."
        body="Puedes volver al inicio para continuar navegando por las novelas, relatos y la información de autora disponible en la web."
        actions={[
          { href: "/", label: "Volver al inicio" },
          { href: "/novelas", label: "Ir a novelas", variant: "ghost" },
        ]}
      />
    </div>
  );
}
