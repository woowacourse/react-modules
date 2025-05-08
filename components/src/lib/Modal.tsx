import styled from '@emotion/styled';
import useEscapeKeyClose from './hooks/useEscapePress';
import { createContext, useContext } from 'react';

interface BaseProps {
  children?: React.ReactNode;
}

interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const Overlay = () => {
  const { onClose } = useContext(ModalContext);

  return <ModalOverlay data-testid="modal-overlay" onClick={onClose} />;
};

const Content = ({ children }: BaseProps) => {
  return <ModalContent>{children}</ModalContent>;
};

const CloseButton = () => {
  const { onClose } = useContext(ModalContext);

  return (
    <div data-testid="modal-close" onClick={() => onClose()}>
      모달닫기
    </div>
  );
};

Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.CloseButton = CloseButton;

export default Modal;

const ModalContent = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
