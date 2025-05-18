import { ReactNode } from "react";

import { useModal } from "../ModalRoot";

import { StyledModalTrigger } from "./ModalTrigger.styled";

export interface OpenButtonProps {
  children: ReactNode;
}

const ModalOpenButton = ({ children }: OpenButtonProps) => {
  const { open } = useModal();

  return <StyledModalTrigger onClick={open}>{children}</StyledModalTrigger>;
};

export default ModalOpenButton;
