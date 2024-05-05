import clsx from 'clsx';
import { CSSProperties, MouseEvent, ReactNode, useEffect } from 'react';

import ModalContext from '../contexts/modalContext';
import useModalContext from '../hooks/useModalContext';
import '../styles/reset.css';
import { ModalButtonProps, ModalProps } from '../types/modal';

import BottomModal from './BottomModal';
import CenterModal from './CenterModal';
import ModalPortal from './ModalPortal';
import styles from './style.module.css';
function Modal(props: ModalProps) {
  const {
    openModal,
    setOpenModal,
    children,
    type,
    isCloseOnBackdrop = true,
    isCloseOnEsc = true,
    animationDuration,
    isNeedAnimation = type === 'bottom' ? true : false,
    className,
    position,
    ...rest
  } = props;

  const closeModal = () => {
    if (!animationDuration) return setOpenModal(false);

    setTimeout(() => {
      setOpenModal(false);
    }, animationDuration);
  };

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContext.Provider
            value={{ isCloseOnBackdrop, isCloseOnEsc, closeModal, isNeedAnimation, animationDuration, position }}
          >
            <div
              className={clsx(className, 'modal', styles.modal, {
                [styles[type]]: type,
              })}
              {...rest}
            >
              {type === 'bottom' && <BottomModal children={children} />}
              {type === 'center' && <CenterModal children={children} />}
            </div>
          </ModalContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

function Backdrop({ closeModal }: { closeModal: () => void }) {
  const { isCloseOnBackdrop, isCloseOnEsc } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!isCloseOnBackdrop) return;
    const { target } = e;

    if (!(target instanceof HTMLElement)) return;
    if (target.closest(styles.modal)) return;

    closeModal();
  };

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape' && isCloseOnEsc) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <div className={clsx(styles.backdrop, 'modal=backdrop')} onClick={handleClick} />;
}

function Contents({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={clsx(styles.contents, className, 'modal-contents')} style={style}>
      {children}
    </div>
  );
}

function ModalButton({ isCloseModal, children, handleCloseModal, onClick, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (isCloseModal) {
      handleCloseModal ? handleCloseModal() : closeModal();
    }
  };
  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}

Modal.Backdrop = Backdrop;
Modal.Contents = Contents;
Modal.button = ModalButton;

export default Modal;
