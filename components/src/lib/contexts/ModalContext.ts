import { createContext, useContext } from "react";

const ModalContext = createContext<(() => void) | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("에러!!");
  return context;
};

export default ModalContext;
