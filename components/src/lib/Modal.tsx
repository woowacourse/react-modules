import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  CloseButton,
} from "./Modal.styles";
interface ModalPropsType {
  isModalOpen: boolean;
  position: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({
  isModalOpen,
  position,
  title,
  children,
  onClose,
}: ModalPropsType) => {
  return (
    <ModalBackground isModalOpen={isModalOpen} position={position}>
      <ModalContainer position={position}>
        <ModalHeader as="h4">
          {title}
          <CloseButton onClick={onClose}>X</CloseButton>
          {children}
        </ModalHeader>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
