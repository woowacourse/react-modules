import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal은 항상 ModalRoot 안에서 사용해야 합니다.");
  }

  return context;
};

const ModalRoot = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalRoot;
