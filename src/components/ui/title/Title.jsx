import { Reveal } from "@/components/ui/reveal/Reveal";
import { ScrollText } from "@/components/ui/scroll-text/ScrollText";

export const Title = ({ title, eyebrow, subtitle, as: Tag = "h2", id, variant = "up" }) => (
  <Reveal className="heading" variant={variant}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <ScrollText as={Tag} id={id}>{title}</ScrollText>
    {subtitle && <ScrollText>{subtitle}</ScrollText>}
  </Reveal>
);
