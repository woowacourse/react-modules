import { createContext } from 'react';

export interface CenterModalContextType {
  closeModal: () => void;
}

const CenterModalContext = createContext<CenterModalContextType | null>(null);

export default CenterModalContext;
