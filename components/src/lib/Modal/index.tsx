import { MouseEvent } from 'react';

import clsx from 'clsx';
import '../styles/reset.css';
import styles from './style.module.css';

import ModalPortal from './ModalPortal';
import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';
import CloseButtonIcon from './CloseButtonIcon';

function Modal(props: ModalProps) {
  const { isOpen, closeModal, children, type, className, ...rest } = props;

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ isOpen, closeModal, type }}>
        <Backdrop />
        <Contents className={className} {...rest}>
          {children}
        </Contents>
      </ModalContext.Provider>
    </ModalPortal>
  );
}

function Backdrop() {
  const { closeModal } = useModalContext();

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return <div className={styles.backdrop} onClick={onClick} />;
}

function Contents({ children, className, ...rest }: ModalComposedProps<HTMLDivElement>) {
  const { type, isOpen } = useModalContext();

  return (
    <div
      className={clsx(className, styles.contents, type ? styles[type] : styles.default, { [styles.open]: isOpen })}
      {...rest}
    >
      {children}
    </div>
  );
  // return <div className={styles.contents}>{children}</div>;
}

function Title(props: ModalComposedProps<HTMLHeadingElement>) {
  const { children, ...rest } = props;
  return <h2 {...rest}>{children}</h2>;
}

function CloseButton({ children, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    closeModal();
  };

  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
function CloseIconButton({ className, ...attribute }: Omit<ModalButtonProps, 'children'>) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    closeModal();
  };

  return (
    <button className={clsx(styles.closeIconButton, className)} onClick={onClick} {...attribute}>
      <CloseButtonIcon />
    </button>
  );
}

function CloseBoxButton({ children, className, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    closeModal();
  };

  return (
    <div className={styles.closeBoxButtonContainer}>
      <button className={clsx(styles.closeBoxButton, className)} onClick={onClick} {...rest}>
        {children}
      </button>
    </div>
  );
}

function ActionAndCloseButton<A extends Function>({
  children,
  extraAction,
  className,
  ...rest
}: ActionAndCloseButtonProps<A>) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    if (extraAction) extraAction();
    closeModal();
  };

  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Modal.Contents = Contents;
Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.CloseIconButton = CloseIconButton;
Modal.CloseBoxButton = CloseBoxButton;
Modal.ActionAndCloseButton = ActionAndCloseButton;

export default Modal;
