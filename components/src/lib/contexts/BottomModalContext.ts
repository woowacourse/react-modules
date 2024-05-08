import { createContext } from 'react';

export interface BottomModalContextType {
  handleCloseModal: () => void;
}

const BottomModalContext = createContext<BottomModalContextType | null>(null);

export default BottomModalContext;
