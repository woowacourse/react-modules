import { createContext } from 'react';

import { ModalCommonProps } from '../types/modal';

export interface ModalContainerContext extends Omit<ModalCommonProps, 'children' | 'openModal' | 'setOpenModal'> {
  closeModal: () => void;
}

const ModalContainerContext = createContext<ModalContainerContext | null>(null);

export default ModalContainerContext;
