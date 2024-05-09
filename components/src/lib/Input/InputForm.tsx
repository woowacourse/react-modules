import styles from "./InputForm.module.css";

const SIZE_VALUES = {
  small: "40%",
  medium: "60%",
  large: "90%",
};

function InputForm({
  title,
  placeHolder,
  size = "large",
}: {
  title?: string;
  placeHolder?: string;
  size?: "small" | "medium" | "large";
}) {
  return (
    <div
      style={{ width: SIZE_VALUES[size] }}
      className={styles["title-container"]}
    >
      {title && <div className={styles["title"]}>{title}</div>}
      <input className={styles.input} placeholder={placeHolder}></input>
    </div>
  );
}

export default InputForm;
