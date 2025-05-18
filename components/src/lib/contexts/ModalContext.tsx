import { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
  isModalOpened: boolean;
  openModalHandler: () => void;
  closeModalHandler: () => void;
  onClose?: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
  onClose?: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children, onClose }: ModalProviderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = () => setIsModalOpened(true);
  const closeModalHandler = () => setIsModalOpened(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        openModalHandler,
        closeModalHandler,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext은 ModalProvider 내부에서 사용해야 합니다');
  }

  return context;
};
