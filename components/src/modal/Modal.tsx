import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren, useEffect, useRef } from 'react';
import CloseButton from './CloseButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Title from './Title';
import { ModalProps } from './types';

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
      isBottom={position === 'bottom'}
      style={style}
      ref={modalRef}
    >
      <ModalWrapper isBottom={position === 'bottom'}>{children}</ModalWrapper>
    </StyledModalContainer>
  );
}

const StyledModalContainer = styled.dialog<{ isBottom: boolean }>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 0;
  position: relative;
  background-color: transparent;

  border: none;

  margin-bottom: ${(props) => (props.isBottom ? 0 : null)};
  width: ${(props) => (props.isBottom ? '100%' : null)};
  max-width: ${(props) => (props.isBottom ? '100%' : null)};

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  @media (max-width: 600px) {
    width: ${(props) => (props.isBottom ? '100%' : 'calc(100vw - 72px)')};
  }
`;

const ModalWrapper = styled.div<{ isBottom: boolean }>`
  display: flex;
  flex-direction: column;

  padding: 24px 32px;
  background-color: white;
  border-radius: 8px;

  border-bottom-left-radius: ${(props) => (props.isBottom ? 0 : null)};
  border-bottom-right-radius: ${(props) => (props.isBottom ? 0 : null)};
  gap: ${(props) => (props.isBottom ? '16px' : '24px')};
`;

export default {
  Container: ModalContainer,
  CloseButton,
  Title,
  PrimaryButton,
  SecondaryButton,
};
