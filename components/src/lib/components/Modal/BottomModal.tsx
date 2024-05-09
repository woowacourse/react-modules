import { MouseEvent, useEffect } from 'react';
import styled from 'styled-components';

import { BASIC_BORDER_RADIUS, BASIC_BOTTOM_MODAL_ANIMATION_DURATION } from '../../constants/modal';
import { BottomModalContext } from '../../contexts';
import { useBottomModalAnimation, useModalContext } from '../../hooks';
import { BottomModalProps, ModalButtonProps } from '../../types/modal';
import ModalContainer from '../ModalContainer';
import { ModalContents, ModalContentsStyleProps } from '../ModalContainer/Contents';
import calculateTimeout from '../../utils/timeoutCalculator';

const BottomModalContents = styled(ModalContents)<ModalContentsStyleProps>`
  max-width: 100vw;
  min-height: 50px;
  position: fixed;
  bottom: 0;
  transform: translateY(${({ $isOn }) => ($isOn ? '0' : '100%')});
  transition: transform ${({ $timeout }) => $timeout}ms ease;
  border-radius: 0;
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  border-top-left-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  width: 100%;
  box-sizing: border-box;
`;

function BottomModal(props: BottomModalProps) {
  const { setOpenModal, children, ...rest } = props;
  const {
    isNeedAnimation = true,
    animationDuration = BASIC_BOTTOM_MODAL_ANIMATION_DURATION,
    borderRadius,
    backgroundColor,
    contentsPadding,
    openModal,
  } = rest;
  const closeModal = () => setOpenModal(false);

  const { isOn, fadeOutModal, timeout } = useBottomModalAnimation({
    isNeedAnimation,
    animationDuration,
    closeModal,
    openModal,
  });

  return (
    <ModalContainer {...rest} closeModal={closeModal}>
      <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
        <ModalContainer.Backdrop handleCloseModal={fadeOutModal} />
        <BottomModalContents
          $isOn={isOn}
          $timeout={timeout}
          $borderRadius={borderRadius}
          $backgroundColor={backgroundColor}
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
