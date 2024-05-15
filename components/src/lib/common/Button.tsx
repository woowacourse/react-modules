import { StyledDarkButton, StyledLightButton } from "./Button.style";

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const DarkButton = ({ children, onClick, style }: ButtonProps) => {
  return (
    <StyledDarkButton onClick={onClick} style={style}>
      {children}
    </StyledDarkButton>
  );
};

export const LightButton = ({ children, onClick, style }: ButtonProps) => {
  return (
    <StyledLightButton onClick={onClick} style={style}>
      {children}
    </StyledLightButton>
  );
};
