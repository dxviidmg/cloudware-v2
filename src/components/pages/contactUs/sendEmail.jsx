import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./sendEmail.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { MyModal } from "../../../components/common/modal/Modal";

export const SendEmail = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    const emailjs_service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjs_template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjs_user_key = process.env.REACT_APP_EMAILJS_USER_kEY;

    console.log("emailjs_service_id", emailjs_service_id);
    e.preventDefault();

    emailjs
      .sendForm(
        emailjs_service_id,
        emailjs_template_id,
        e.target,
        emailjs_user_key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setMessage("El formulario se envió correctamente.");
          setShowModal(true);
        },
        (error) => {
          console.error("Error sending email:", error);
          setMessage(
            "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
          );
          setShowModal(true);
        }
      );
  }

  return (
    <section>
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre completo" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Teléfono" name="phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompany">
          <Form.Label>Empresa</Form.Label>
          <Form.Control type="text" placeholder="Empresa" name="company" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
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
