import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Home } from './components/home/Home';

import { PackagesList } from './components/packages/PackagesList';
import internet_packages from './data/paquetes_alambricos.json'
import internet_packages2 from './data/paquetes_fibra.json'
import { AboutUs } from './components/aboutUs/AboutUs';
import { MyNavbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from './components/packages/Pacckages';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
<MyNavbar/>  
<Routes>
  <Route exact path="/" element={<Home />}/>
  <Route exact path={`/about-us`} element={<AboutUs/>}/>
  <Route exact path={`/packages`} element={<Packages/>}/>
</Routes>
<Footer/>
</BrowserRouter>




  );
}

export default App;

/*

    <div>
      <MyNavbar/>
      <Home/>
      <AboutUs/>
      <PackagesList name={"Inalambrico"} internet_packages={internet_packages} color="blue"/>
      <PackagesList name={"Fibra óptica"} internet_packages={internet_packages2} color="#DC9FE2"/>
    </div>

*/