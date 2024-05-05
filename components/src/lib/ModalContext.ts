import { createContext, useContext, CSSProperties } from "react";

export type ModalContextType = {
  isOpen: boolean;
  onClose: (event: React.SyntheticEvent) => void;
  modalContainerStyle: CSSProperties;
  className: string;
  style: CSSProperties;
  mountAnimation: string;
  unMountAnimation: string;
  position: "center" | "bottom";
};

const defaultContext: Partial<ModalContextType> = {
  isOpen: false,
  modalContainerStyle: {},
  className: "",
  style: {},
  onClose: (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  },
  mountAnimation: "",
  unMountAnimation: "",
  position: "center",
};

export const ModalContext =
  createContext<Partial<ModalContextType>>(defaultContext);

export const useModal = () => useContext(ModalContext);
