import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/pages/home/Home";
import { AboutUs } from "./components/pages/about-us/AboutUs";
import { MyNavbar } from "./components/common/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from "./components/pages/packages/Packages";
import { Footer } from "./components/common/footer/Footer";
import { ContactUs } from "./components/pages/contact-us/ContactUs";
import { WhatsAppButton } from "./components/common/whatsapp/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/paquetes" element={<Packages />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
