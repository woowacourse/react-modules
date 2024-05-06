import { MouseEvent } from 'react';
import styled from 'styled-components';

import { CONTENTS_CLASS_NAME } from '../constants/modal';
import { BottomModalContext } from '../contexts';
import { useBottomModalAnimation, useBottomModalContext, useModalContext } from '../hooks';
import { ModalButtonProps, ModalContentsProps } from '../types/modal';

import Backdrop from './Backdrop';

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
  transition: transform ${({ $timeout }) => $timeout / 1000}s ease;
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

function BottomModal({ children }: ModalContentsProps) {
  const { isNeedAnimation, animationDuration, closeModal, borderRadius, backgroundColor, contentsPadding } =
    useModalContext();

  const { isOn, fadeOutModal, timeout } = useBottomModalAnimation({ isNeedAnimation, animationDuration, closeModal });

  return (
    <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
      <Backdrop handleCloseModal={fadeOutModal} />
      <BottomModalContents
        className={CONTENTS_CLASS_NAME}
        $isOn={isOn}
        $timeout={timeout}
        $borderRadius={borderRadius}
        $modalBackgroundColor={backgroundColor?.modal}
        $contentsPadding={contentsPadding}
      >
        {children}
      </BottomModalContents>
    </BottomModalContext.Provider>
  );
}

function Button({ children, onClick, isCloseModal, ...rest }: ModalButtonProps) {
  const { handleCloseModal } = useBottomModalContext();

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
