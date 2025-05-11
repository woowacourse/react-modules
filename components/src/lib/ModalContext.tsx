import { createContext, useContext, ReactNode } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  width: 'small' | 'medium' | 'large';
  onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('');
  }
  return context;
};

interface ModalProviderProps extends ModalContextProps {
  children: ReactNode;
}

export const ModalProvider = ({ children, ...props }: ModalProviderProps) => {
  return <ModalContext.Provider value={props}>{children}</ModalContext.Provider>;
};
