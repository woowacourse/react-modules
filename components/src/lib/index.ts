import ModalMain from './ModalMain';
import ModalHeader from './modalHeader/ModalHeader';
import ModalDimmed from './modalDimmed/ModalDimmed';
import ModalContent from './modalContent/ModalContent';
import CloseButton from './closeButton/CloseButton';
import ConfirmButton from './confirmButton/ConfirmButton';

export const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
  Content: ModalContent,
  CloseButton: CloseButton,
  ConfirmButton: ConfirmButton,
});
