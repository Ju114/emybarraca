"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./ContactForm.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(data: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};

  if (data.name.trim().length < 2) {
    errors.name = "Introduce un nombre válido.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Introduce un email válido.";
  }

  if (data.subject.trim().length < 4) {
    errors.subject = "El asunto debe tener al menos 4 caracteres.";
  }

  if (data.message.trim().length < 20) {
    errors.message = "El mensaje debe tener al menos 20 caracteres.";
  }

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setResultMessage("Revisa los campos marcados antes de enviar.");
      return;
    }

    setIsSubmitting(true);
    setResultMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "No se pudo enviar el formulario.");
      }

      setResultMessage(
        "Mensaje enviado (simulado). Recibido correctamente para su revisión.",
      );
      setFormData(initialData);
      setErrors({});
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Ha ocurrido un error inesperado.";
      setResultMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <div className={styles.grid}>
        <label className={styles.field} htmlFor="name">
          <span>Nombre</span>
          <input
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <small id="name-error" className={styles.error}>
              {errors.name}
            </small>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <small id="email-error" className={styles.error}>
              {errors.email}
            </small>
          ) : null}
        </label>
      </div>

      <label className={styles.field} htmlFor="subject">
        <span>Asunto</span>
        <input
          id="subject"
          value={formData.subject}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, subject: event.target.value }))
          }
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject ? (
          <small id="subject-error" className={styles.error}>
            {errors.subject}
          </small>
        ) : null}
      </label>

      <label className={styles.field} htmlFor="message">
        <span>Mensaje</span>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <small id="message-error" className={styles.error}>
            {errors.message}
          </small>
        ) : null}
      </label>

      <button className="btn btnPrimary" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>

      {resultMessage ? (
        <p className={`${styles.result} ${hasErrors ? styles.resultError : ""}`}>
          {resultMessage}
        </p>
      ) : null}
    </form>
  );
}
