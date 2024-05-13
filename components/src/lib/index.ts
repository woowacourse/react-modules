import Title from './components/common/Title/Title';
import { ModalBody, ModalFooter, ModalHeader, ModalMain } from './components/Modal/Modal';
import Input from './components/common/Input/Input';
import CloseButton from './components/common/CloseButton/CloseButton';
import Button from './components/common/Button/Button';
import { AlertModal } from './components/Modal/ModalPreset/AlertModal';
import { ConfirmModal } from './components/Modal/ModalPreset/ConfirmModal';
import { PromptModal } from './components/Modal/ModalPreset/PromptModal';

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
