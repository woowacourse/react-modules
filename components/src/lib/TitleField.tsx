import styles from "./Modal.module.css";

export default function TitleField({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  if (!title) return null;

  return (
    <div className={styles["title-field"]}>
      <h1 className={styles["title"]}>{title}</h1>
      {subtitle && <h2 className={styles["subtitle"]}>{subtitle}</h2>}
    </div>
  );
}
