export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export type Direction = 'row' | 'column';
export type Position = 'center' | 'bottom';
export type BackDropType = 'transparent' | 'blur' | 'opaque';
export type Size = 'sm' | 'md' | 'lg';

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  position?: Position;
  backdropType?: BackDropType;
  size?: Size;
}

export interface ModalFooterProps {
  direction?: Direction;
}
