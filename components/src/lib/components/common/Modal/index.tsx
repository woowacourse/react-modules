import ModalMain from './ModalMain';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import Button from '../Button';
import Input from '../Input';

const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Button: Button,
  Input: Input,
});

export default Modal;
