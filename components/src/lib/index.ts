import Backdrop from './Modal/Backdrop/Backdrop';
import CloseButton from './Modal/CloseButton/CloseButton';
import Content from './Modal/Content/Content';
import Header from './Modal/Header/Header';
import ModalMain from './Modal/ModalMain';
import Title from './Modal/Title/Title';

export const Modal = Object.assign(ModalMain, {
  Backdrop: Backdrop,
  Content: Content,
  Header: Header,
  Title: Title,
  CloseButton: CloseButton,
});
