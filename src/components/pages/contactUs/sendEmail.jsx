import { Button, Row, Col } from "react-bootstrap";
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
          setMessage("¡Mensaje enviado! Te contactaremos pronto.");
          setShowModal(true);
          e.target.reset();
        },
        () => {
          setMessage(
            "Hubo un error al enviar. Por favor, inténtalo de nuevo más tarde."
          );
          setShowModal(true);
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="contact-form">
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" name="name" required />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Tu teléfono" name="phone" required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Tu correo" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompany">
          <Form.Label>Empresa <span className="optional-label">(opcional)</span></Form.Label>
          <Form.Control type="text" placeholder="Tu empresa" name="company" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mensaje <span className="optional-label">(opcional)</span></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="¿En qué podemos ayudarte?" name="message" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={sending} className="w-100">
          {sending ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </Form>
      <MyModal
        showModal={showModal}
        setShowModal={setShowModal}
        message={message}
      />
    </div>
  );
};
