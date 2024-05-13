import Title from './components/common/Title/Title';
import { ModalBody, ModalFooter, ModalHeader, ModalMain } from './components/Modal/Modal';
import Input from './components/common/Input/Input';
import { AlertModal, ConfirmModal, PromptModal } from './ModalPreset/ModalPreset';
import CloseButton from './components/common/CloseButton/CloseButton';
import Button from './components/common/Button/Button';

export const Modal = Object.assign(ModalMain, {
  Title: Title,
  Button: Button,
  CloseButton: CloseButton,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Input: Input,
});

export { AlertModal, ConfirmModal, PromptModal };
