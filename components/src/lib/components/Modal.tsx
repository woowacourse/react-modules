import { createContext, useContext } from 'react';
import {
  ModalProps,
  ModalContextType,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
} from '../types/Modal.type';
import { ModalBackdrop, ModalFrame, ModalHeader, ModalCloseButton, ModalContent, ButtonBar } from './Modal.styles';
import useModalEvents from '../hooks/useModalEvent';
import useModalFocus from '../hooks/useModalFocus';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const Modal = ({ children, isOpen, onAfterOpen, onClose, position = 'center', size }: ModalProps) => {
  if (!isOpen) return null;

  const { handleCloseByBackdrop } = useModalEvents(isOpen, onClose, onAfterOpen);
  const modalRef = useModalFocus(isOpen);

  return (
    <ModalContext.Provider value={{ onClose, position }}>
      <div className={ModalBackdrop} onClick={handleCloseByBackdrop} aria-label="modal-backdrop">
        <div
          className={ModalFrame(position, size)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          ref={modalRef}
        >
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
