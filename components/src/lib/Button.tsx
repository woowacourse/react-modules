import styled from 'styled-components';
import { ButtonSize } from './constant/buttonSize';
import { ReactNode } from 'react';

export type ButtonColor = {
  backgroundColor: string;
  fontColor: string;
};

export type Width = 'default' | 'stretch';
export interface ButtonProps {
  width?: Width;
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  buttonColor?: ButtonColor;
}
const Button: React.FC<ButtonProps> = ({
  width = 'default',
  children,
  onClick,
  buttonColor = { backgroundColor: 'black', fontColor: 'white' },
}: ButtonProps) => {
  return (
    <StyledButton
      $style={buttonColor}
      $width={ButtonSize[width]}
      onClick={(e) => onClick?.(e)}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $style: ButtonColor; $width: string }>`
  display: flex;
  justify-content: center;

  align-items: center;
  background-color: ${(props) => props.$style.backgroundColor};
  color: ${(props) => props.$style.fontColor};
  width: ${(props) => props.$width};
  padding: 7px 4px;
  border-radius: 5px;

  font-size: 16px;
  border: 1px solid #8b95a1;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
