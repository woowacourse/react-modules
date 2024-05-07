import MainModal from './Modal/MainModal/MainModal';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import CloseButton from './components/CloseButton/CloseButton';
import { ModalHeader, ModalBody, ModalFooter } from './components/ModalLayout/ModalLayout';

export const Modal = Object.assign(MainModal, {
  Title: Title,
  Input: Input,
  Button: Button,
  CloseButton: CloseButton,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export { default as AlertModal } from './Modal/AlertModal/AlertModal';
export { default as ConfirmModal } from './Modal/ConfirmModal/ConfirmModal';
export { default as PromptModal } from './Modal/PromptModal/PromptModal';
