import styled from 'styled-components';

type ButtonContainerProps = {
  position?: 'left' | 'right' | 'center';
  children: React.ReactNode;
};

const ButtonContainer = ({
  position = 'right',
  children,
}: ButtonContainerProps) => {
  return (
    <ModalButtonContainer $position={position}>{children}</ModalButtonContainer>
  );
};

type ModalButtonContainerStyledProps = {
  $position: 'left' | 'right' | 'center';
};

const ModalButtonContainer = styled.div<ModalButtonContainerStyledProps>`
  display: flex;
  justify-content: ${({ $position }) => getButtonPosition($position)};
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

function getButtonPosition($position: 'left' | 'right' | 'center') {
  switch ($position) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'center';
  }
}

export default ButtonContainer;
