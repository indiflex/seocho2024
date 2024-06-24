export default function Button({
  text,
  type = "btn",
  size = "base",
  className = "",
}) {
  return (
    <button
      className={`${type === "btn" ? "" : "btn-"}${type} text-${size} ${className}`}
    >
      {text}
    </button>
  );
}
