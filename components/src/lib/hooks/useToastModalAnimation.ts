import { useLayoutEffect, useState } from 'react';

import { BASIC_TOAST_DURATION, BASIC_TOAST_MODAL_ANIMATION_DURATION } from '../constants/modal';
import { AnimationProps } from '../types/modal';
import calculateTimeout from '../utils/timeoutCalculator';

interface Props extends AnimationProps {
  openModal: boolean;
  closeModal: () => void;
  toastDuration?: number;
}
export default function useToastModalAnimation(props: Props) {
  const {
    closeModal,
    animationDuration = BASIC_TOAST_MODAL_ANIMATION_DURATION,
    isNeedAnimation,
    toastDuration = BASIC_TOAST_DURATION,
    openModal,
  } = props;

  const [isOn, setIsOn] = useState(true);

  /**
   * 토스트 모달이 등장,퇴장 시 opacity 전환 시간
   */
  const timeout = calculateTimeout({ isNeedAnimation, animationDuration });

  const fadeInModal = () => {
    setIsOn(true);
  };
  const fadeOutModal = () =>
    setTimeout(() => {
      setIsOn(false);
    }, toastDuration - timeout);

  const setTimeoutToCloseModal = () =>
    setTimeout(() => {
      closeModal();
    }, toastDuration);

  useLayoutEffect(() => {
    fadeInModal();
    const fadeOutTimer = fadeOutModal();
    const closeModalTimer = setTimeoutToCloseModal();

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeModalTimer);
    };
  }, [openModal]);

  return { isOn, timeout };
}
