import { FormEvent, ReactNode, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import '../reset.css';
import '../index.css';

const ModalTypes = ['basic', 'alert', 'confirm', 'prompt'] as const;
const ModalPositions = ['top', 'center', 'bottom'] as const;

type ModalType = (typeof ModalTypes)[number];
type ModalPosition = (typeof ModalPositions)[number];
type ModalSize = 'small' | 'medium' | 'large';

interface FormValues {
  [key: string]: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  type?: ModalType;
  size?: ModalSize; // Only for desktop, tablet
  position?: ModalPosition; // Only for mobile

  title?: string;
  description?: string;
  placeholder?: string; // Only for prompt type
  confirmLabel?: string;
  cancelLabel?: string; // Only for confirm, prompt type
  onConfirm?: (formValues: Record<string, string>) => void;

  portalNodeId?: string;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  type = 'basic',
  size = 'small',
  position = 'center',
  title = '',
  description = '',
  placeholder = '',
  confirmLabel = '확인',
  cancelLabel = '취소',
  onConfirm = () => {},
  portalNodeId = '',
  children,
}) => {
  const [$portal, setPortal] = useState<HTMLElement | null>(null);

  const willRenderCancelButton = ['confirm', 'prompt'].includes(type);
  const willRenderConfirmButton = ['confirm', 'prompt', 'alert'].includes(type);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(e.currentTarget).entries()) as FormValues;
    onConfirm(formValues);
    handleClose();
  };

  /* Mount: Create portal element to 'domNode' */
  /* Unmount: Remove portal element from 'domNode' */
  useLayoutEffect(function createPortalElement() {
    // Create & Store
    const $newPortal = document.createElement('div');
    $newPortal.className = styles.container;
    setPortal($newPortal);

    // Get Parent & Render
    const $parentNode = portalNodeId ? document.getElementById(portalNodeId) : document.body;
    $parentNode?.appendChild($newPortal);

    // Remove
    return () => {
      $parentNode?.removeChild($newPortal);
    };
  }, []);

  /* Close 'Modal'' */
  if (!isOpen || !$portal) return null;

  /* Open 'Modal'' */
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <form
        className={`${styles.content} ${styles[size]} ${styles[position]}`}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        {title && <p className={styles.title}>{title}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {children}

        {/* Render 'Close Button' (on Basic)*/}
        {type === 'basic' && <button className={styles.closeButton} onClick={handleClose} />}

        {/* Render 'Input Field' (on Prompt) */}
        {type === 'prompt' && <input name='prompt' className={styles.inputField} placeholder={placeholder} />}

        {/* Render 'Cancel Button' (on Confirm | Prompt) */}
        {/* Render 'Confirm Button' (on Alert | Confirm | Prompt) */}
        {(willRenderConfirmButton || willRenderCancelButton) && (
          <div className={styles.buttonWrapper}>
            {willRenderCancelButton && (
              <button type='button' className={styles.cancelButton} onClick={handleClose}>
                {cancelLabel}
              </button>
            )}
            {willRenderConfirmButton && <button className={styles.confirmButton}>{confirmLabel}</button>}
          </div>
        )}
      </form>
    </div>,
    $portal
  );
};

export default Modal;
