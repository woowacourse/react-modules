import styled from '@emotion/styled';
import { PropsWithChildren, useEffect, useRef } from 'react';
import CloseButton from './CloseButton';
import {
  MODAL_CONTAINER_POSITION_STYLES,
  MODAL_CONTAINER_RESPONSIVE_WIDTH_STYLES,
  MODAL_WRAPPER_POSITION_STYLES,
} from './Modal.styles';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Title from './Title';
import { ModalPositionType, ModalProps } from './types';

function ModalContainer({
  open,
  onClose,
  position = 'center',
  style,
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <StyledModalContainer
      onClose={onClose}
      position={position}
      style={style}
      ref={modalRef}
    >
      <ModalWrapper position={position}>{children}</ModalWrapper>
    </StyledModalContainer>
  );
}

const StyledModalContainer = styled.dialog<{ position: ModalPositionType }>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 0;
  position: relative;
  background-color: transparent;
  border: none;

  ${(props) => MODAL_CONTAINER_POSITION_STYLES[props.position]}

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  @media (max-width: 600px) {
    width: ${(props) =>
      MODAL_CONTAINER_RESPONSIVE_WIDTH_STYLES[props.position]};
  }
`;

const ModalWrapper = styled.div<{ position: ModalPositionType }>`
  display: flex;
  flex-direction: column;

  padding: 24px 32px;
  background-color: white;

  ${(props) => MODAL_WRAPPER_POSITION_STYLES[props.position]}
`;

export default {
  Container: ModalContainer,
  CloseButton,
  Title,
  PrimaryButton,
  SecondaryButton,
};
