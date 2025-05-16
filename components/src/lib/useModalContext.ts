import { createContext, useContext } from "react";

export type Position = "center" | "bottom";

interface ModalContextType {
  onClose: () => void;
  onConfirm?: () => void;
  position: Position;
  hasTopCloseButton?: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("Modal compound components must be used inside <Modal>");
  return context;
};
