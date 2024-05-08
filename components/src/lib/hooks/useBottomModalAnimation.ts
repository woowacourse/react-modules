import { useLayoutEffect, useState } from 'react';

import calculateTimeout from '../utils/timeoutCalculator';

export interface UseBottomModalAnimationProps {
  openModal: boolean;
  isNeedAnimation: boolean | undefined;
  animationDuration: number;
  closeModal: () => void;
}

export default function useBottomModalAnimation({
  openModal,
  isNeedAnimation,
  animationDuration,
  closeModal,
}: UseBottomModalAnimationProps) {
  const timeout = calculateTimeout({ isNeedAnimation, animationDuration });

  const [isOn, setIsOn] = useState(false);

  const fadeOutModal = () => {
    setIsOn(false);
    setTimeout(() => {
      closeModal();
    }, timeout);
  };

  const fadeInModal = () =>
    setTimeout(() => {
      setIsOn(true);
    }, timeout);

  useLayoutEffect(() => {
    const timer = fadeInModal();
    return () => {
      clearTimeout(timer);
    };
  }, [openModal]);

  return { isOn, fadeOutModal, timeout };
}
