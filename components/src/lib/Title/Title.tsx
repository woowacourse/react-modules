import styles from "./Title.module.css";

function Title({
  title,
  subtitle,
  position = "left",
}: {
  title: string;
  subtitle?: string;
  position?: "left" | "center";
}) {
  return (
    <div className={styles["title-field"]}>
      <h1 className={`${styles["title"]} ${styles[position]}`}>{title}</h1>
      {subtitle && (
        <h2 className={`${styles["subtitle"]} ${styles[position]}`}>
          {subtitle}
        </h2>
      )}
    </div>
  );
}

export default Title;
