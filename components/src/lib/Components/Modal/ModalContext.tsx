import { createContext } from "react";

export interface ModalContextType {
  onClose: () => void;
  position: "bottom" | "center";
}

export const ModalContext = createContext<ModalContextType | null>(null);
