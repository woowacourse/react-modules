import { StyledInput } from "./Input.styled";
import InputProps from "./Input.types";

const Input = ({ placeholder }: InputProps) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
