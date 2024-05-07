import { createContext } from 'react';

export interface ModalContextType {
  isModalOpen: boolean;
  closeModal: () => void;
  position: ModalPosition;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
