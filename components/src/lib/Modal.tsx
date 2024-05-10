import BaseModal from './BaseModal';
import ModalButton from './ModalButton';
import ModalHeader from './ModalHeader';
import ModalInput from './ModalInput';
import ModalSubTitle from './ModalSubTitle';

const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  SubTitle: ModalSubTitle,
  Input: ModalInput,
  Button: ModalButton,
});

export default Modal;
