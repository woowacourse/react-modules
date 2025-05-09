/** @jsxImportSource @emotion/react */

import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDevice, useAutoFocus } from '../../hooks';
import { CloseIcon } from '../common';

import * as S from './Modal.styles';
import Button, { ButtonProps } from '../common/Button/Button';
import Input from '../common/Input/Input';

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
 * @property title - 모달의 제목입니다.
 * @property onClose - 모달을 닫을 때 호출되는 콜백 함수입니다.
 * @property isOpen - 모달이 열려 있는지 여부를 나타냅니다.
 * @property position - 모달의 위치를 지정합니다. 'center'(기본값) 또는 'bottom'을 사용할 수 있습니다.
 * @property margin - 모달의 좌우 마진(px)입니다. 기본값은 20입니다.
 * @property zIndex - 모달의 z-index 값입니다. 기본값은 10입니다.
 * @property size - 모달의 크기 (small | medium | large)
 */
export interface ModalInterface {
  /** 모달의 위치 (center | bottom) */
  position?: 'center' | 'bottom';
  /** 모달의 좌우 여백(px) */
  margin?: number;
  /** 모달의 z-index 값 */
  zIndex?: number;
  /** 모달의 크기 (small | medium | large) */
  size?: 'small' | 'medium' | 'large';
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

function ModalMain({
  children,
  position = 'center',
  margin = 20,
  zIndex = 10,
  size = 'medium',
}: PropsWithChildren<ModalInterface>) {
  const device = useDevice();
  const { isOpen, close } = useContext(ModalContext);

  const { modalRef } = useAutoFocus(isOpen);

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <S.ModalContainer
              position={position}
              margin={margin}
              zIndex={zIndex}
              device={device}
              size={size}
              ref={modalRef}
            >
              {children}
            </S.ModalContainer>
            <S.ModalBackdrop onClick={close} />
          </>,
          document.body,
        )}
    </>
  );
}
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

function PromptInput() {
  return <Input />;
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
  return <Button {...props} />;
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
