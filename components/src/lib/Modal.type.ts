import { ReactNode } from 'react';

type Position = 'center' | 'bottom';
type ModalSize = 'small' | 'medium' | 'large';
interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  position: Position;
  size: ModalSize;
  title: string;
  onClose: () => void;
  onAfterOpen?: () => void;
  onConfirm?: (value?: string) => void;
  showCloseButton?: boolean;
  showDefaultCancelButton?: boolean;
  showDefaultConfirmButton?: boolean;
}

export type { Position, ModalProps, ModalSize };
