import { MouseEvent } from 'react';
import styled from 'styled-components';

import { BottomModalContext } from '../../contexts';
import { useBottomModalAnimation, useBottomModalContext, useModalContext } from '../../hooks';
import { ModalButtonProps, ModalContentsProps } from '../../types/modal';

const BottomModalContents = styled.div<{ isOn: boolean; timeout: number }>`
  position: fixed;
  bottom: 0;
  transform: translateY(${({ isOn }) => (isOn ? '0' : '100%')});
  transition: transform ${({ timeout }) => timeout / 1000}s ease;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  width: 100%;
  background-color: #ffff;
  box-sizing: border-box;
`;

function BottomModal({ children }: ModalContentsProps) {
  const { handleCloseModal, animationDuration, isNeedAnimation } = useModalContext();

  const { fadeOutModal, isOn, timeout } = useBottomModalAnimation({
    isNeedAnimation,
    animationDuration,
    closeModal: handleCloseModal,
  });

  return (
    <>
      <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
        <BottomModalContents isOn={isOn} timeout={timeout}>
          {children}
        </BottomModalContents>
      </BottomModalContext.Provider>
    </>
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
