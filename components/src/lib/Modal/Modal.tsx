import styled from "styled-components";

import BackDrop from "./BackDrop";
import Container from "./Container";
import Header from "./Header";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import CloseButton from "./CloseButton";

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <StyledModal>{children}</StyledModal>;
};

Modal.BackDrop = BackDrop;
Modal.Container = Container;
Modal.Header = Header;
Modal.Title = Title;
Modal.ButtonContainer = ButtonContainer;
Modal.Button = Button;
Modal.CloseButton = CloseButton;

export default Modal;

const StyledModal = styled.section`
  position: relative;

  height: 100vh;
  width: 376px;
`;
