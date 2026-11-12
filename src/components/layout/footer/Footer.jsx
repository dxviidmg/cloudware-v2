import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { BsWhatsapp, BsClock, BsGeoAlt, BsSignTurnRight, BsStickies, BsFacebook } from "react-icons/bs";
import { WHATSAPP_DISPLAY, WHATSAPP_URL, ADDRESS, MAPS_URL, HOURS, FACEBOOK_URL } from "@/data/constants";
import "./Footer.css";

export const Footer = () => (
  <footer className="footer" id="contacto">
    <div className="container-cw footer-grid">
      <div>
        <Image src={logo} width={192} height={44} quality={100} sizes="192px" alt="CloudWare MX" className="footer-logo" />
        <h2>Nuestro compromiso</h2>
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
          <BsWhatsapp aria-hidden="true" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {WHATSAPP_DISPLAY}
          </a>
        </p>
        <p className="footer-line">
          <BsGeoAlt aria-hidden="true" /> {ADDRESS}
        </p>
        <p className="footer-line">
          <BsClock aria-hidden="true" /> {HOURS}
        </p>
        <p className="footer-line">
          <BsSignTurnRight aria-hidden="true" />
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
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
