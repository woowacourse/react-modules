import BaseModal from './BaseModal';
import ModalButton from './ModalButton';
import ModalInput from './ModalInput';
import ModalSubTitle from './ModalSubTitle';
import ModalTitle from './ModalTitle';

const Modal = Object.assign(BaseModal, {
  Title: ModalTitle,
  SubTitle: ModalSubTitle,
  Input: ModalInput,
  Button: ModalButton,
});

export default Modal;
