import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  CloseButton,
} from './Modal.styles.ts';
interface ModalPropsType {
  children: React.ReactNode;
  isOpen: boolean;
  position: string;
  title: string;
  onClose: () => void;
}

const Modal = ({
  children,
  isOpen,
  position,
  title,
  onClose,
}: ModalPropsType) => {
  return (
    <>
      <ModalBackground isOpen={isOpen} position={position}>
        <ModalContainer position={position}>
          <ModalHeader>
            <h4>{title}</h4>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default Modal;
