import { PackagesList } from "./PackagesList";
import internet_packages from "../../../data/paquetes_alambricos.json";
import internet_packages2 from "../../../data/paquetes_fibra.json";

export const Packages = () => {
  return (
    <section id="packages" className="paddings">
      <PackagesList
        name={"Inalámbrico"}
        internet_packages={internet_packages}
        color="#A58CBF"
      />
      <PackagesList
        name={"Fibra óptica"}
        internet_packages={internet_packages2}
        color="#F5A623"
      />
    </section>
  );
};
