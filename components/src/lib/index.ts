import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';

export const Modal = Object.assign(ModalContainer, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Body: ModalBody,
  CloseButton: ModalCloseButton,
  Title: ModalTitle,
});
