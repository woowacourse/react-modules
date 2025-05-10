/** @jsxImportSource @emotion/react */

import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAutoFocus } from '../../hooks';
import { CloseIcon } from '../common';

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
export interface ModalInterface {
  /** 모달의 위치 (center | bottom) */
  position?: 'center' | 'bottom';
  /** 모달의 z-index 값 */
  zIndex?: number;
  /** 모달의 크기 (small | medium | large) */
  size?: 'small' | 'medium' | 'large';
  /** 배경 클릭 시 모달 닫기 여부 */
  isBackdropClose?: boolean;
}

function Wrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

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

function ModalMain({
  children,
  position = 'center',
  zIndex = 10,
  size = 'medium',
  isBackdropClose = false,
}: PropsWithChildren<ModalInterface>) {
  const { isOpen, close } = useContext(ModalContext);

  const { modalRef } = useAutoFocus(isOpen);

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <S.ModalContainer position={position} zIndex={zIndex} size={size} ref={modalRef}>
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
function Trigger({ children }: { children: ReactNode }) {
  const { open } = useContext(ModalContext);

  return <S.TransparentButton onClick={open}>{children}</S.TransparentButton>;
}
Trigger.displayName = 'ModalTrigger';

/**
 * Top
 */

function Top({ children }: { children: ReactNode }) {
  return <S.ModalTop>{children}</S.ModalTop>;
}
Top.displayName = 'ModalTop';

function Title({ children }: { children: ReactNode }) {
  return <S.Title>{children}</S.Title>;
}
Title.displayName = 'ModalTitle';

function Close({ children }: { children: ReactNode }) {
  const { close } = useContext(ModalContext);

  return <S.TransparentButton onClick={close}>{children}</S.TransparentButton>;
}
Close.displayName = 'ModalClose';

/**
 * Middle
 */
function Content({ children }: { children: ReactNode }) {
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

function Bottom({ children }: { children: ReactNode }) {
  return <S.ModalBottom>{children}</S.ModalBottom>;
}
Bottom.displayName = 'ModalBottom';

function ButtonContainer({ children }: { children: ReactNode }) {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
}
ButtonContainer.displayName = 'ModalButtonContainer';

function CancelButton({ children }: { children: ReactNode }) {
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
