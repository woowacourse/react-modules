import { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  BASIC_BACK_DROP_BACKGROUND_COLOR,
  BASIC_BORDER_RADIUS,
  BASIC_MODAL_BACKGROUND_COLOR,
  BASIC_PADDING,
  BASIC_TOAST_DURATION,
} from '../constants/modal';
import ModalContext from '../contexts/ModalContext';
import { useModalContext } from '../hooks';
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
    toastDuration = BASIC_TOAST_DURATION,
    contentsPadding = BASIC_PADDING,
    borderRadius = BASIC_BORDER_RADIUS,
    backgroundColor = { modal: BASIC_MODAL_BACKGROUND_COLOR, backdrop: BASIC_BACK_DROP_BACKGROUND_COLOR },
    ...rest
  } = props;

  const closeModal = () => {
    return setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContext.Provider
            value={{
              isCloseOnBackdrop,
              isCloseOnEsc,
              closeModal,
              isNeedAnimation,
              animationDuration,
              position,
              toastDuration,
              contentsPadding,
              borderRadius,
              backgroundColor,
              type,
            }}
          >
            <ModalWrapper type={type} className={className} {...rest}>
              {type === 'bottom' && <BottomModal children={children} />}
              {type === 'center' && <CenterModal children={children} />}
              {type === 'toast' && <TostModal children={children} />}
            </ModalWrapper>
          </ModalContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

function ModalButton({ isCloseModal, children, onClick, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (isCloseModal) {
      closeModal();
    }
  };

  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}

Modal.button = ModalButton;

export default Modal;
