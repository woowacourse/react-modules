import { ReactNode } from 'react';

type Position = 'center' | 'bottom';

interface ActionDef {
  label: string;
  style: string;
  onClick: () => void;
}

interface ModalProps {
  position: Position;
  content: ReactNode;
  onClose: () => void;
  onOpen?: () => void;
  title?: string;
  showCloseButton?: boolean;
  actions?: ActionDef[];
}

export type { Position, ActionDef, ModalProps };
