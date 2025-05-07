import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'center';
  width: 'small' | 'medium' | 'large';
}

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

const widthMap = {
  small: '320px',
  medium: '480px',
  large: '600px',
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
  width: ${(props) => widthMap[props.width]};
  padding: 24px 32px;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  top: ${(props) => (props.position === 'top' ? '0px' : 'auto')};
  border-radius: ${(props) => radius[props.position]};
  bottom: ${(props) => (props.position === 'bottom' ? '0px' : 'auto')};
`;
