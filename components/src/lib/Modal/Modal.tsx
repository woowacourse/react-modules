import { ReactNode, useRef, useEffect } from "react";
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

interface ModalProps {
  size?: "small" | "medium" | "large";
  position: "center" | "bottom";
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, position, size = "medium" }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const focusableSelectors = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ];

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const elements = modalRef.current!.querySelectorAll<HTMLElement>(
        focusableSelectors.join(",")
      );
      const focusables = Array.from(elements);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
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
