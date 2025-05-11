import styled from 'styled-components';
import { useModalContext } from './ModalContext';

function ModalCloseButton() {
  const { onClose } = useModalContext();

  return (
    <StyledCloseButton onClick={onClose} className="close-button">
      <span>X</span>
    </StyledCloseButton>
  );
}

export default ModalCloseButton;

const StyledCloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  padding: 0px;
  cursor: pointer;
`;
