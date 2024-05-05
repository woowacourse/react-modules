import { MouseEvent, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

import ModalContext from '../contexts/modalContext';
import { useBottomModalAnimation, useModalContext } from '../hooks';
import '../styles/reset.css';
import { ModalButtonProps, ModalProps, ModalType } from '../types/modal';

import BottomModal from './BottomModal';
import CenterModal from './CenterModal';
import ModalPortal from './ModalPortal';
import TostModal from './ToastModal';

const ModalWrapper = styled.div<{ type: ModalType }>`
  position: fixed;
  width: 100vw;
  height: 100vh;

  ${({ type }) =>
    type === 'center' &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `}

  ${({ type }) =>
    type === 'bottom' &&
    `
    display: block;
    width: 100%;
  `}

  ${({ type }) =>
    type === 'toast' &&
    `
    width: fit-content;
    height: fit-content;
  `}
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.35;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const ModalContents = styled.div`
  @media screen and (max-width: 435px) {
    min-width: 80vw;
  }
`;

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
    return setOpenModal(false);
  };

  const { fadeOutModal } = useBottomModalAnimation({ isNeedAnimation, animationDuration, closeModal });

  const handleCloseModal = () => {
    if (type == 'bottom') return fadeOutModal();
    return closeModal();
  };

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContext.Provider
            value={{
              isCloseOnBackdrop,
              isCloseOnEsc,
              handleCloseModal,
              isNeedAnimation,
              animationDuration,
              position,
            }}
          >
            <ModalWrapper type={type} className={className} {...rest}>
              {type !== 'toast' && <Modal.Backdrop />}
              <Modal.Contents>
                {type === 'bottom' && <BottomModal children={children} />}
                {type === 'center' && <CenterModal children={children} />}
                {type === 'toast' && <TostModal children={children} />}
              </Modal.Contents>
            </ModalWrapper>
          </ModalContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

function Backdrop() {
  const { isCloseOnBackdrop, isCloseOnEsc, handleCloseModal } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!isCloseOnBackdrop) return;
    const { target } = e;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('.modal-contents')) return;
    handleCloseModal();
  };

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape' && isCloseOnEsc) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <ModalBackdrop className="modal-backdrop" onClick={handleClick} />;
}

function Contents({ children }: { children: ReactNode; className?: string }) {
  return <ModalContents className="modal-contents">{children}</ModalContents>;
}

function ModalButton({ isCloseModal, children, onClick, ...rest }: ModalButtonProps) {
  const { handleCloseModal } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (isCloseModal) {
      handleCloseModal();
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
