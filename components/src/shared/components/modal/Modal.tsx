import { createPortal } from 'react-dom';
import { bottom, center, ModalLayout } from './Modal.css';
import { PropsWithChildren, useId } from 'react';
import useEscapeModal from '../../../hooks/useEscapeModal';

interface ModalProps extends PropsWithChildren {
  closeModal: () => void;
  position?: 'center' | 'bottom';
  maxWidth?: number;
}

function Modal(props: ModalProps) {
  const {
    children,
    closeModal,
    position = 'center',
    maxWidth = 500,
    ...rest
  } = props;
  const id = useId();

  const { handleClickOverlay } = useEscapeModal(closeModal);

  return (
    <div>
      {createPortal(
        <div
          css={ModalLayout}
          id={id}
          onClick={(e) => handleClickOverlay(e, id)}
        >
          <div
            css={position === 'center' ? center(maxWidth) : bottom(maxWidth)}
            {...rest}
          >
            {children}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Modal;
