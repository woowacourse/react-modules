import { default as ModalContainer } from './Modal';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';

export const Modal = Object.assign(ModalOverlay, {
  ModalContainer: ModalContainer,
  ModalBody: ModalBody,
  ModalCloseButton: ModalCloseButton,
  ModalTitle: ModalTitle,
});
