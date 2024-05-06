import { useEffect, useLayoutEffect, useState } from 'react';

import { BASIC_TOAST_DURATION } from '../constants/modal';
import calculateTimeout from '../utils/timeoutCalculator';

import useModalContext from './useModalContext';

export default function useToastModalAnimation() {
  const { closeModal, animationDuration, position, isNeedAnimation, toastDuration } = useModalContext();
  const [isOn, setIsOn] = useState(true);
  /**
   * 토스트 모달이 등장,퇴장 시 opacity 전환 속도
   */
  const timeout = calculateTimeout({ isNeedAnimation, animationDuration, type: 'toast' });
  /**
   * 토스트 모달이 닫히는 시간
   */
  const fadeOutTimeout = toastDuration || BASIC_TOAST_DURATION;

  const fadeOutModal = () =>
    setTimeout(() => {
      setIsOn(false);
    }, fadeOutTimeout - timeout);

  const setTimeoutToCloseModal = () =>
    setTimeout(() => {
      closeModal();
    }, fadeOutTimeout);

  useEffect(() => {
    if (!position) {
      throw new Error('position을 지정해주세요.');
    }
  }, [position]);

  useLayoutEffect(() => {
    const fadeOutTimer = fadeOutModal();
    const closeModalTimer = setTimeoutToCloseModal();

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeModalTimer);
    };
  }, []);

  return { isOn, position, timeout };
}
