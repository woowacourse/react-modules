import { ReactNode } from "react";
import { StyledModalHeader } from "./ModalHeader.styled";

export interface ModalHeaderProps {
  children: ReactNode;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
}

const ModalHeader = ({ children, ...props }: ModalHeaderProps) => {
  return <StyledModalHeader {...props}>{children}</StyledModalHeader>;
};

export default ModalHeader;
