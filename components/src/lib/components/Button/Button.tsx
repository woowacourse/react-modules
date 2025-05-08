import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
