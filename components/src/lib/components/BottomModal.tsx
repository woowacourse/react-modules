import { MouseEvent } from 'react';
import styled from 'styled-components';

import { BASIC_BOTTOM_MODAL_ANIMATION_DURATION } from '../constants/modal';
import { BottomModalContext } from '../contexts';
import { useBottomModalAnimation, useModalContext } from '../hooks';
import { BottomModalProps, ModalButtonProps } from '../types/modal';

import Backdrop from './Backdrop';
import { ModalContents, ModalContentsStyleProps } from './Contents';
import ModalContainer from './ModalContainer';

const BottomModalContents = styled(ModalContents)<ModalContentsStyleProps>`
  max-width: 100vw;
  min-height: 50px;
  position: fixed;
  bottom: 0;
  transform: translateY(${({ $isOn }) => ($isOn ? '0' : '100%')});
  transition: transform ${({ $timeout }) => $timeout}ms ease;
  border-radius: 0;
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius || '100%'};
  border-top-left-radius: ${({ $borderRadius }) => $borderRadius || '100%'};
  width: 100%;
  box-sizing: border-box;
`;

function BottomModal(props: BottomModalProps) {
  const {
    isNeedAnimation = true,
    animationDuration = BASIC_BOTTOM_MODAL_ANIMATION_DURATION,
    borderRadius,
    backgroundColor,
    contentsPadding,
    openModal,
    setOpenModal,
    children,
  } = props;

  const closeModal = () => setOpenModal(false);

  const { isOn, fadeOutModal, timeout } = useBottomModalAnimation({
    isNeedAnimation,
    animationDuration,
    closeModal,
    openModal,
  });

  return (
    <ModalContainer openModal={openModal} closeModal={fadeOutModal}>
      <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
        <Backdrop handleCloseModal={fadeOutModal} />
        <BottomModalContents
          $isOn={isOn}
          $timeout={timeout}
          $borderRadius={borderRadius}
          $modalBackgroundColor={backgroundColor?.modal}
          $contentsPadding={contentsPadding}
        >
          {children}
        </BottomModalContents>
      </BottomModalContext.Provider>
    </ModalContainer>
  );
}

function Button({ children, onClick, isCloseModal, ...rest }: ModalButtonProps) {
  const { handleCloseModal } = useModalContext(BottomModalContext);

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

BottomModal.button = Button;

export default BottomModal;
