import type { Size } from '../types/common';

export type Direction = 'row' | 'column';
export type Position = 'center' | 'bottom' | 'top';
export type BackDropType = 'transparent' | 'blur' | 'opaque';

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  position?: Position;
  backdropType?: BackDropType;
  size?: Size;
  shadow?: boolean;
  animation?: boolean;
}

export interface ModalFooterProps {
  direction?: Direction;
}
