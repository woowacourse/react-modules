import { HTMLAttributes } from 'react';
import type { Size } from '../../type/common';

export type Direction = 'row' | 'column';
export type Position = 'center' | 'bottom' | 'top';
export type BackDropType = 'transparent' | 'blur' | 'opaque';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  close: () => void;
  position?: Position;
  backdropType?: BackDropType;
  size?: Size;
  shadow?: boolean;
  animation?: boolean;
  zIndex?: number;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  direction?: Direction;
  position?: 'left' | 'right' | 'center';
}

export interface ModalHeaderType extends HTMLAttributes<HTMLElement> {}
export interface ModalBodyType extends HTMLAttributes<HTMLElement> {}
