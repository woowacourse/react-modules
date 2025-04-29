import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactElement;
  position: 'top' | 'bottom' | 'center';
  width?: number;
}

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

function Modal({ isOpen, children, position, width }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledModal isOpen={isOpen} position={position} width={width}>
      {children}
    </StyledModal>
  );
}

export default Modal;

type modalStyledProps = Pick<ModalProps, 'isOpen' | 'position' | 'width'>;
const StyledModal = styled.div<modalStyledProps>`
  width: ${(props) =>
    props.position === 'center' ? `${props.width}px` : '100%'};
  padding: 24px 32px;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  top: ${(props) => (props.position === 'top' ? '0px' : 'auto')};
  border-radius: ${(props) => radius[props.position]};
  bottom: ${(props) => (props.position === 'bottom' ? '0px' : 'auto')};
`;
