import { NOW } from '../constants/modal';

interface Props {
  isNeedAnimation?: boolean;
  animationDuration: number;
}

export default function calculateTimeout({ isNeedAnimation, animationDuration }: Props) {
  return isNeedAnimation ? animationDuration : NOW;
}
