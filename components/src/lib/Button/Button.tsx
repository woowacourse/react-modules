import styles from "./Button.module.css";

export interface ButtonProps {
  content: string;
  onClick: () => void;
  className: string;
  style: React.CSSProperties;
}

const Button = ({ className, content, onClick, style }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} style={style} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
