import ModalTitle from "./modalTitle/ModalTitle";
import ModalMessage from "./modalMessage/ModalMessage";
import ModalCloseButton from "./modalCloseButton/ModalCloseButton";
import ModalButton from "./modalButton/ModalButton";
import ModalInput from "./modalInput/ModalInput";

import { ModalContent, ModalFooter, ModalHeader, ModalMain } from "./Modal";

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Message: ModalMessage,
  CloseButton: ModalCloseButton,
  Button: ModalButton,
  Input: ModalInput,
});

export { default as AlertModal } from "./modalType/AlertModal";
export { default as ConfirmModal } from "./modalType/ConfirmModal";
export { default as PromptModal } from "./modalType/PromptModal";
