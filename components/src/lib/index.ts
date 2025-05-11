import ModalContainer from './ModalContainer';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import Modal from './Modal';

const ModalComponent = Object.assign(Modal, {
  Overlay: ModalOverlay,
  Container: ModalContainer,
  Title: ModalTitle,
  Body: ModalBody,
  CloseButton: ModalCloseButton,
});

export { ModalComponent };
