import "./global.module.css";
import CloseButton from "./Buttons/CloseButton/CloseButton";
import CancelButton from "./Buttons/CancelButton/CancelButton";
import Container from "./Container/Container";
import Title from "./Title/Title";
import ConfirmButton from "./Buttons/ConfirmButton/ConfirmButton";
import InputForm from "./Input/InputForm";

export const Modal = Object.assign(Container, {
  Title,
  CloseButton,
  CancelButton,
  ConfirmButton,
  InputForm,
});
