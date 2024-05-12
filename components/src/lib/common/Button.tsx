import { DarkButtonWrapper, LightButtonWrapper } from "./Button.style";

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const DarkButton = ({ children, onClick, style }: ButtonProps) => {
  return (
    <DarkButtonWrapper onClick={onClick} style={style}>
      {children}
    </DarkButtonWrapper>
  );
};

export const LightButton = ({ children, onClick, style }: ButtonProps) => {
  return (
    <LightButtonWrapper onClick={onClick} style={style}>
      {children}
    </LightButtonWrapper>
  );
};
