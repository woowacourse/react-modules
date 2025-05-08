import { PropsWithChildren, ReactNode } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useModalCloseEvent from "../../hooks/useModalCloseEvent";

export type ModalType = "alert" | "confirm" | "prompt";
export type ModalSizeType = "small" | "medium" | "large";

interface ModalProps {
  onClose: () => void;
  modalType?: ModalType;
  modalSize?: ModalSizeType;
}

function Modal({
  onClose,
  children,
  modalType = "alert",
  modalSize = "medium",
}: PropsWithChildren<ModalProps>) {
  useModalCloseEvent(onClose);

  return (
    <S.Backdrop id="backdrop">
      <S.ModalContainer modalType={modalType} modalSize={modalSize}>
        {children}
      </S.ModalContainer>
    </S.Backdrop>
  );
}

interface HeaderProps {
  children: ReactNode;
}

Modal.Header = function Header({ children }: HeaderProps) {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};

interface TitleProps {
  children: ReactNode;
}

Modal.Title = function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
};

interface CloseButtonProps {
  onClick: () => void;
}

Modal.CloseButton = function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <S.CloseButton type="button" onClick={onClick}>
      <img src={CloseIcon} alt="닫기 버튼" />
    </S.CloseButton>
  );
};

interface ContentProps {
  children: ReactNode;
}

Modal.Content = function Content({ children }: ContentProps) {
  return <S.ModalContent>{children}</S.ModalContent>;
};

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

Modal.Input = function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <S.ModalInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus
    />
  );
};

interface FooterProps {
  children: ReactNode;
}

Modal.Footer = function Footer({ children }: FooterProps) {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};

interface ButtonProps {
  onClick: () => void;
  primary?: boolean;
  children: ReactNode;
}

Modal.Button = function Button({
  onClick,
  primary = false,
  children,
}: ButtonProps) {
  return (
    <S.Button primary={primary} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Modal;
