import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = ({ children, color }: ButtonProps) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

export default Button;
