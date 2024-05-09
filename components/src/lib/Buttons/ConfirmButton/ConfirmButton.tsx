import { ComponentProps } from "react";
import styles from "./ConfirmButton.module.css";

const SIZE_VALUES = {
  small: "40%",
  medium: "60%",
  large: "90%",
};

interface ConfirmButtonProps extends ComponentProps<"button"> {
  content?: string;
  guidanceSize?: "small" | "medium" | "large";
}

export default function ConfirmButton({
  content,
  guidanceSize = "large",
  ...restProps
}: ConfirmButtonProps) {
  return (
    <button
      {...restProps}
      style={{ width: SIZE_VALUES[guidanceSize] }}
      className={styles["button-confirm"]}
    >
      {content}
    </button>
  );
}
