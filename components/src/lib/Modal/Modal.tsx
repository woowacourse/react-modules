import { ReactNode, useRef } from "react";
import {
  ModalBackDrop,
  ModalContainer,
  StyledTitle,
  StyledDescription,
  StyledInput,
  ButtonWrap,
  StyledCloseButton,
  StyledConfirmButton,
} from "./Modal.styles";
import useFocusTrap from "./useFocusTrap";

interface ModalProps {
  size?: "small" | "medium" | "large";
  position: "center" | "bottom";
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, position, size = "medium" }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, isOpen);

  return isOpen ? (
    <ModalBackDrop position={position}>
      <ModalContainer ref={modalRef} size={size} position={position}>
        {children}
      </ModalContainer>
    </ModalBackDrop>
  ) : null;
};

const Title = ({ children }: { children: ReactNode }) => (
  <StyledTitle>{children}</StyledTitle>
);

const Description = ({ children }: { children: ReactNode }) => (
  <StyledDescription>{children}</StyledDescription>
);

const Input = () => <StyledInput />;

const Actions = ({ children }: { children: ReactNode }) => (
  <ButtonWrap>{children}</ButtonWrap>
);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const ConfirmButton = ({ children, onClick }: ButtonProps) => (
  <StyledConfirmButton onClick={onClick}>{children}</StyledConfirmButton>
);

const CloseButton = ({ children, onClick }: ButtonProps) => (
  <StyledCloseButton onClick={onClick}>{children}</StyledCloseButton>
);

Modal.Title = Title;
Modal.Description = Description;
Modal.Input = Input;
Modal.Actions = Actions;
Modal.ConfirmButton = ConfirmButton;
Modal.CloseButton = CloseButton;

export default Modal;
