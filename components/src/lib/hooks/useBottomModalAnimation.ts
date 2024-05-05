import { useLayoutEffect, useState } from 'react';

import calculateTimeout from '../utils/timeoutCalculator';

export interface UseBottomModalAnimationProps {
  isNeedAnimation: boolean | undefined;
  animationDuration: number | undefined;
  closeModal: () => void;
}

export default function useBottomModalAnimation({
  isNeedAnimation,
  animationDuration,
  closeModal,
}: UseBottomModalAnimationProps) {
  const timeout = calculateTimeout({ isNeedAnimation, animationDuration, type: 'bottom' });

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
  }, []);

  return { isOn, fadeOutModal, timeout };
}
