import * as Styled from "./style";

export type ButtonColor = "dark" | "white";

export interface ButtonProps {
  children: JSX.Element;
  theme: ButtonColor;
  onClick: () => void;
}

const Button = ({ children, theme, onClick }: ButtonProps) => {
  return (
    <Styled.Button $theme={theme} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
