import styles from "./Button.module.css";

export interface ButtonProps {
  content: string;
  onClick: () => void;
  className: string;
}

const Button = ({ content, onClick, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[className]}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
