import styles from "./ConfirmButton.module.css";

const SIZE_VALUES = {
  small: "40%",
  medium: "60%",
  large: "90%",
};

export default function ConfirmButton({
  onClick,
  content,
  size = "large",
}: {
  onClick: () => void;
  content: string;
  size?: "small" | "medium" | "large";
}) {
  return (
    <button
      style={{ width: SIZE_VALUES[size] }}
      className={styles["button-confirm"]}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
