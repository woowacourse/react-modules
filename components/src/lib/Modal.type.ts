import { ReactNode } from 'react';

type Position = 'center' | 'bottom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  position: Position;
  onClose: () => void;
  onAfterOpen?: () => void;
  title?: string;
  showCloseButton?: boolean;
}

export type { Position, ModalProps };
