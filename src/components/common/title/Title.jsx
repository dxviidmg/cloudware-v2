export const Title = ({ title, eyebrow, subtitle, as: Tag = "h2", id }) => (
  <div className="heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <Tag id={id}>{title}</Tag>
    {subtitle && <p>{subtitle}</p>}
  </div>
);
