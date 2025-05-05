import styled from '@emotion/styled';
import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { ModalProps } from './types';
import { css } from '@emotion/react';

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

function CloseButton({
  style,
  onClose,
}: {
  style?: CSSProperties;
  onClose: () => void;
}) {
  return (
    <StyledCloseButton type="button" style={style} onClick={onClose}>
      <img
        src={new URL('./assets/close-button.png', import.meta.url).href}
        alt="모달 닫기 버튼"
      />
    </StyledCloseButton>
  );
}

function Title({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  return <StyledTitle style={style}>{children}</StyledTitle>;
}

const StyledModalContainer = styled.dialog<{ isBottom: boolean }>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 24px 32px;
  position: relative;

  border: none;
  border-radius: 8px;

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  ${({ isBottom }) => (isBottom ? bottomModalContainer : defaultModalContainer)}
`;

const defaultModalContainer = css`
  @media (max-width: 600px) {
    width: calc(100vw - 72px);
  }
`;

const bottomModalContainer = css`
  margin-bottom: 0;
  width: 100%;
  max-width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (max-width: 600px) {
    width: 100%;
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
