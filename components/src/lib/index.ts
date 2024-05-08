import Title from './components/Title/Title';
import Button from './components/Button/Button';
import CloseButton from './components/CloseButton/CloseButton';
import { ModalBody, ModalFooter, ModalHeader, ModalMain } from './Modal/Modal';
import Input from './components/Input/Input';

export const Modal = Object.assign(ModalMain, {
  Title: Title,
  Button: Button,
  CloseButton: CloseButton,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Input: Input,
});
