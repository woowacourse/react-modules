import { createContext } from 'react';

export interface ModalContextType {
  isOpen: boolean;
  closeModal: () => void;
  type: ModalType;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
