import styled from 'styled-components';
import { ButtonSize } from './constant/buttonSize';

type Style = {
  backgroundColor: string;
  fontColor: string;
};
interface Props {
  width: string;
  content?: string;
  handleClick?: (e: React.MouseEvent) => void;
  style?: Style;
}
const Button = ({
  width,
  content = '',
  handleClick,
  style = { backgroundColor: 'black', fontColor: 'white' },
}: Props) => {
  return (
    <StyledButton
      $style={style}
      $width={ButtonSize[width]}
      onClick={(e) => handleClick?.(e)}
    >
      {content}
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
  padding: 7px 0;
  border-radius: 5px;

  font-size: 16px;
  border: 1px solid #8b95a1;
`;

export default Button;
