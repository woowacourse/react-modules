export default function DialogButton({
  type,
  text,
  onClick,
}: {
  type: "primary" | "basic";
  text: string;
  onClick?: () => void;
}) {
  const backgroundColor = type === "primary" ? "#333333" : "white";
  const color = type === "primary" ? "white" : "#333333";
  const border = type === "primary" ? "none" : "1px solid rgba(51,51,51,0.25)";

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        border: border,
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 700,
        padding: "6px 20px",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
}
