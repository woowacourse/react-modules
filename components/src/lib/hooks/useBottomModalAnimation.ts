import { useLayoutEffect, useState } from 'react';

import { BASIC_BOTTOM_FADE_IN_TIME } from '../constants/modal';
import calculateTimeout from '../utils/timeoutCalculator';

export interface UseBottomModalAnimationProps {
  openModal: boolean;
  isNeedAnimation: boolean | undefined;
  animationDuration: number;
  closeModal: () => void;
}

export default function useBottomModalAnimation({
  openModal,
  closeModal,
  isNeedAnimation,
  animationDuration,
}: UseBottomModalAnimationProps) {
  const [isOn, setIsOn] = useState(false);
  const timeout = calculateTimeout({ isNeedAnimation, animationDuration });

  const fadeOutModal = () => {
    setIsOn(false);
    setTimeout(() => {
      closeModal();
    }, timeout);
  };

  useLayoutEffect(() => {
    const fadeIn = setTimeout(() => {
      setIsOn(true);
    }, BASIC_BOTTOM_FADE_IN_TIME);

    return () => {
      clearTimeout(fadeIn);
      setIsOn(false);
    };
  }, [openModal]);

  return { isOn, fadeOutModal, timeout };
}
