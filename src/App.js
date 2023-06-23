import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/home/Home";

import { AboutUs } from "./components/aboutUs/AboutUs";
import { MyNavbar } from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from "./components/packages/Packages";
import { Footer } from "./components/footer/Footer";
import { ContactUs } from "./components/contactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={`/about-us`} element={<AboutUs />} />
        <Route exact path={`/packages`} element={<Packages />} />
        <Route exact path={`/contact-us`} element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;