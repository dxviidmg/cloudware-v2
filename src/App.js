import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { PackagesList } from './components/packages/PackagesList';
import internet_packages from './data/paquetes_alambricos.json'
import internet_packages2 from './data/paquetes_fibra.json'

function App() {
  return (
    <div>
      <PackagesList name={"Inalambrico"} internet_packages={internet_packages} color="blue"/>
      <PackagesList name={"Fibra óptica"} internet_packages={internet_packages2} color="#DC9FE2"/>
    </div>
  );
}

export default App;
