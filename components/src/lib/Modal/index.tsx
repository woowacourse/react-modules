import { ReactNode, useEffect, useState, MouseEvent } from 'react';
import { createContext, useContext } from 'react';

import clsx from 'clsx';
import styles from './style.module.css';

import Portal from './Portal';
import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';

type ModalType = 'center' | 'bottom' | 'toast';

interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  children: ReactNode;
  type: ModalType;
  toastDuration?: number;
}
function Modal(props: ModalProps) {
  const { isOpen, children, type, toastDuration, ...rest } = props;

  const [open, setOpen] = useState(isOpen);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <Portal>
      <ModalContext.Provider value={{ open, closeModal, openModal }}>
        <div
          className={clsx(styles.modal, {
            [styles[type]]: type,
            [styles.open]: open,
          })}
          {...rest}
        >
          {children}
        </div>
      </ModalContext.Provider>
    </Portal>
  );
}

function Header({ children }: { children: ReactNode }) {
  return <div className={styles.header}>{children}</div>;
}

function Title({ children }: { children: ReactNode }) {
  return <h2 className={styles.title}>{children}</h2>;
}

function Body({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}

function CloseButton<A extends Function>({ children, extraAction }: { children: ReactNode; extraAction?: A }) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    if (extraAction) extraAction();
    closeModal();
  };

  return (
    <button className={styles.closeButton} onClick={onClick}>
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

  return <div className={styles.backdrop} onClick={onClick}></div>;
}

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.CloseButton = CloseButton;
Modal.Backdrop = Backdrop;

export default Modal;
