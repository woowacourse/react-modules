import "./Button.css";

type ButtonWidth = "small" | "medium" | "large";
type ButtonColor = "primary" | "white";

interface ButtonProps {
  size?: ButtonWidth;
  buttonText?: string;
  color?: ButtonColor;
  onClick: () => void;
}

const Button = ({
  size = "small",
  buttonText = "확인",
  color = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button className={`darr-button ${size} ${color}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
