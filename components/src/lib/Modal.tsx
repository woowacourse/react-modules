import { createPortal } from 'react-dom';

import { PropsWithChildren, useId } from 'react';

import {
  bottom,
  center,
  CloseButton,
  ModalHeader,
  ModalLayout,
} from './Modal.css';
import useEscapeModal from './hooks/useEscapeModal';
import { closeButton } from './assets';

export interface ModalProps extends PropsWithChildren {
  closeModal: () => void;
  position?: 'center' | 'bottom';
  maxWidth?: number;
  title?: string;
  isVisibleCloseButton?: boolean;
}

function Modal(props: ModalProps) {
  const {
    children,
    closeModal,
    position = 'center',
    maxWidth = 500,
    title,
    isVisibleCloseButton = true,
    ...rest
  } = props;
  const id = useId();

  const { handleClickOverlay } = useEscapeModal(closeModal);

  return (
    <section>
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
            <div css={ModalHeader}>
              {title && <h2>{title}</h2>}
              {isVisibleCloseButton && (
                <button onClick={closeModal} css={CloseButton}>
                  <img src={closeButton} alt="close" />
                </button>
              )}
            </div>
            {children}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

export default Modal;
