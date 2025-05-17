import { ModalRoot } from "./ModalRoot";
import { ModalHeader } from "./ModalHeader";
import { ModalInput } from "./ModalInput";
import { ActionButton, CloseButton, ModalBody, ModalFooter } from "./styles";

const Modal = Object.assign(ModalRoot, {
	Header: ModalHeader,
	Body: ModalBody,
	Footer: ModalFooter,
	ActionButton,
	CloseButton,
	ModalInput,
});

export default Modal;
