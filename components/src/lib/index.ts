import Backdrop from './Modal/Backdrop/Backdrop';
import Button from './Modal/Button/Button';
import CloseButton from './Modal/CloseButton/CloseButton';
import Content from './Modal/Content/Content';
import Footer from './Modal/Footer/Footer';
import Header from './Modal/Header/Header';
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
});
