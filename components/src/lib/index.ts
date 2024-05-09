import CancelButton from "./Buttons/CancelButton/CancelButton";
import CloseButton from "./Buttons/CloseButton/CloseButton";
import ConfirmButton from "./Buttons/ConfirmButton/ConfirmButton";
import Container from "./Container/Container";
import InputForm from "./Input/InputForm";
import Title from "./Title/Title";

export const Modal = Object.assign(Container, {
  Title: Title,
  CloseButton: CloseButton,
  ConfirmButton: ConfirmButton,
  CancelButton: CancelButton,
  InputForm: InputForm,
});
