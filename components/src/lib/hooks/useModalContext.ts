import { createContext, useContext } from "react";

export const ModalContext = createContext<{ onClose: () => void }>({
  onClose: () => {},
});

export function useModalContext() {
  const context = useContext(ModalContext);

  return context;
}
