import { CSSProperties } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: 'center' | 'bottom';
  style?: CSSProperties;
}
