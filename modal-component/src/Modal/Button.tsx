import styled from 'styled-components';
import useModalContext from './hooks/useModalContext';

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  border?: string;
};

const Button = ({
  title,
  backgroundColor,
  textColor,
  size,
  border,
  onClick,
}: ButtonProps) => {
  const { onClose } = useModalContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onClick) {
      onClick();
    }
    onClose();
  };

  return (
    <ModalButton
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $size={size}
      $border={border}
      onClick={handleClick}
    >
      {title}
    </ModalButton>
  );
};

type ModalButtonProps = {
  $backgroundColor: string;
  $textColor: string;
  $size: 'small' | 'medium' | 'large';
  $border: string;
};

const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#ffffff'};
  color: ${({ $textColor }) => $textColor || '#000000'};
  width: ${({ $size }) => getSize($size)};
  border: ${({ $border }) => $border || 'none'};
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:focus {
    outline: 1px solid #000000;
  }
`;

function getSize(size: 'small' | 'medium' | 'large') {
  switch (size) {
    case 'small':
      return '80px';
    case 'medium':
      return '120px';
    case 'large':
      return '300px';
    default:
      return '100%';
  }
}

export default Button;
