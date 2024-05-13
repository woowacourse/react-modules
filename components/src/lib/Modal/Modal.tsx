import {
  ModalBody,
  ModalButtonContainer,
  ModalCloseButton,
  ModalContainer,
  ModalDescription,
  ModalDimmedLayer,
  ModalHeader,
  ModalInputField,
  ModalTitle
} from './index'

export interface DefaultModalProps {
  size?: ModalSize;
  isOpened: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

interface ModalProp {
  children: JSX.Element
}

const Modal = ({ children }: ModalProp) => {

  return (<>
    {children}
  </>)
};

Modal.Body = ModalBody;
Modal.ButtonContainer = ModalButtonContainer;
Modal.CloseButton = ModalCloseButton;
Modal.Container = ModalContainer;
Modal.Description = ModalDescription;
Modal.DimmedLayer = ModalDimmedLayer;
Modal.Header = ModalHeader;
Modal.InputField = ModalInputField;
Modal.Title = ModalTitle;

export default Modal;
