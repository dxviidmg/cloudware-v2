import { PackagesList } from "./PackagesList";
import internet_packages from "../../../data/paquetes_alambricos.json";
import internet_packages2 from "../../../data/paquetes_fibra.json";

export const Packages = () => {
  return (
    <section id="packages" className="paddings">
      <PackagesList
        name={"Inalámbrico"}
        internet_packages={internet_packages}
        color="var(--primary)"
      />
      <PackagesList
        name={"Fibra óptica"}
        internet_packages={internet_packages2}
        color="var(--accent)"
      />
    </section>
  );
};
