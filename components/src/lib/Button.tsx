import styled from 'styled-components';

type ButtonColorType = 'black' | 'white';

interface ButtonProps {
  label: string;
  onClick: () => void;
  colorType?: ButtonColorType;
}

const Button = ({ label, onClick, colorType = 'white' }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} $colorType={colorType}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ $colorType: ButtonColorType }>`
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  background-color: ${({ $colorType }) =>
    $colorType === 'black' ? '#333333' : 'white'};
  color: ${({ $colorType }) => ($colorType === 'black' ? 'white' : '#333333')};
  border: 1px solid
    ${({ $colorType }) => ($colorType === 'white' ? '#bababa' : '#333333')};
  margin-top: 10px;
  cursor: pointer;
`;
