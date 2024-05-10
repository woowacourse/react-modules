import BaseModal from './components/BaseModal';
import ModalButton from './components/ModalButton';
import ModalHeader from './components/ModalHeader';
import ModalInput from './components/ModalInput';
import ModalSubTitle from './components/ModalSubTitle';

const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  SubTitle: ModalSubTitle,
  Input: ModalInput,
  Button: ModalButton,
});

export default Modal;
