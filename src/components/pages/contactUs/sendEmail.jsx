import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./sendEmail.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { MyModal } from "../../../components/common/modal/Modal";

export const SendEmail = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_KEY
      )
      .then(
        () => {
          setMessage("El formulario se envió correctamente.");
          setShowModal(true);
          e.target.reset();
        },
        () => {
          setMessage(
            "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
          );
          setShowModal(true);
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre completo" name="name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Correo electrónico" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="Teléfono" name="phone" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompany">
          <Form.Label>Empresa</Form.Label>
          <Form.Control type="text" placeholder="Empresa" name="company" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={sending}>
          {sending ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
      <MyModal
        showModal={showModal}
        setShowModal={setShowModal}
        message={message}
      />
    </section>
  );
};
