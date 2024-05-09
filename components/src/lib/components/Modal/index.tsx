import ModalMain from './ModalMain';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});

export default Modal;
