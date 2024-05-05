import { PropsWithChildren } from "react";
import { ModalContext, ModalContextType } from "./ModalContext";

export const ModalProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextType }>) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
