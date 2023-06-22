import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/logo.png"

import avisoPrivacidad from "../../assets/pdfs/Aviso de privacidad.pdf"
import cartaDM from "../../assets/pdfs/Carta de derechos minimos.pdf"
import CPGT from "../../assets/pdfs/Código de políticas de gestión de tráfico.pdf"
import CPC from "../../assets/pdfs/Código de prácticas comerciales.pdf"
import Profeco from "../../assets/pdfs/Profeco.pdf"


export function MyNavbar() {
  const pdfs = [Profeco, avisoPrivacidad, cartaDM, CPGT, CPC]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={logo}
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/about-us">Nosotros</Nav.Link>
            <Nav.Link href="/packages">Paquetes</Nav.Link>
            <NavDropdown title="Documentacion" id="basic-nav-dropdown">

              {pdfs.map((pdf, index) => {
                return(
                  <NavDropdown.Item href={pdf} target="_blank" key={index}>
                    {pdf.substring((pdf.lastIndexOf('/') + 1), (pdf.indexOf('.')))}
                    </NavDropdown.Item>)
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}