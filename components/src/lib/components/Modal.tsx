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
  const handleCloseByEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleCloseByBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }
  }, [isOpen, onAfterOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [handleCloseByEsc]);

  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose, position }}>
      <div className={ModalBackdrop} onClick={handleCloseByBackdrop} aria-label="modal-backdrop">
        <div className={ModalFrame(position)} role="dialog" aria-modal="true" aria-labelledby="modal-title">
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
