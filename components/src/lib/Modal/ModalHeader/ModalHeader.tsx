import { ReactNode } from "react";
import { StyledModalHeader } from "./ModalHeader.styled";

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <StyledModalHeader>
      {children}
    </StyledModalHeader>
  )
}

export default ModalHeader;
