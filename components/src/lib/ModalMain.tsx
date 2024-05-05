import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import useAnimation from './useAnimation';

const MODAL_WRAPPER_TYPE: Record<ModalPosition, string> = {
  center: styles.modalWrapper,
  bottom: styles.modalBottomWrapper,
};

const MODAL_TYPE: Record<ModalPosition, string> = {
  center: styles.modal,
  bottom: styles.modalBottom,
};

type ModalPosition = 'center' | 'bottom';

interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: ModalPosition;
  isAnimation?: boolean;
  duration?: number;
}

const ModalMain = ({
  isOpen,
  position = 'center',
  isAnimation = false,
  duration,
  style,
  children,
  ...rest
}: PropsWithChildren<ModalMainProps>) => {
  const { mounted, modalAnimationClass } = useAnimation({
    isAnimation,
    isOpen,
    position,
    delay: duration,
  });

  const modalClass = isAnimation ? modalAnimationClass : MODAL_TYPE[position];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={MODAL_WRAPPER_TYPE[position]}>
          <div
            className={modalClass}
            style={{ animationDuration: `${duration}ms`, ...style }}
            {...rest}
          >
            {children}
          </div>
        </div>,

        document.body,
      )}
    </>
  );
};

export default ModalMain;
