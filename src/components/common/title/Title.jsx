export const Title = ({ title, eyebrow, subtitle, as: Tag = "h2" }) => (
  <div className="heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <Tag>{title}</Tag>
    {subtitle && <p>{subtitle}</p>}
  </div>
);
