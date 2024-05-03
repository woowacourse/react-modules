import styled from 'styled-components';
import Theme from '@/style/theme';

type ButtonColorType = 'dark' | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  colorType?: ButtonColorType;
}

const Button = ({
  label,
  onClick,
  colorType = 'light',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} $colorType={colorType} {...rest}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ $colorType: ButtonColorType }>`
  width: 100%;
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
