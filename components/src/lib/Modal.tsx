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
  showCloseButton: boolean;
  size: 'small' | 'medium' | 'large';
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({
  children,
  isOpen,
  position,
  title,
  showCloseButton,
  size,
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
        <ModalContainer position={position} size={size}>
          <ModalHeader>
            <h4>{title}</h4>
            <CloseButton showCloseButton={showCloseButton} onClick={onClose}>
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
