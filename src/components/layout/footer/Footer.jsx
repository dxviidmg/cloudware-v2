import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { BsWhatsapp, BsEnvelope, BsClock, BsStickies, BsFacebook } from "react-icons/bs";
import { WHATSAPP_DISPLAY, EMAIL, HOURS, FACEBOOK_URL } from "@/data/constants";
import "./Footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="container-cw footer-grid">
      <div>
        <Image src={logo} alt="CloudWare MX" height={44} style={{ width: "auto" }} className="footer-logo" />
        <h2>Soporte técnico</h2>
        <p>
          En CloudWare la satisfacción de nuestros clientes es lo más importante; por eso hacemos lo
          necesario para mantener la mejor estabilidad y atender los reportes de falla a la brevedad.
        </p>
        <p className="footer-line">
          <BsStickies aria-hidden="true" /> Folio IFT: IFT/223/UCS/AUT-COM-077/2018
        </p>
      </div>
      <div>
        <h2>Contacto</h2>
        <p className="footer-line">
          <BsWhatsapp aria-hidden="true" /> {WHATSAPP_DISPLAY}
        </p>
        <p className="footer-line">
          <BsEnvelope aria-hidden="true" /> {EMAIL}
        </p>
        <p className="footer-line">
          <BsClock aria-hidden="true" /> {HOURS}
        </p>
        <p className="footer-line">
          <BsFacebook aria-hidden="true" />
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            Síguenos en Facebook
          </a>
        </p>
      </div>
      <nav aria-label="Pie de página">
        <h2>Navegación</h2>
        <ul>
          <li><Link href="/#nosotros">Nosotros</Link></li>
          <li><Link href="/#cobertura">Cobertura</Link></li>
          <li><Link href="/#paquetes">Paquetes</Link></li>
          <li><Link href="/#contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
    <div className="container-cw footer-copyright">
      <p>© {new Date().getFullYear()} CloudWare MX · Actopan, Hidalgo. Todos los derechos reservados.</p>
    </div>
  </footer>
);
