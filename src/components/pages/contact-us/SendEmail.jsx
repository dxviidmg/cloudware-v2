"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { packageGroups } from "../../../data/packages";
import "./SendEmail.css";

const NOT_SURE = "No estoy seguro, necesito asesoría";

const planLabel = (group, plan) => `${group.label} ${plan.name} · ${plan.speed} Mbps`;

export const SendEmail = () => {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [service, setService] = useState("");

  const selected = packageGroups
    .flatMap((g) => g.plans.map((plan) => ({ plan, value: planLabel(g, plan) })))
    .find((o) => o.value === service);

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
          setService("");
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

      <div className="field">
        <label htmlFor="address">Domicilio</label>
        <input id="address" name="address" type="text" className="form-control" autoComplete="street-address" required />
      </div>

      <div className="field">
        <label htmlFor="service">Servicio</label>
        <select
          id="service"
          name="service"
          className="form-select"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="" disabled>Selecciona un paquete</option>
          {packageGroups.map((g) => (
            <optgroup label={g.label} key={g.id}>
              {g.plans.map((plan) => (
                <option key={plan.name} value={planLabel(g, plan)}>
                  {plan.name} · {plan.speed} Mbps · ${plan.price}/mes
                </option>
              ))}
            </optgroup>
          ))}
          <option value={NOT_SURE}>{NOT_SURE}</option>
        </select>
        <p className="selected-plan" aria-live="polite">
          {selected && (
            <>
              Seleccionado: <strong>{selected.value}</strong> — ${selected.plan.price} MXN / mes
            </>
          )}
        </p>
      </div>

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
