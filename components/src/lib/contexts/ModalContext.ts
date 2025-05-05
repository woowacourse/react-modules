import { createContext, useContext } from "react";

interface ModalContextType {
  onHide: () => void;
}

const ModalContext = createContext<ModalContextType>({
  onHide: () => {
    throw new Error("ModalContext must be used within a ModalProvider");
  },
});

export const useModalContext = () => {
  const { onHide } = useContext(ModalContext);
  return { onHide };
};

export default ModalContext;
