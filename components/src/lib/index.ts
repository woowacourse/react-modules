import ModalTitle from "./modalTitle/ModalTitle";
import ModalMessage from "./modalMessage/ModalMessage";
import ModalCloseButton from "./modalCloseButton/ModalCloseButton";
import ModalButton from "./modalButton/ModalButton";
import ModalInput from "./modalInput/ModalInput";
import ModalButtonContainer from "./modalButtonContainer/ModalButtonContainer";

import { ModalMain } from "./Modal";

export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Message: ModalMessage,
  CloseButton: ModalCloseButton,
  Button: ModalButton,
  Input: ModalInput,
  ButtonContainer: ModalButtonContainer,
});
