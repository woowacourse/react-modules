import { ReactNode } from "react";

import { useModal } from "../ModalRoot";

import { StyledModalClose } from "./ModalClose.styled";

export interface CloseProps {
  children: ReactNode;
}

const ModalClose = ({ children }: CloseProps) => {
  const { close } = useModal();

  return <StyledModalClose onClick={close}>{children}</StyledModalClose>;
};

export default ModalClose;
