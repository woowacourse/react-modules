import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import AlertActions from './AlertActions';
import Input from './Input';

export const Modal = Object.assign(ModalContainer, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Body: ModalBody,
  CloseButton: ModalCloseButton,
  Title: ModalTitle,
  CancelButton: CancelButton,
  ConfirmButton: ConfirmButton,
  AlertActions: AlertActions,
  Input: Input,
});
