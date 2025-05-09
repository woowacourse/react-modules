import { ReactNode } from 'react';

type Position = 'center' | 'bottom';
type ModalType = 'confirm' | 'alert' | 'prompt';
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  position: Position;
  onClose: () => void;
  onAfterOpen?: () => void;
  title?: string;
  showCloseButton?: boolean;
  type?: ModalType;
}

export type { Position, ModalProps };
