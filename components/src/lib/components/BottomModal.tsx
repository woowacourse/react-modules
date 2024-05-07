import { MouseEvent } from 'react';
import styled from 'styled-components';

import { BASIC_BACKGROUND_COLOR, BASIC_BORDER_RADIUS, BASIC_BOTTOM_MODAL_ANIMATION_DURATION } from '../constants/modal';
import { BottomModalContext } from '../contexts';
import { useBottomModalAnimation, useModalContext } from '../hooks';
import { BottomModalProps, ModalButtonProps } from '../types/modal';

import Backdrop from './Backdrop';
import ModalContainer from './ModalContainer';

interface StyleProps {
  $isOn: boolean;
  $timeout: number;
  $borderRadius: string | undefined;
  $modalBackgroundColor: string | undefined;
  $contentsPadding: string | undefined;
}

const BottomModalContents = styled.div<StyleProps>`
  position: fixed;
  bottom: 0;
  transform: translateY(${({ $isOn }) => ($isOn ? '0' : '100%')});
  transition: transform ${({ $timeout }) => $timeout}ms ease;
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius || '100%'};
  border-top-left-radius: ${({ $borderRadius }) => $borderRadius || '100%'};
  -webkit-box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.19);
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ $modalBackgroundColor }) => $modalBackgroundColor || 'transparent'};
  padding: ${({ $contentsPadding }) => $contentsPadding};

  @media screen and (max-width: 435px) {
    min-width: 80vw;
  }
`;

function BottomModal(props: BottomModalProps) {
  const {
    isNeedAnimation = true,
    animationDuration = BASIC_BOTTOM_MODAL_ANIMATION_DURATION,
    borderRadius = BASIC_BORDER_RADIUS,
    backgroundColor = BASIC_BACKGROUND_COLOR,
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
