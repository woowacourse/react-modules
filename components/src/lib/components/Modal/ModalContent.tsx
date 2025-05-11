import { ReactElement } from 'react';
import styled from 'styled-components';

interface ModalContentProps {
  children: ReactElement[] | ReactElement;
  position: 'top' | 'bottom' | 'center';
  size?: 'small' | 'medium' | 'large';
  styleProps?: React.CSSProperties;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

type SizeKey = 'small' | 'medium' | 'large';

const pxBySize: Record<SizeKey, number> = {
  small: 320,
  medium: 400,
  large: 600,
};

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

function ModalContent({
  children,
  position,
  size,
  styleProps,
  modalRef,
}: ModalContentProps) {
  return (
    <StyledModal
      ref={modalRef}
      id="modal-content"
      position={position}
      size={size}
      styleProps={styleProps}
    >
      {children}
    </StyledModal>
  );
}

export default ModalContent;

interface BoxProps {
  styleProps?: React.CSSProperties;
  size?: SizeKey;
}

type modalStyledProps = Pick<ModalContentProps, 'position'> & BoxProps;

const StyledModal = styled.div.attrs<modalStyledProps>((props) => ({
  style: props.styleProps,
}))<modalStyledProps>`
  width: ${(props) => (props.size ? `${pxBySize[props.size]}px` : '100%')};
  padding: 24px 32px;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  top: ${(props) => (props.position === 'top' ? '0px' : 'auto')};
  border-radius: ${(props) => radius[props.position]};
  bottom: ${(props) => (props.position === 'bottom' ? '0px' : 'auto')};
  z-index: 10;
`;
