// Landing section: anchor target `#id`, labelled by the heading with id `${id}-titulo`.
export const Section = ({ id, className = "", children }) => (
  <section className={`section${className ? ` ${className}` : ""}`} id={id} aria-labelledby={`${id}-titulo`}>
    {children}
  </section>
);
