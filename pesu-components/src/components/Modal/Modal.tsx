/** @jsxImportSource @emotion/react */

import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAutoFocus, useDevice } from '../../hooks';
import { CloseIcon } from '../common';

import { StrictPropsWithChildren } from '../../types';
import Button, { ButtonProps } from '../common/Button/Button';
import Input, { InputProps } from '../common/Input/Input';
import * as S from './Modal.styles';

type ModalContext = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

const ModalContext = createContext<ModalContext>({
  isOpen: false,
  close: () => {},
  open: () => {},
});

/**
 * 모달 컴포넌트의 props
 *
 * @property position - 모달의 위치를 지정합니다. 'center'(기본값) 또는 'bottom'을 사용할 수 있습니다.
 * @property margin - 모달의 좌우 마진(px)입니다. 기본값은 20입니다.
 * @property zIndex - 모달의 z-index 값입니다. 기본값은 10입니다.
 * @property size - 모달의 크기 (small | medium | large)
 */

interface WrapperProps {
  initialOpen?: boolean;
}

function Wrapper({ children, initialOpen = false }: StrictPropsWithChildren<WrapperProps>) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return <ModalContext.Provider value={{ isOpen, close, open }}>{children}</ModalContext.Provider>;
}
Wrapper.displayName = 'ModalWrapper';

export interface ModalProps {
  /** 모달의 위치 (center | bottom) */
  position?: 'center' | 'bottom';
  /** 모달의 z-index 값 */
  zIndex?: number;
  /** 모달의 크기 (small | medium | large) */
  size?: 'small' | 'medium' | 'large';
  /** 배경 클릭 시 모달 닫기 여부 */
  isBackdropClose?: boolean;
  /** 모달의 내용 */
  children: React.ReactNode;
}

function ModalMain({
  children,
  position = 'center',
  zIndex = 10,
  size = 'medium',
  isBackdropClose = false,
}: ModalProps) {
  const { isOpen, close } = useContext(ModalContext);
  const device = useDevice();

  const { modalRef } = useAutoFocus(isOpen);

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <S.ModalContainer position={position} zIndex={zIndex} size={size} ref={modalRef} device={device}>
              {children}
            </S.ModalContainer>
            <S.ModalBackdrop onClick={isBackdropClose ? close : undefined} />
          </>,
          document.body,
        )}
    </>
  );
}
ModalMain.displayName = 'ModalMain';

/**
 * Outside
 */
function Trigger({ children }: StrictPropsWithChildren) {
  const { open } = useContext(ModalContext);

  return <S.TransparentButton onClick={open}>{children}</S.TransparentButton>;
}
Trigger.displayName = 'ModalTrigger';

/**
 * Top
 */

function Top({ children }: StrictPropsWithChildren) {
  return <S.ModalTop>{children}</S.ModalTop>;
}
Top.displayName = 'ModalTop';

function Title({ children }: StrictPropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}
Title.displayName = 'ModalTitle';

function Close({ children }: StrictPropsWithChildren) {
  const { close } = useContext(ModalContext);

  return <S.TransparentButton onClick={close}>{children}</S.TransparentButton>;
}
Close.displayName = 'ModalClose';

/**
 * Middle
 */
function Content({ children }: StrictPropsWithChildren) {
  return <S.ModalContent>{children}</S.ModalContent>;
}
Content.displayName = 'ModalContent';

function PromptInput({ ...props }: InputProps) {
  return <Input {...props} />;
}
PromptInput.displayName = 'ModalPromptInput';

/**
 * Bottom
 */

function Bottom({ children }: StrictPropsWithChildren) {
  return <S.ModalBottom>{children}</S.ModalBottom>;
}
Bottom.displayName = 'ModalBottom';

function ButtonContainer({ children }: StrictPropsWithChildren) {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
}
ButtonContainer.displayName = 'ModalButtonContainer';

function CancelButton({ children }: StrictPropsWithChildren) {
  const { close } = useContext(ModalContext);

  return (
    <Button variant="outline" onClick={close}>
      {children}
    </Button>
  );
}
CancelButton.displayName = 'ModalCancelButton';

function ConfirmButton({ ...props }: ButtonProps) {
  const { close } = useContext(ModalContext);

  const handleConfirmButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    close();
    props.onClick?.(event);
  };

  return <Button onClick={handleConfirmButtonClick} {...props} />;
}
ConfirmButton.displayName = 'ModalConfirmButton';

const Modal = Object.assign(ModalMain, {
  Wrapper,
  Top,
  Title,
  Close,
  Trigger,
  CloseIcon,
  Content,
  PromptInput,
  Bottom,
  CancelButton,
  ConfirmButton,
  ButtonContainer,
});

export default Modal;
