import { CSSProperties } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: PositionType;
  size?: SizeType;
  style?: CSSProperties;
}

export type PositionType = 'center' | 'bottom';

export type SizeType = 'small' | 'medium' | 'large';
