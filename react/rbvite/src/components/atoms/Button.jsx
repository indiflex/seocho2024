export default function Button({
  text,
  onClick = () => {},
  type = "btn",
  size = "base",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`${type === "btn" ? "" : "btn-"}${type} text-${size} ${className}`}
    >
      {text}
    </button>
  );
}
