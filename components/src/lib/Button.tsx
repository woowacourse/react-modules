import styled from 'styled-components';
import { ButtonSize } from './constant/buttonSize';
import { ReactNode } from 'react';

type Style = {
  backgroundColor: string;
  fontColor: string;
};

type Width = 'default' | 'stretch';
interface Props {
  width?: Width;
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  style?: Style;
}
const Button = ({
  width = 'default',
  children,
  onClick,
  style = { backgroundColor: 'black', fontColor: 'white' },
}: Props) => {
  return (
    <StyledButton
      $style={style}
      $width={ButtonSize[width]}
      onClick={(e) => onClick?.(e)}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $style: Style; $width: string }>`
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
