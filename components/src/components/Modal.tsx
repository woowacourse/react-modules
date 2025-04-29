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

type modalStyledProps = Pick<ModalProps, 'position' | 'width'>;
const StyledModal = styled.div<modalStyledProps>`
  width: ${(props) =>
    props.position === 'center' ? `${props.width}px` : '100%'};
  padding: 24px 32px;
  border-radius: 8px 8px 0px 0px;
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  position: absolute;
  top: ${(props) => (props.position === 'top' ? '0px' : 'auto')};
  bottom: ${(props) => (props.position === 'bottom' ? '0px' : 'auto')};
`;
