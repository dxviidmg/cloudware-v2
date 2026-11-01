import { Home } from "../components/pages/home/Home";
import { AboutUs } from "../components/pages/about-us/AboutUs";
import { Coverage } from "../components/pages/coverage/Coverage";
import { Packages } from "../components/pages/packages/Packages";
import { ContactUs } from "../components/pages/contact-us/ContactUs";

export default function Page() {
  return (
    <>
      <Home />
      <AboutUs />
      <Coverage />
      <Packages />
      <ContactUs />
    </>
  );
}
