import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pageShell">
      <section className="card">
        <h1 className="pageTitle">Pagina no encontrada</h1>
        <p className="pageLead">
          La URL solicitada no esta disponible o fue movida.
        </p>
        <Link className="btn btnPrimary" href="/">
          Volver al inicio
        </Link>
      </section>
    </div>
  );
}
