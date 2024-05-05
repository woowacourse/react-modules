import { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { useModalContext } from '../../hooks/';
import { ModalContentsProps, ModalPosition } from '../../types/modal';
import calculateTimeout from '../../utils/timeoutCalculator';

const ToastModalContents = styled.div<{ $position: undefined | ModalPosition; $timeout: number; $isOn: boolean }>`
  position: fixed;
  opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
  transition: opacity ${({ $timeout }) => $timeout / 1000}s ease;
  text-align: center;
  ${({ $position }) =>
    $position &&
    `
      top: ${$position.top}px;
      right: ${$position.right}px;
      bottom: ${$position.bottom}px;
      left: ${$position.left}px;
    `}
`;

function ToastModal({ children }: ModalContentsProps) {
  const { handleCloseModal, animationDuration, position, isNeedAnimation } = useModalContext();
  const timeout = calculateTimeout({ animationDuration, type: 'toast' });
  const [isOn, setIsOn] = useState(true);

  const fadeInModal = () => {
    if (!isNeedAnimation) return;
    setTimeout(() => {
      setIsOn(false);
    }, timeout);
  };

  const fadeOutModal = () =>
    setTimeout(() => {
      handleCloseModal();
    }, timeout);

  useEffect(() => {
    if (!position) {
      throw new Error('position을 지정해주세요.');
    }
  }, [position]);

  useLayoutEffect(() => {
    fadeInModal();
    const timer = fadeOutModal();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ToastModalContents $position={position} $timeout={timeout} $isOn={isOn}>
      {children}
    </ToastModalContents>
  );
}

export default ToastModal;
