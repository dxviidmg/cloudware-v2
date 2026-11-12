import { Home } from "@/components/sections/home/Home";
import { About } from "@/components/sections/about/About";
import { Coverage } from "@/components/sections/coverage/Coverage";
import { Packages } from "@/components/sections/packages/Packages";
import { Faq } from "@/components/sections/faq/Faq";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Coverage />
      <Packages />
      <Faq />
    </>
  );
}
