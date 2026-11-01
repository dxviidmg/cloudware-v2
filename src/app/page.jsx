import { Home } from "@/components/sections/home/Home";
import { About } from "@/components/sections/about/About";
import { Coverage } from "@/components/sections/coverage/Coverage";
import { Packages } from "@/components/sections/packages/Packages";
import { Contact } from "@/components/sections/contact/Contact";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Coverage />
      <Packages />
      <Contact />
    </>
  );
}
