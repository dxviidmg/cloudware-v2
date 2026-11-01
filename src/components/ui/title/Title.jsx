import { Reveal } from "@/components/ui/reveal/Reveal";

export const Title = ({ title, eyebrow, subtitle, as: Tag = "h2", id, variant = "up" }) => (
  <Reveal className="heading" variant={variant}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <Tag id={id}>{title}</Tag>
    {subtitle && <p>{subtitle}</p>}
  </Reveal>
);
