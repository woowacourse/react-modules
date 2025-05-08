import { ReactElement } from 'react';
import styled from 'styled-components';

interface ModalContentProps {
  children: ReactElement[] | ReactElement;
  position: 'top' | 'bottom' | 'center';
  width?: number;
  styleProps?: React.CSSProperties;
}

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

function ModalContent({
  children,
  position,
  width,
  styleProps,
}: ModalContentProps) {
  return (
    <StyledModal
      id="modal-content"
      position={position}
      width={width}
      styleProps={styleProps}
    >
      {children}
    </StyledModal>
  );
}

export default ModalContent;

interface BoxProps {
  styleProps?: React.CSSProperties;
}

type modalStyledProps = Pick<ModalContentProps, 'position' | 'width'> &
  BoxProps;

const StyledModal = styled.div.attrs<modalStyledProps>((props) => ({
  style: props.styleProps,
}))<modalStyledProps>`
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
