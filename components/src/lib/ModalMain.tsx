import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import useAnimation from './useAnimation';
import ModalDimmed from './modalDimmed/ModalDimmed';
import ModalHeader from './modalHeader/ModalHeader';
import ModalTitle from './modalTitle/ModalTitle';
import ModalCloseIcon from './modalCloseIcon/ModalCloseIcon';
import ModalContent from './modalContent/ModalContent';
import CloseButton from './closeButton/CloseButton';
import ConfirmButton from './confirmButton/ConfirmButton';
import ModalFooter from './modalFooter/ModalFooter';

type ModalPosition = 'center' | 'bottom';
type ModalSize = 'small' | 'medium' | 'large';

const MODAL_WRAPPER_TYPE: Record<ModalPosition, string> = {
  center: styles.modalWrapper,
  bottom: styles.modalBottomWrapper,
};

const MODAL_TYPE: Record<ModalPosition, string> = {
  center: styles.modal,
  bottom: styles.modalBottom,
};

const MODAL_SIZE: Record<ModalSize, string> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  size?: ModalSize;
  position?: ModalPosition;
  isAnimation?: boolean;
  animationDuration?: number;
}

const ModalMain = ({
  isOpen,
  size,
  position = 'center',
  isAnimation = false,
  animationDuration,
  style,
  children,
  ...rest
}: PropsWithChildren<ModalMainProps>) => {
  const { mounted, modalAnimationClass } = useAnimation({
    isAnimation,
    isOpen,
    position,
    delay: animationDuration,
  });

  const modalClass = isAnimation ? modalAnimationClass : MODAL_TYPE[position];
  const modalWrapperClass = MODAL_WRAPPER_TYPE[position];
  const modalSizeClass = size ? MODAL_SIZE[size] : '';

  if (!mounted) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={`${modalWrapperClass} ${modalSizeClass}`} style={style}>
          <div
            className={modalClass}
            style={{ animationDuration: `${animationDuration}ms` }}
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

const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
  Title: ModalTitle,
  CloseIcon: ModalCloseIcon,
  Content: ModalContent,
  CloseButton: CloseButton,
  ConfirmButton: ConfirmButton,
  Footer: ModalFooter,
});

export default Modal;
