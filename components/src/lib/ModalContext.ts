import { createContext, useContext, ReactNode, CSSProperties } from "react";

export type ModalContextType = {
  isOpen: boolean;
  onClose: (event: React.SyntheticEvent) => void;
  title: string;
  position: "center" | "bottom";
  content: ReactNode;
  modalContainerStyle: CSSProperties;
  className: string;
  style: CSSProperties;
};

const defaultContext: Partial<ModalContextType> = {
  isOpen: false,
  title: "",
  position: "center",
  content: null,
  modalContainerStyle: {},
  className: "",
  style: {},
  onClose: (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  },
};

export const ModalContext =
  createContext<Partial<ModalContextType>>(defaultContext);

export const useModal = () => useContext(ModalContext);
