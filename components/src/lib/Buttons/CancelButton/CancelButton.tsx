import { ComponentProps } from "react";
import styles from "./CancelButton.module.css";

const SIZE_VALUES = {
  small: "40%",
  medium: "60%",
  large: "90%",
};

interface CancelButtonProps extends ComponentProps<"button"> {
  content?: string;
  guidanceSize?: "small" | "medium" | "large";
}

export default function CancelButton({
  content,
  guidanceSize = "medium",
  ...restProps
}: CancelButtonProps) {
  return (
    <button
      {...restProps}
      style={{ width: SIZE_VALUES[guidanceSize] }}
      className={styles["button-cancel"]}
    >
      {content}
    </button>
  );
}
