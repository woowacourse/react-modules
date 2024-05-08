import ModalMain from './ModalMain/ModalMain';
import CancelButton from './CancelButton/CancelButton';
import ConfirmButton from './ConfirmButton/ConfirmButton';
import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalMessage from './ModalMessage/ModalMessage';

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  CancelButton: CancelButton,
  ConfirmButton: ConfirmButton,
  Message: ModalMessage,
});
