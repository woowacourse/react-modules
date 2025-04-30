import { ReactNode } from "react";

import { StyledModalFooter } from "./ModalFooter.styled";

export interface ModalFooterProps {
  children: ReactNode;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
}

const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
};

export default ModalFooter;
