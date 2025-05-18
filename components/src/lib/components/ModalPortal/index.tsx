import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import { useModal } from "../ModalRoot";
import { ModalPortalProps } from "./ModalPortal.types";
import { StyledModalPortal } from "./ModalPortal.styled";

const ModalPortal = ({ children }: ModalPortalProps) => {
  const { isOpen } = useModal();

  if (!isOpen) return null;

  return createPortal(
    <StyledModalPortal isOpen={isOpen}>{children}</StyledModalPortal>,
    document.body
  );
};

export default ModalPortal;
