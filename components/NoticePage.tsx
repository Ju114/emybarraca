import Link from "next/link";
import styles from "./NoticePage.module.css";

type NoticeAction = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

type NoticePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  actions: NoticeAction[];
};

export function NoticePage({
  eyebrow,
  title,
  lead,
  body,
  actions,
}: NoticePageProps) {
  return (
    <section className={styles.panel}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
      <p className={styles.body}>{body}</p>

      <div className={styles.actions}>
        {actions.map((action) => (
          <Link
            key={action.href}
            className={`btn ${action.variant === "ghost" ? "btnGhost" : "btnPrimary"}`}
            href={action.href}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
