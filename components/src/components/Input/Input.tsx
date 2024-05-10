/** @jsxImportSource @emotion/react */
import useThemeContext from "../../hooks/useThemeContext";
import { inputStyle } from "./InputStyle";

const Input = ({ ...inputAttrs }) => {
  const theme = useThemeContext();
  return <input name="input" css={inputStyle(theme)} {...inputAttrs} />;
};

export default Input;
