import { BASIC_BOTTOM_MODAL_ANIMATION_DURATION, BASIC_TOAST_MODAL_ANIMATION_DURATION, NOW } from '../constants/modal';
import { ModalType } from '../types/modal';

interface Props {
  isNeedAnimation?: boolean;
  animationDuration: number | undefined;
  type: ModalType;
}

export default function calculateTimeout({ isNeedAnimation, animationDuration, type }: Props) {
  if (type === 'bottom') return isNeedAnimation ? animationDuration || BASIC_BOTTOM_MODAL_ANIMATION_DURATION : NOW;

  if (type === 'toast') return animationDuration || BASIC_TOAST_MODAL_ANIMATION_DURATION;

  return BASIC_TOAST_MODAL_ANIMATION_DURATION;
}
