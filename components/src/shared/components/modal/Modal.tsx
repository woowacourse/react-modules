import { createPortal } from 'react-dom';
import { ModalContainer, ModalLayout } from './Modal.css';
import { PropsWithChildren } from 'react';

function Modal(props: PropsWithChildren) {
  const { children, ...rest } = props;

  return (
    <>
      {createPortal(
        <div css={ModalLayout}>
          <div css={ModalContainer} {...rest}>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
