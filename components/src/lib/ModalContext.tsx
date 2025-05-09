import { createContext, PropsWithChildren, useContext } from 'react';

interface ModalContextType {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider: React.FC<PropsWithChildren<ModalContextType>> = ({ children, onClose }) => {
  return <ModalContext.Provider value={{ onClose }}>{children}</ModalContext.Provider>;
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('ModalContext must be used within a ModalProvider');
  return context;
};

export { ModalProvider, useModalContext };
