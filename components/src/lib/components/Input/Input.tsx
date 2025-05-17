import { StyledInput } from "./Input.styled";
import InputProps from "./Input.types";

const Input = ({ disabled = false, ...props }: InputProps) => {
  return <StyledInput disabled={disabled} {...props} />;
};

export default Input;
