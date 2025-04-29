import { createPortal } from 'react-dom';
import { ModalContainer, ModalLayout } from './Modal.css';
import { PropsWithChildren, useEffect, useId } from 'react';

interface ModalProps extends PropsWithChildren {
  closeModal: () => void;
}

function Modal(props: ModalProps) {
  const { children, closeModal, ...rest } = props;
  const id = useId();

  function handleClickOverlay(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target instanceof HTMLElement && e.target.id === id) {
      closeModal();
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <div>
      {createPortal(
        <div css={ModalLayout} id={id} onClick={handleClickOverlay}>
          <div css={ModalContainer} {...rest}>
            {children}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Modal;
