import { createContext } from 'react';

import { ModalOptions } from '../types/modal';

export interface ModalContextType extends ModalOptions {
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
