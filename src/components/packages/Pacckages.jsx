import { PackagesList } from "./PackagesList";
import internet_packages from "./../../data/paquetes_alambricos.json"
import internet_packages2 from "./../../data/paquetes_fibra.json"

export const Packages = () => {
    return (
      <section id="packages" className="paddings">
              <PackagesList name={"Inalambrico"} internet_packages={internet_packages} color="blue"/>
      <PackagesList name={"Fibra óptica"} internet_packages={internet_packages2} color="#DC9FE2"/>
      </section>
    );
  };