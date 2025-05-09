import styled from '@emotion/styled';
import useEscapeKeyClose from './hooks/useEscapePress';
import { createContext, useContext } from 'react';
import CloseIconButton from './components/CloseIconButton';
import {
  AlertContentProps,
  ButtonContainerProps,
  Direction,
  ModalContentProps,
  ModalProps,
  OverlayProps,
  Position,
} from './types/Props';
import TextButton from './components/TextButton';

const ModalContext = createContext<{ onClose: () => void }>({ onClose: () => {} });

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useEscapeKeyClose(isOpen, onClose);

  return (
    <>
      {isOpen && (
        <ModalContext.Provider value={{ onClose }}>
          <div id="modal">{children}</div>
        </ModalContext.Provider>
      )}
    </>
  );
};

const Overlay = ({ closeOnClick = true }: OverlayProps) => {
  const { onClose } = useContext(ModalContext);

  const handleClick = () => {
    if (!closeOnClick) return;
    onClose();
  };

  return <S.ModalOverlay data-testid="modal-overlay" onClick={handleClick} />;
};

const Content = ({
  children,
  hasTopCloseButton = true,
  position = 'center',
  ...props
}: ModalContentProps) => {
  const { onClose } = useContext(ModalContext);

  return (
    <S.ModalContent position={position} {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={() => onClose()} />}
      {children}
    </S.ModalContent>
  );
};

const AlertContent = ({
  children,
  hasTopCloseButton = true,
  position = 'center',
  onAlert,
  alertButtonText = '확인',
  alertButtonColor = '#fff',
  alertButtonBackgroundColor = '#333',
  ...props
}: AlertContentProps) => {
  const { onClose } = useContext(ModalContext);

  return (
    <S.ModalContent
      position={position}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={() => onClose()} />}
      {children}
      <ButtonContainer>
        <TextButton
          text={alertButtonText}
          color={alertButtonColor}
          backgroundColor={alertButtonBackgroundColor}
          onClick={onAlert ? onAlert : onClose}
        />
      </ButtonContainer>
    </S.ModalContent>
  );
};

const ButtonContainer = ({ children, direction = 'row' }: ButtonContainerProps) => {
  return <S.ButtonContainerStyle direction={direction}>{children}</S.ButtonContainerStyle>;
};

const Title = ({ title }: { title: string }) => {
  return <S.TitleText>{title}</S.TitleText>;
};

Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.AlertContent = AlertContent;
Modal.Title = Title;

export default Modal;

const S = {
  ModalContent: styled.div<{ position: Position }>`
    height: 216px;
    width: 304px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 24px 32px;
    border-radius: 8px;
    color: #000;

    ${({ position }) =>
      position === 'bottom' &&
      `
      width: 100%;
      top: auto;
      left: 0;
      transform: none;
      bottom: 0;
    `}
  `,

  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.35);
  `,

  TitleText: styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  `,

  ButtonContainerStyle: styled.div<{ direction: Direction }>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: end;
    gap: 12px;

    & > button {
      ${({ direction }) => direction === 'row' && `width: auto;`}
    }
  `,
};
