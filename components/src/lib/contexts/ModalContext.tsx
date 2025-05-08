import { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
  isModalOpened: boolean;
  openModalHandler: () => void;
  closeModalHandler: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = () => setIsModalOpened(true);
  const closeModalHandler = () => setIsModalOpened(false);

  return (
    <ModalContext.Provider value={{ isModalOpened, openModalHandler, closeModalHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal은 ModalProvider 내부에서 사용해야 합니다');
  }

  return context;
};
