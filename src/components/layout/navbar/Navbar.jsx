"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

import "./Navbar.css";

const pdfs = [
  { href: "/docs/profeco.pdf", label: "Profeco" },
  { href: "/docs/aviso-de-privacidad.pdf", label: "Aviso de privacidad" },
  { href: "/docs/carta-de-derechos-minimos.pdf", label: "Carta de derechos mínimos" },
  { href: "/docs/codigo-de-politicas-de-gestion-de-trafico.pdf", label: "Código de políticas de gestión de tráfico" },
  { href: "/docs/codigo-de-practicas-comerciales.pdf", label: "Código de prácticas comerciales" },
];

const links = [
  { id: "nosotros", label: "Nosotros" },
  { id: "cobertura", label: "Cobertura" },
  { id: "paquetes", label: "Paquetes" },
  { id: "contacto", label: "Contáctanos" },
];

export function MyNavbar() {
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar expand="xl" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src={logo} height={48} alt="CloudWare MX, cada segundo cuenta" priority style={{ width: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Abrir menú" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(({ id, label }) => (
              <Nav.Link
                as={Link}
                href={`/#${id}`}
                active={active === id}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setExpanded(false)}
                key={id}
              >
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
          <Link href="/#paquetes" className="btn-cw btn-cw-primary navbar-cta" onClick={() => setExpanded(false)}>
            Ver paquetes
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
