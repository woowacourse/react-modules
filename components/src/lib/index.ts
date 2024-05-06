import ModalTitle from "./modalTitle/ModalTitle";
import ModalCloseButton from "./modalCloseButton/ModalCloseButton";
import ModalButton from "./modalButton/ModalButton";
import { ModalMain } from "./Modal";

export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Button: ModalButton,
});
