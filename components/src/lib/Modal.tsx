import styled from '@emotion/styled';
import useEscapeKeyClose from './hooks/useEscapePress';
import { createContext, useContext } from 'react';
import CloseIconButton from './components/CloseIconButton';
import {
  AlertContentProps,
  ButtonContainerProps,
  ConfirmContentProps,
  Direction,
  ModalContentProps,
  ModalProps,
  OverlayProps,
  Position,
  PromptContentProps,
  Size,
} from './types/props';
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
  size = 'small',
  ...props
}: ModalContentProps) => {
  const { onClose } = useContext(ModalContext);

  return (
    <S.ModalContent position={position} size={size} {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={() => onClose()} />}
      {children}
    </S.ModalContent>
  );
};

const AlertContent = ({
  children,
  hasTopCloseButton = true,
  position = 'center',
  size = 'small',
  alertButton = {},
  ...props
}: AlertContentProps) => {
  const { onClose } = useContext(ModalContext);

  const {
    text = '확인',
    color = '#fff',
    backgroundColor = '#333',
    onClick = onClose,
  } = alertButton;

  return (
    <S.ModalContent
      position={position}
      size={size}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={onClose} />}
      {children}
      <ButtonContainer>
        <TextButton text={text} color={color} backgroundColor={backgroundColor} onClick={onClick} />
      </ButtonContainer>
    </S.ModalContent>
  );
};

const ConfirmContent = ({
  children,
  hasTopCloseButton = true,
  position = 'center',
  size = 'small',
  confirmButton = {},
  cancelButton = {},
  ...props
}: ConfirmContentProps) => {
  const { onClose } = useContext(ModalContext);

  const {
    text: confirmText = '확인',
    color: confirmColor = '#fff',
    backgroundColor: confirmBackgroundColor = '#333',
    onClick: onConfirmClick = onClose,
  } = confirmButton;

  const {
    text: cancelText = '취소',
    color: cancelColor = '#8B95A1',
    backgroundColor: cancelBackgroundColor = 'transparent',
    onClick: onCancelClick = onClose,
  } = cancelButton;

  return (
    <S.ModalContent
      position={position}
      size={size}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={onClose} />}
      {children}
      <ButtonContainer>
        <TextButton
          text={cancelText}
          color={cancelColor}
          backgroundColor={cancelBackgroundColor}
          onClick={onCancelClick}
        />
        <TextButton
          text={confirmText}
          color={confirmColor}
          backgroundColor={confirmBackgroundColor}
          onClick={onConfirmClick}
        />
      </ButtonContainer>
    </S.ModalContent>
  );
};

const PromptContent = ({
  inputValue,
  setInputValue,
  children,
  hasTopCloseButton = true,
  position = 'center',
  size = 'small',
  confirmButton = {},
  cancelButton = {},
  ...props
}: PromptContentProps) => {
  const { onClose } = useContext(ModalContext);

  const {
    text: confirmText = '확인',
    color: confirmColor = '#fff',
    backgroundColor: confirmBackgroundColor = '#333',
    onClick: onConfirmClick = onClose,
  } = confirmButton;

  const {
    text: cancelText = '취소',
    color: cancelColor = '#8B95A1',
    backgroundColor: cancelBackgroundColor = 'transparent',
    onClick: onCancelClick = onClose,
  } = cancelButton;

  return (
    <S.ModalContent
      position={position}
      size={size}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      {...props}>
      {hasTopCloseButton && <CloseIconButton data-testid="modal-close" onClick={onClose} />}
      {children}
      <S.Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ButtonContainer>
        <TextButton
          text={cancelText}
          color={cancelColor}
          backgroundColor={cancelBackgroundColor}
          onClick={onCancelClick}
        />
        <TextButton
          text={confirmText}
          color={confirmColor}
          backgroundColor={confirmBackgroundColor}
          onClick={onConfirmClick}
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
Modal.ConfirmContent = ConfirmContent;
Modal.PromptContent = PromptContent;
Modal.Title = Title;

export default Modal;

const S = {
  ModalContent: styled.div<{ position: Position; size: Size }>`
    height: 216px;
    width: ${({ size }) => {
      if (size === 'small') return 320;
      if (size === 'medium') return 480;
      if (size === 'large') return 600;
    }}px;
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

  Input: styled.input`
    border: 2px solid black;
    border-radius: 2px;
    padding: 8px;
  `,
};
