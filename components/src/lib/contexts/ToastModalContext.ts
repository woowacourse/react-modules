import { createContext } from 'react';

import { ToastModalProps } from '../types/modal';

interface TostModalContextType extends Omit<ToastModalProps, 'children' | 'openModal' | 'setOpenModal' | 'children'> {}
const ToastModalContext = createContext<TostModalContextType | null>(null);

export default ToastModalContext;
