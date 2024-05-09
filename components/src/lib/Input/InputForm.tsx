import { ComponentProps } from "react";
import styles from "./InputForm.module.css";

const SIZE_VALUES = {
  small: "40%",
  medium: "60%",
  large: "90%",
};

interface InputFormProps extends ComponentProps<"input"> {
  title?: string;
  guidanceSize?: "small" | "medium" | "large";
}

function InputForm({
  title,
  guidanceSize = "large",
  ...restProps
}: InputFormProps) {
  return (
    <div
      style={{ width: SIZE_VALUES[guidanceSize] }}
      className={styles["title-container"]}
    >
      {title && <div className={styles["title"]}>{title}</div>}
      <input {...restProps} className={styles.input} />
    </div>
  );
}

export default InputForm;
