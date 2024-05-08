import BaseModal from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

export const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});

export { default as AlertModal } from './AlertModal';
export { default as ConfirmModal } from './ConfirmModal';
export { default as PromptModal } from './PromptModal';
