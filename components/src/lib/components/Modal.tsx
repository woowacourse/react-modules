import { createContext, useContext, MouseEvent, useEffect } from 'react';
import {
  ModalProps,
  ModalContextType,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
} from '../types/Modal.type';
import { ModalBackdrop, ModalFrame, ModalHeader, ModalCloseButton, ModalContent, ButtonBar } from './Modal.styles';

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
