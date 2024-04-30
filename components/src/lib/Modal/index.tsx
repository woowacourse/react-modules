import { ReactNode, MouseEvent } from 'react';

import clsx from 'clsx';
import styles from './style.module.css';

import Portal from './Portal';
import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';
import '../styles/reset.css';
function Modal(props: ModalProps) {
  const { isOpen, closeModal, children, type, ...rest } = props;

  return (
    <Portal>
      <ModalContext.Provider value={{ isOpen, closeModal }}>
        <div
          className={clsx(styles.modal, {
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

function CloseButton<A extends Function>({ children, extraAction, ...rest }: CloseButtonProps<A>) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    if (extraAction) extraAction();
    closeModal();
  };

  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
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

export default Modal;
