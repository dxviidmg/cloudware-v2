"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";

import "./Navbar.css";

const pdfs = [
  { href: "/docs/profeco.pdf", label: "Profeco" },
  { href: "/docs/aviso-de-privacidad.pdf", label: "Aviso de privacidad" },
  { href: "/docs/carta-de-derechos-minimos.pdf", label: "Carta de derechos mínimos" },
  { href: "/docs/codigo-de-politicas-de-gestion-de-trafico.pdf", label: "Código de políticas de gestión de tráfico" },
  { href: "/docs/codigo-de-practicas-comerciales.pdf", label: "Código de prácticas comerciales" },
];

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/contacto", label: "Contáctanos" },
];

export function MyNavbar() {
  const pathname = usePathname();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src={logo} height={52} alt="CloudWare" priority style={{ width: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Abrir menú" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(({ href, label }) => (
              <Nav.Link as={Link} href={href} active={pathname === href} key={href}>
                {label}
              </Nav.Link>
            ))}
            <NavDropdown title="Documentación" id="basic-nav-dropdown">
              {pdfs.map(({ href, label }) => (
                <NavDropdown.Item href={href} target="_blank" rel="noopener noreferrer" key={href}>
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Link href="/paquetes" className="btn-cw btn-cw-primary navbar-cta">
            Ver paquetes
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
