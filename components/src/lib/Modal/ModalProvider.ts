import Modal from './Modal';
import ModalBody from './ModalBody/ModalBody';
import ModalButtonContainer from './ModalButtonContainer/ModalButtonContainer';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalContainer from './ModalContainer/ModalContainer';
import ModalDescription from './ModalDescription/ModalDescription';
import ModalDimmedLayer from './ModalDimmedLayer/ModalDimmedLayer';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalInputField from './ModalInputField/ModalInputField';
import ModalTitle from './ModalTitle/ModalTitle';

export const ModalProvider = Object.assign(Modal, {
  Body: ModalBody,
  ButtonContainer: ModalButtonContainer,
  CloseButton: ModalCloseButton,
  Container: ModalContainer,
  Description: ModalDescription,
  DimmedLayer: ModalDimmedLayer,
  Header: ModalHeader,
  InputField: ModalInputField,
  Title: ModalTitle,
});
