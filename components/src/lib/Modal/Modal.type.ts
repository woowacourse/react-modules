export type Direction = 'row' | 'column';
export type Position = 'center' | 'bottom' | 'top';
export type BackDropType = 'transparent' | 'blur' | 'opaque';
export type Size = 'sm' | 'md' | 'lg';

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  position?: Position;
  backdropType?: BackDropType;
  size?: Size;
  shadow?: boolean;
}

export interface ModalFooterProps {
  direction?: Direction;
}
