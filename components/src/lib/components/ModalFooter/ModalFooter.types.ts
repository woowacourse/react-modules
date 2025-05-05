import { ReactNode } from "react";

export interface ModalFooterProps {
  children: ReactNode;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
}
