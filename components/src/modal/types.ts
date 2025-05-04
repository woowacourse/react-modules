import { CSSProperties } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: ModalPositionType;
  style?: CSSProperties;
}

export type ModalPositionType = 'center' | 'bottom';
