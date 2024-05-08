import { createContext, useContext, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext는 반드시 ModalProvider와 함께 쓰여야합니다.");
  }
  return context;
};
