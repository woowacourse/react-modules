import { ReactNode, MouseEvent } from 'react';

import clsx from 'clsx';
import styles from './style.module.css';

import Portal from './Portal';
import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';
import '../styles/reset.css';
import CloseButtonIcon from './CloseButtonIcon';
function Modal(props: ModalProps) {
  const { isOpen, closeModal, children, type, className, ...rest } = props;

  return (
    <Portal>
      <ModalContext.Provider value={{ isOpen, closeModal }}>
        <div
          className={clsx(className, styles.modal, {
            [styles[type]]: type && isOpen,
          })}
          {...rest}
        >
          <Backdrop />
          <Contents>{children}</Contents>
        </div>
      </ModalContext.Provider>
    </Portal>
  );
}

function Header(props: ModalComposedProps<HTMLDivElement>) {
  const { children, ...rest } = props;
  return <div {...rest}>{props.children}</div>;
}

function Title(props: ModalComposedProps<HTMLHeadingElement>) {
  const { children, ...rest } = props;
  return <h2 {...rest}>{children}</h2>;
}

function Body(props: ModalComposedProps<HTMLDivElement>) {
  const { children, ...rest } = props;
  return <div {...rest}>{props.children}</div>;
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


function Backdrop() {
  const { closeModal } = useModalContext();

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest(styles.modal)) return;

    closeModal();
  };

  return <div className={styles.backdrop} onClick={onClick} />;
}

function Contents({ children }: { children: ReactNode }) {
  return <div className={styles.contents}>{children}</div>;
}

Modal.Contents = Contents;
Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.CloseButton = CloseButton;
Modal.CloseIconButton = CloseIconButton;
Modal.CloseBoxButton = CloseBoxButton;

export default Modal;
