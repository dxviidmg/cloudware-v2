"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import "./SendEmail.css";

const services = [
  { value: "Fibra óptica", label: "Fibra óptica" },
  { value: "Inalámbrico", label: "Inalámbrico" },
  { value: "No estoy seguro", label: "No estoy seguro" },
];

export const SendEmail = () => {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_KEY
      )
      .then(
        () => {
          setStatus({ ok: true, text: "¡Mensaje enviado! Te contactaremos pronto." });
          form.reset();
        },
        () =>
          setStatus({
            ok: false,
            text: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
          })
      )
      .finally(() => setSending(false));
  }

  return (
    <form onSubmit={handleSubmit} className="card-cw contact-form">
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Nombre completo</label>
          <input id="name" name="name" type="text" className="form-control" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" className="form-control" autoComplete="tel" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" className="form-control" autoComplete="email" required />
      </div>

      <fieldset className="field">
        <legend>Servicio de interés</legend>
        <div className="radio-row">
          {services.map(({ value, label }, i) => (
            <label className="radio-pill" key={value}>
              <input type="radio" name="service" value={value} defaultChecked={i === services.length - 1} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">
          Mensaje <span className="optional-label">(opcional)</span>
        </label>
        <textarea id="message" name="message" rows={3} className="form-control" />
      </div>

      <button type="submit" disabled={sending} className="btn-cw btn-cw-primary">
        {sending ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p role="status" className={`form-status ${status ? (status.ok ? "ok" : "error") : ""}`}>
        {status?.text}
      </p>
    </form>
  );
};
