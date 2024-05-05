import ModalMain from './ModalMain';
import ModalHeader from './modalHeader/ModalHeader';
import ModalDimmed from './modalDimmed/ModalDimmed';

export const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
});
