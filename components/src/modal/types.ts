import { CSSProperties } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: ModalPositionType;
  size?: ModalSizeType;
  style?: CSSProperties;
}

export type ModalPositionType = 'center' | 'bottom';
export type ModalSizeType = 'small' | 'medium' | 'large';
