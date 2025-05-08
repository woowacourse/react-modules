import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  CloseButton,
} from './Modal.styles.ts';
interface ModalPropsType {
  children: React.ReactNode;
  isOpen: boolean;
  position: 'center' | 'bottom';
  title: string;
  isXButton: boolean;
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({
  children,
  isOpen,
  position,
  title,
  isXButton,
  onClose,
  onBackdropClick,
}: ModalPropsType) => {
  return (
    <>
      <ModalBackground
        isOpen={isOpen}
        position={position}
        onClick={(e) => onBackdropClick(e)}
      >
        <ModalContainer position={position}>
          <ModalHeader>
            <h4>{title}</h4>
            <CloseButton isXButton={isXButton} onClick={onClose}>
              X
            </CloseButton>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default Modal;
