import Backdrop from './Modal/Backdrop/Backdrop';
import Button from './Modal/Button/Button';
import CloseButton from './Modal/CloseButton/CloseButton';
import Content from './Modal/Content/Content';
import Footer from './Modal/Footer/Footer';
import Header from './Modal/Header/Header';
import Input from './Modal/Input/Input';
import Label from './Modal/Label/Label';
import Main from './Modal/Main/Main';
import ModalContainer from './Modal/ModalContainer';
import Title from './Modal/Title/Title';

export const Modal = Object.assign(ModalContainer, {
  Backdrop: Backdrop,
  Content: Content,
  Header: Header,
  Main: Main,
  Footer: Footer,
  Title: Title,
  CloseButton: CloseButton,
  Button: Button,
  Label: Label,
  Input: Input,
});

export { default as AlertModal } from './AlertModal/AlertModal';
export { default as ConfirmModal } from './ConfirmModal/ConfirmModal';
export { default as PromptModal } from './PromptModal/PromptModal';
