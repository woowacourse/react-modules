import { MouseEvent, useMemo } from 'react';

import clsx from 'clsx';
import styles from './style.module.css';

import ModalPortal from './ModalPortal';
import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';
import CloseButtonIcon from './CloseButtonIcon';

function Modal({ isModalOpen, closeModal, children, position, className, ...attribute }: ModalProps) {
  const contextValue = useMemo(() => ({ isModalOpen, closeModal, position }), [isModalOpen, closeModal, position]);

  if (!isModalOpen) return null;
  return (
    <ModalContext.Provider value={contextValue}>
      <ModalPortal>
        <Backdrop />
        <Contents className={className} {...attribute}>
          {children}
        </Contents>
      </ModalPortal>
    </ModalContext.Provider>
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

function Contents({ children, className, ...attribute }: ModalComposedProps<HTMLDivElement>) {
  const { position } = useModalContext();

  return (
    <div className={clsx(className, styles.contents, position ? styles[position] : styles.default)} {...attribute}>
      {children}
    </div>
  );
}

function Title({ children, ...attribute }: ModalComposedProps<HTMLHeadingElement>) {
  return (
    <h2 className={styles.title} {...attribute}>
      {children}
    </h2>
  );
}

function CloseButton({ children, buttonType, className, ...attribute }: ModalButtonProps) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    closeModal();
  };

  return (
    <button
      onClick={onClick}
      className={clsx(className, buttonType ? styles[buttonType] : styles.defaultCloseButton)}
      {...attribute}
    >
      {buttonType === 'box' ? children : <CloseButtonIcon />}
    </button>
  );
}

function Button<A extends Function>({
  children,
  action,
  closeAfterAction = false,
  className,
  ...attribute
}: ActionButtonProps<A>) {
  const { closeModal } = useModalContext();

  const onClick = () => {
    if (action) action();
    if (closeAfterAction) closeModal();
  };

  return (
    <button className={clsx(className, styles.button)} onClick={onClick} {...attribute}>
      {children}
    </button>
  );
}

Modal.Contents = Contents;
Modal.Title = Title;
Modal.Button = Button;
Modal.CloseButton = CloseButton;

export default Modal;
