import Title from './components/Title/Title';
import Button from './components/Button/Button';
import CloseButton from './components/CloseButton/CloseButton';
import { ModalHeader, ModalBody, ModalFooter } from './components/ModalLayout/ModalLayout';
import MainModal from './Modal/MainModal/MainModal';

export const Modal = Object.assign(MainModal, {
  Title: Title,
  Button: Button,
  CloseButton: CloseButton,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export { default as AlertModal } from './Modal/AlertModal/AlertModal';
export { default as ConfirmModal } from './Modal/ConfirmModal/ConfirmModal';
