import Link from "next/link";
import { BsWhatsapp, BsEnvelope, BsClock, BsStickies } from "react-icons/bs";
import { WHATSAPP_DISPLAY, EMAIL, HOURS } from "../../../data/constants";
import "./Footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="container-cw footer-grid">
      <div>
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
      </div>
      <nav aria-label="Pie de página">
        <h2>Navegación</h2>
        <ul>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/paquetes">Paquetes</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
    <div className="container-cw footer-copyright">
      <p>© {new Date().getFullYear()} CloudWare MX. Todos los derechos reservados.</p>
    </div>
  </footer>
);
