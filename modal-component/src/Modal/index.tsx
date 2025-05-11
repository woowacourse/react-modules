import { BackDrop, ModalLayout } from './Modal.styled';
import { useEffect, useRef, useState } from 'react';
import { createContext } from 'react';
import { createPortal } from 'react-dom';
import ButtonContainer from './ButtonContainer';
import Contents from './Contents';
import Title from './Title';
import Button from './Button';
import Input from './Input';
import CloseButton from './CloseButton';

type ModalProps = {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
};
type ModalContextType = {
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom';
};
export const ModalContext = createContext<ModalContextType | null>(null);

const FOCUSABLE_SELECTORS = `
  a[href], area[href], input:not([disabled]),
  select:not([disabled]), textarea:not([disabled]),
  button:not([disabled]), iframe, object, embed,
  [tabindex]:not([tabindex="-1"])
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  position = 'center',
  size = 'small',
}: ModalProps) => {

  const modalContextValue: ModalContextType = {
    onClose,
    children,
    position,
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const focusableElements =
      modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen &&
        createPortal(
          <ModalContext.Provider value={modalContextValue}>
            <BackDrop onClick={onClose} $position={position}>
              <ModalLayout
                ref={modalRef}
                $position={position}
                $size={size}
                onClick={(event) => event.stopPropagation()}
              >
                {children}
              </ModalLayout>
            </BackDrop>
          </ModalContext.Provider>,
          document.getElementById('root') as HTMLElement
        )}
      ,
    </>
  );
};

Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Contents = Contents;
Modal.ButtonContainer = ButtonContainer;
Modal.Button = Button;
Modal.Input = Input;

export default Modal;
