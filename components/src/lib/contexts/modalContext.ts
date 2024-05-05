import { createContext } from 'react';

import { ModalPosition } from '../types/modal';

export interface ModalContextType {
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
  animationDuration?: number;
  isNeedAnimation?: boolean;
  position?: ModalPosition;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
