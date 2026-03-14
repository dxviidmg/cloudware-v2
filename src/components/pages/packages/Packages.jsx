import { PackagesList } from "./PackagesList";
import internet_packages from "../../../data/paquetes_alambricos.json";
import internet_packages2 from "../../../data/paquetes_fibra.json";
import { Title } from "../../common/title/Title";
import { Container } from "react-bootstrap";

export const Packages = () => {
  return (
    <section id="packages" className="paddings">
      <Title title={"Nuestros paquetes"} color={"white"} />
      <Container>
        <p className="text-center section-subtitle">
          Elige el plan que mejor se adapte a ti. Sin contratos forzosos, sin letras chiquitas.
        </p>
      </Container>

      <PackagesList
        name={"📡 Inalámbrico"}
        description={"Cobertura amplia con tecnología inalámbrica de última generación"}
        internet_packages={internet_packages}
        color="#A58CBF"
      />
      <PackagesList
        name={"⚡ Fibra óptica"}
        description={"Máxima velocidad y estabilidad con fibra directa a tu hogar"}
        internet_packages={internet_packages2}
        color="#F5A623"
      />
    </section>
  );
};
