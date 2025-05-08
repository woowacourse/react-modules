import { ReactElement } from 'react';
import styled from 'styled-components';

interface ModalContentProps {
  children: ReactElement[] | ReactElement;
  position: 'top' | 'bottom' | 'center';
  width?: number;
}

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

function ModalContent({ children, position, width }: ModalContentProps) {
  return (
    <StyledModal id="modal-content" position={position} width={width}>
      {children}
    </StyledModal>
  );
}

export default ModalContent;

type modalStyledProps = Pick<ModalContentProps, 'position' | 'width'>;
const StyledModal = styled.div<modalStyledProps>`
  width: ${(props) =>
    props.position === 'center' ? `${props.width}px` : '100%'};
  padding: 24px 32px;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  top: ${(props) => (props.position === 'top' ? '0px' : 'auto')};
  border-radius: ${(props) => radius[props.position]};
  bottom: ${(props) => (props.position === 'bottom' ? '0px' : 'auto')};
  z-index: 10;
`;
