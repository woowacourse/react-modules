import styled from 'styled-components';
import Theme from '../style/theme';
import { Size } from './Modal/Modal';

type ButtonColorType = 'dark' | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size: Size;
  colorType?: ButtonColorType;
  onClick: () => void;
}

const Button = ({
  label,
  size,
  colorType = 'light',
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      $size={size}
      $colorType={colorType}
      {...rest}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;

const sizeMap = {
  small: '100px',
  medium: '200px',
  large: '100%',
};

const ButtonWrapper = styled.button<{
  $size: Size;
  $colorType: ButtonColorType;
}>`
  width: ${({ $size }) => sizeMap[$size]};
  height: 44px;
  font-size: ${Theme.font.size.medium};
  font-weight: ${Theme.font.weight.bold};
  border-radius: 5px;
  background-color: ${({ $colorType }) =>
    $colorType === 'dark' ? Theme.colors.dark : Theme.colors.white};
  color: ${({ $colorType }) =>
    $colorType === 'dark' ? Theme.colors.white : Theme.colors.dark};
  border: 1px solid
    ${({ $colorType }) =>
      $colorType === 'light' ? Theme.colors.grey : Theme.colors.dark};
  margin-top: 10px;
  cursor: pointer;
`;
