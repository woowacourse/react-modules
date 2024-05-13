import ModalTitle from "./components/modalTitle/ModalTitle";
import ModalMessage from "./components/modalMessage/ModalMessage";
import ModalCloseButton from "./components/modalCloseButton/ModalCloseButton";
import ModalButton from "./components/modalButton/ModalButton";
import ModalInput from "./components/modalInput/ModalInput";

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

export { default as AlertModal } from "./AlertModal/AlertModal";
export { default as ConfirmModal } from "./ConfirmModal/ConfirmModal";
export { default as PromptModal } from "./PromptModal/PromptModal";
