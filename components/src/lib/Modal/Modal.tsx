import * as Styled from "./style";

import BackDrop from "./BackDrop/BackDrop";
import Container from "./Container/Container";
import Header from "./Header/Header";
import Title from "./Title/Title";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import Button from "./Button/Button";
import CloseButton from "./CloseButton/CloseButton";

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <Styled.Modal>{children}</Styled.Modal>;
};

Modal.BackDrop = BackDrop;
Modal.Container = Container;
Modal.Header = Header;
Modal.Title = Title;
Modal.ButtonContainer = ButtonContainer;
Modal.Button = Button;
Modal.CloseButton = CloseButton;

export default Modal;
