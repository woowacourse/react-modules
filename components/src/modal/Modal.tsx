import styled from '@emotion/styled';
import { PropsWithChildren, useEffect, useRef } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'center' | 'bottom';
}

function ModalContainer({
  isOpen,
  onClose,
  position = 'center',
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <StyledModalContainer
      onClose={onClose}
      isBottom={position === 'bottom'}
      ref={modalRef}
    >
      <ModalWrapper isBottom={position === 'bottom'}>{children}</ModalWrapper>
    </StyledModalContainer>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <StyledCloseButton type="button" onClick={onClose}>
      <img
        src={new URL('./assets/close-button.png', import.meta.url).href}
        alt="모달 닫기 버튼"
      />
    </StyledCloseButton>
  );
}

function Title({ text }: { text: string }) {
  return <StyledTitle>{text}</StyledTitle>;
}

const StyledModalContainer = styled.dialog<{ isBottom: boolean }>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 24px 32px;
  position: relative;

  border: none;
  border-radius: 8px;

  margin-bottom: ${(props) => (props.isBottom ? 0 : null)};
  width: ${(props) => (props.isBottom ? '100%' : null)};
  max-width: ${(props) => (props.isBottom ? '100%' : null)};
  border-bottom-left-radius: ${(props) => (props.isBottom ? 0 : null)};
  border-bottom-right-radius: ${(props) => (props.isBottom ? 0 : null)};

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
  gap: ${(props) => (props.isBottom ? '16px' : '24px')};
`;

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 24px;
  right: 32px;
  cursor: pointer;
`;

export default {
  Container: ModalContainer,
  CloseButton,
  Title,
  PrimaryButton,
  SecondaryButton,
};
