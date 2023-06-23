import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./components/pages/home/Home";

import { AboutUs } from "./components/pages/aboutUs/AboutUs";
import { MyNavbar } from "./components/common/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from "./components/pages/packages/Packages";
import { Footer } from "./components/common/footer/Footer";
import { ContactUs } from "./components/pages/contactUs/ContactUs";

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