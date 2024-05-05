import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const MODAL_TYPE: Record<ModalPosition, string> = {
  center: styles.modal,
  bottom: styles.modalBottom,
};

type ModalPosition = 'center' | 'bottom';

interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: ModalPosition;
}

const ModalMain = ({
  isOpen,
  position = 'center',
  style,
  children,
  ...rest
}: PropsWithChildren<ModalMainProps>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={MODAL_TYPE[position]} style={style} {...rest}>
          {children}
        </div>,
        document.body,
      )}
    </>
  );
};

export default ModalMain;
