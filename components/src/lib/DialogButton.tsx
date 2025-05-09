import { ComponentProps } from "react";

type DialogButtonProps = Omit<ComponentProps<"button">, "type"> & {
  type: "primary" | "basic";
  text: string;
};

const buttonStyle = {
  primary: {
    backgroundColor: "#333333",
    color: "white",
    border: "none",
  },
  basic: {
    backgroundColor: "white",
    color: "#333333",
    border: "1px solid rgba(51,51,51,0.25)",
  },
};

export default function DialogButton({
  type,
  text,
  ...rest
}: DialogButtonProps) {
  return (
    <button
      {...rest}
      style={{
        ...buttonStyle[type],
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
