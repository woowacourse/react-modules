import ModalButton from "./ModalButton";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";

export const Modal = Object.assign(ModalMain, {
  Button: ModalButton,
  Header: ModalHeader,
  Footer: ModalFooter,
  Content: ModalContent,
});
