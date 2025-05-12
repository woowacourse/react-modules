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
import { ModalProps, PositionType, SizeType } from './types';
import { css } from '@emotion/react';
import Input from './Input';
import useFocusTrap from './useFocus';

function ModalContainer({
  open,
  onClose,
  position = 'center',
  size = 'medium',
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

  const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  };

  const { setRef, handleKeyDownTab } = useFocusTrap(open);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal || !open) {
      return;
    }

    setRef(modal);
  }, [modalRef, open, setRef]);

  return (
    <StyledModalContainer
      onClick={handleClickOutside}
      onClose={onClose}
      onKeyDown={handleKeyDownTab}
      position={position}
      size={size}
      style={style}
      ref={modalRef}
    >
      <ModalWrapper position={position}>{children}</ModalWrapper>
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

const StyledModalContainer = styled.dialog<{
  position: PositionType;
  size: SizeType;
}>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 0px;
  position: relative;

  border: none;
  border-radius: 8px;

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  ${({ position }) => positionStyles[position]}
  ${({ position, size }) => position !== 'bottom' && modalContainerSize[size]}
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

const positionStyles = {
  center: defaultModalContainer,
  bottom: bottomModalContainer,
};

const modalContainerSize = {
  small: css`
    width: 320px;
  `,

  medium: css`
    width: 480px;
  `,

  large: css`
    width: 600px;
  `,
};

const ModalWrapper = styled.div<{ position: PositionType }>`
  padding: 24px 32px;

  display: flex;
  flex-direction: column;

  ${({ position }) => modalWrapperGap[position]}
`;

const modalWrapperGap = {
  center: css`
    gap: 16px;
  `,

  bottom: css`
    gap: 24px;
  `,
};

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;

  font-size: 24px;
  font-weight: 700;
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
  Input,
};
