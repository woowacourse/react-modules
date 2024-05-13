import { createContext } from 'react';

import { ModalContainerProps } from '../types/modal';

interface ModalContainerContextType extends Omit<ModalContainerProps, 'children' | 'openModal' | 'modalTargetEl'> {}
/**
 * ModalContainer의 내부에서 ModalContainer의 props를 쓸 수 있도록 하는 context
 */
const ModalContainerContext = createContext<ModalContainerContextType | null>(null);

export default ModalContainerContext;
