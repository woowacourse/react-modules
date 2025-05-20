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
    onClick?.();
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

const sizeMap = {
  small: '80px',
  medium: '120px',
  large: '300px',
};

const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#ffffff'};
  color: ${({ $textColor }) => $textColor || '#000000'};
  width: ${({ $size }) => sizeMap[$size] || '100%'};
  border: ${({ $border }) => $border || 'none'};
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:focus {
    outline: 1px solid #000000;
  }
`;

export default Button;
