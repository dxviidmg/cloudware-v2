import "./WordReveal.css";

// Words appear one after another on load (above-the-fold text). CSS only, no JS needed.
export const WordReveal = ({ as: Tag = "span", className = "", children, step = 70, base = 0, ...props }) => {
  const words = String(children).split(" ");
  return (
    <Tag className={`word-reveal ${className}`.trim()} {...props}>
      {words.map((word, i) => (
        <span key={i}>
          <span style={{ animationDelay: `${base + i * step}ms` }}>{word}</span>{" "}
        </span>
      ))}
    </Tag>
  );
};
