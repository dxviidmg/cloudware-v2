"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const docsRef = useRef(null);

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

  useEffect(() => {
    const onPointer = (e) => {
      if (docsRef.current && !docsRef.current.contains(e.target)) setDocsOpen(false);
    };
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setDocsOpen(false);
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setOpen(false);
    setDocsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-cw site-header-bar">
        <Link href="/" className="site-brand" onClick={close}>
          <Image src={logo} width={210} height={48} quality={100} sizes="210px" alt="CloudWare MX" priority />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Principal">
          <ul className="nav-list">
            {links.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  className={`nav-link ${active === id ? "active" : ""}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-docs" ref={docsRef}>
              <button
                type="button"
                className="nav-link nav-docs-toggle"
                aria-expanded={docsOpen}
                aria-controls="nav-docs-menu"
                onClick={() => setDocsOpen((v) => !v)}
              >
                Documentación
              </button>
              <ul id="nav-docs-menu" className="nav-menu" hidden={!docsOpen}>
                {pdfs.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" onClick={close}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link href="/#paquetes" className="btn-cw btn-cw-primary navbar-cta" onClick={close}>
            Ver paquetes
          </Link>
        </nav>
      </div>
    </header>
  );
}
