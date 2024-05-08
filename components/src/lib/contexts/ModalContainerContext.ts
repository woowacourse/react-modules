import { createContext } from 'react';

import { ModalContainerProps } from '../types/modal';

interface ModalContainerContextType extends Omit<ModalContainerProps, 'children' | 'openModal'> {}
const ModalContainerContext = createContext<ModalContainerContextType | null>(null);

export default ModalContainerContext;
