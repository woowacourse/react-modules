import Backdrop from './Modal/Backdrop/Backdrop';
import CloseButton from './Modal/CloseButton/CloseButton';
import Content from './Modal/Content/Content';
import Header from './Modal/Header/Header';
import ModalContainer from './Modal/ModalContainer';
import Title from './Modal/Title/Title';

export const Modal = Object.assign(ModalContainer, {
  Backdrop: Backdrop,
  Content: Content,
  Header: Header,
  Title: Title,
  CloseButton: CloseButton,
});
