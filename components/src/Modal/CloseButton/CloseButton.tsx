import { useContext } from "react";
import { ModalContext } from "../Modal";
import { CloseIcon } from "./CloseButton.styled";

export const CloseButton = () => {
  const modalContext = useContext(ModalContext);

  return <CloseIcon onClick={modalContext.onClose} />;
};
