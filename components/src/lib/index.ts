import ModalMain from './ModalMain';
import ModalHeader from './modalHeader/ModalHeader';
import ModalDimmed from './modalDimmed/ModalDimmed';
import ModalContent from './modalContent/ModalContent';
import CloseButton from './closeButton/CloseButton';
import ConfirmButton from './confirmButton/ConfirmButton';
import ModalFooter from './modalFooter/ModalFooter';
import ModalTitle from './modalTitle/ModalTitle';
import ModalCloseIcon from './modalCloseIcon/ModalCloseIcon';

export const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
  Title: ModalTitle,
  CloseIcon: ModalCloseIcon,
  Content: ModalContent,
  CloseButton: CloseButton,
  ConfirmButton: ConfirmButton,
  Footer: ModalFooter,
});
