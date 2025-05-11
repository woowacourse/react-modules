import { ReactNode } from 'react';

type Position = 'center' | 'bottom';
type ModalType = 'confirm' | 'alert' | 'prompt';
type ModalSize = 'small' | 'medium' | 'large';
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  position: Position;
  size: ModalSize;
  onClose: () => void;
  onAfterOpen?: () => void;
  showCloseButton?: boolean;
  showDefaultCancelButton?: boolean;
  showDefaultConfirmButton?: boolean;
  type?: ModalType;
}

export type { Position, ModalProps, ModalSize };
