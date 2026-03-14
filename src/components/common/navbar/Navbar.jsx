import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../../assets/images/logo.png";

import avisoPrivacidad from "../../../assets/pdfs/Aviso de privacidad.pdf";
import cartaDM from "../../../assets/pdfs/Carta de derechos minimos.pdf";
import CPGT from "../../../assets/pdfs/Código de políticas de gestión de tráfico.pdf";
import CPC from "../../../assets/pdfs/Código de prácticas comerciales.pdf";
import Profeco from "../../../assets/pdfs/Profeco.pdf";
import "./navbar.css";

const pdfLabels = {
  [Profeco]: "Profeco",
  [avisoPrivacidad]: "Aviso de privacidad",
  [cartaDM]: "Carta de derechos mínimos",
  [CPGT]: "Código de políticas de gestión de tráfico",
  [CPC]: "Código de prácticas comerciales",
};

export function MyNavbar() {
  const pdfs = [Profeco, avisoPrivacidad, cartaDM, CPGT, CPC];
  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              height="100"
              className="d-inline-block align-top"
              alt="CloudWare logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/nosotros">
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/paquetes">
              <Nav.Link>Paquetes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contáctanos</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Documentación" id="basic-nav-dropdown">
              {pdfs.map((pdf, index) => (
                <NavDropdown.Item href={pdf} target="_blank" rel="noopener noreferrer" key={index}>
                  {pdfLabels[pdf]}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
