import { createContext, useContext, MouseEvent, useEffect } from 'react';
import { css } from '@emotion/css';
import {
  Position,
  ModalProps,
  ModalContextType,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
} from '../types/Modal.type';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const Modal = ({ children, isOpen, onAfterOpen, onClose, position = 'center' }: ModalProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose, position }}>
      <div
        className={ModalBackdrop}
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        data-testid="modal-backdrop"
      >
        <div className={ModalFrame(position)} data-testid="modal">
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Header = ({ title, showCloseButton = true }: ModalHeaderProps) => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal.Header는 반드시 Modal 컴포넌트 내부에서 사용해야 합니다.');
  }

  const { onClose } = context;

  return (
    <section className={ModalHeader}>
      {title && <h2 id="modal-title">{title}</h2>}
      {showCloseButton && (
        <button className={ModalCloseButton} onClick={onClose}>
          X
        </button>
      )}
    </section>
  );
};

const Content = ({ children }: ModalContentProps) => {
  return <section className={ModalContent}>{children}</section>;
};

const Footer = ({ children }: ModalFooterProps) => {
  return <section className={ButtonBar}>{children}</section>;
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;

const ModalBackdrop = css`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
`;

const ModalFrame = (position: Position) => css`
  background-color: white;
  padding: 20px;
  width: ${position === 'center' ? '100%' : '100dvw'};
  min-width: ${position === 'center' && '300px'};
  max-width: ${position === 'center' && '80dvw'};
  border-radius: ${position === 'center' ? '8px' : '8px 8px 0 0'};
  position: ${position === 'bottom' && 'absolute'};
  bottom: ${position === 'bottom' && '0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ModalHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalCloseButton = css`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;

const ModalContent = css`
  width: 100%;
  padding: 10px 0;
`;

const ButtonBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
