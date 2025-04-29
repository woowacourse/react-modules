import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactElement;
  position: 'top' | 'bottom' | 'center';
  width?: number;
}

function Modal({ isOpen, children, position, width }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <StyledModal position={position} width={width}>
      {children}
    </StyledModal>,
    document.body
  );
}

export default Modal;

const StyledModal = styled.div<{
  position: 'top' | 'bottom' | 'center';
  width?: number;
}>`
  display: flex;
  width: ${(props) =>
    props.position === 'center' ? `${props.width}px` : '100%'};
  padding: 24px 32px;
  border-radius: 8px 8px 0px 0px;
  background: #fff;
`;
