import { ComponentProps } from "react";
import styles from "./Title.module.css";

interface TitleProps extends ComponentProps<"h1">, ComponentProps<"h2"> {
  title: string;
  titleProps?: ComponentProps<"h1">;
  subtitle?: string;
  subtitleProps?: ComponentProps<"h2">;
  position?: "left" | "center";
}

function Title({
  title = "Title",
  subtitle,
  titleProps,
  subtitleProps,
  position = "left",
  ...restProps
}: TitleProps) {
  return (
    <div className={styles["title-field"]}>
      <h1
        {...restProps}
        {...titleProps}
        className={`${styles["title"]} ${styles[position]}`}
      >
        {title}
      </h1>
      {subtitle && (
        <h2
          {...restProps}
          {...subtitleProps}
          className={`${styles["subtitle"]} ${styles[position]}`}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
}

export default Title;
