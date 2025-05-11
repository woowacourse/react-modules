import ModalContainer from './components/Modal/ModalContainer';
import ModalContent from './components/Modal/ModalContent';
import ModalBody from './components/Modal/ModalBody';
import ModalCloseButton from './components/Modal/ModalCloseButton';
import ModalOverlay from './components/Modal/ModalOverlay';
import ModalTitle from './components/Modal/ModalTitle';
import CancelButton from './components/Modal/CancelButton';
import ConfirmButton from './components/Modal/ConfirmButton';
import AlertActions from './components/Modal/AlertActions';
import Input from './components/Modal/Input';

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
