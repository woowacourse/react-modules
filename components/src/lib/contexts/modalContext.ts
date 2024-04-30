import { createContext } from 'react';

interface ModalContextType {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
