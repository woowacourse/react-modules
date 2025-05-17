import { PropsWithChildren, ReactNode, useRef } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useModalCloseEvent from "../../hooks/useModalCloseEvent";
import useFocusTrap from "@/hooks/useFocusTrap";

export type ModalType = "alert" | "confirm" | "prompt";
export type ModalSizeType = "small" | "medium" | "large";
export type ModalPositionType = "bottom" | "center";
export interface ModalProps {
  onClose: () => void;
  modalType?: ModalType;
  modalSize?: ModalSizeType;
  position?: ModalPositionType;
}

export interface HeaderProps {
  children: ReactNode;
}

export interface TitleProps {
  children: ReactNode;
}

export interface CloseButtonProps {
  onClick: () => void;
}

export interface ContentProps {
  children: ReactNode;
}

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface FooterProps {
  children: ReactNode;
}

export interface ButtonProps {
  onClick: () => void;
  primary?: boolean;
  children: ReactNode;
}

let currentModalType: ModalType = "alert";

function Modal({
  onClose,
  children,
  modalType = "alert",
  modalSize = "medium",
  position = "center",
}: PropsWithChildren<ModalProps>) {
  useModalCloseEvent(onClose);
  const focusTrapRef = useFocusTrap();

  currentModalType = modalType;

  return (
    <S.Backdrop id="backdrop">
      <S.ModalContainer
        ref={focusTrapRef}
        modalType={modalType}
        modalSize={modalSize}
        position={position}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {children}
      </S.ModalContainer>
    </S.Backdrop>
  );
}

Modal.Header = function Header({ children }: HeaderProps) {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};

Modal.Title = function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
};

Modal.CloseButton = function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <S.CloseButton type="button" onClick={onClick} aria-label="모달 닫기">
      <img src={CloseIcon} alt="닫기 버튼" />
    </S.CloseButton>
  );
};

Modal.Content = function Content({ children }: ContentProps) {
  return <S.ModalContent>{children}</S.ModalContent>;
};

Modal.Input = function Input({ value, onChange, placeholder }: InputProps) {
  const hasInteractedRef = useRef(false);

  const showWarningIfNeeded = () => {
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;

      if (process.env.NODE_ENV !== "production") {
        if (currentModalType !== "prompt") {
          setTimeout(() => {
            console.warn(
              `Modal.Input은 prompt 타입 모달에서만 사용해야 합니다. 현재 모달 타입: ${currentModalType}`
            );
          }, 0);
        }
      }
    }
  };

  return (
    <S.ModalInput
      type="text"
      value={value}
      onChange={(e) => {
        showWarningIfNeeded();
        onChange(e);
      }}
      onFocus={() => {
        showWarningIfNeeded();
      }}
      onClick={() => {
        showWarningIfNeeded();
      }}
      placeholder={placeholder}
    />
  );
};

Modal.Footer = function Footer({ children }: FooterProps) {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};

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
