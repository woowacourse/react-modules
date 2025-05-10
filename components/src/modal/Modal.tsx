import styled from '@emotion/styled';
import { PropsWithChildren, useMemo } from 'react';
import CloseButton from './CloseButton';
import useClickOutside from './hooks/useClickOutside';
import {
  MODAL_CONTAINER_POSITION_STYLES,
  MODAL_CONTENT_POSITION_STYLES,
  MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES,
  MODAL_CONTENT_SIZE_STYLES,
} from './Modal.styles';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Title from './Title';
import { ModalPositionType, ModalProps, ModalSizeType } from './types';

function ModalContainer({
  open,
  onClose,
  position = 'center',
  size = 'medium',
  style,
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose);

  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    open && (
      <StyledModalContainer position={position} style={memoizedStyle}>
        <ModalContent position={position} size={size} ref={modalRef}>
          {children}
        </ModalContent>
      </StyledModalContainer>
    )
  );
}

const StyledModalContainer = styled.div<{ position: ModalPositionType }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);

  ${(props) => MODAL_CONTAINER_POSITION_STYLES[props.position]}
`;

const ModalContent = styled.div<{
  position: ModalPositionType;
  size: ModalSizeType;
}>`
  min-width: 400px;
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 24px 32px;
  box-sizing: border-box;
  background-color: white;

  ${(props) => MODAL_CONTENT_SIZE_STYLES[props.size]}
  ${(props) => MODAL_CONTENT_POSITION_STYLES[props.position]}

  @media (max-width: 600px) {
    ${(props) => MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES[props.position]};
  }
`;

export default {
  Container: ModalContainer,
  CloseButton,
  Title,
  PrimaryButton,
  SecondaryButton,
};
