export default function Button({
  text,
  onClick = () => {},
  type = "btn",
  size = "base",
  className = "",
  style = {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${type === "btn" ? "" : "btn-"}${type} text-${size} ${className}`}
      style={style}
    >
      {text}
    </button>
  );
}
