import {
  PropsWithChildren,
  ReactNode,
  useRef,
  ElementType,
  CSSProperties,
} from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useModalCloseEvent from "../../hooks/useModalCloseEvent";
import useFocusTrap from "@/hooks/useFocusTrap";

export type ModalType = "alert" | "confirm" | "prompt";
export type ModalSizeType = "small" | "medium" | "large";
export type ModalPositionType = "bottom" | "center";
export interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  modalType?: ModalType;
  modalSize?: ModalSizeType;
  position?: ModalPositionType;
  className?: string;
  style?: CSSProperties;
}

interface StyleProps {
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export interface HeaderProps extends StyleProps {
  children: ReactNode;
  padding?: string;
  borderBottom?: string;
}

export interface TitleProps extends StyleProps {
  children: ReactNode;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

export interface CloseButtonProps extends StyleProps {
  onClick: () => void;
  size?: string;
  color?: string;
}

export interface ContentProps extends StyleProps {
  children: ReactNode;
  padding?: string;
}

export interface InputProps extends StyleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  focusBorderColor?: string;
  padding?: string;
  disabled?: boolean;
}

export interface FooterProps extends StyleProps {
  children: ReactNode;
  justifyContent?: string;
  padding?: string;
  borderTop?: string;
  gap?: string;
}

export interface ButtonProps extends StyleProps {
  onClick: () => void;
  primary?: boolean;
  children: ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  borderColor?: string;
  disabled?: boolean;
}

let currentModalType: ModalType = "alert";

function Modal({
  onClose,
  isOpen,
  children,
  modalType = "alert",
  modalSize = "medium",
  position = "center",
  className,
  style,
}: PropsWithChildren<ModalProps>) {
  currentModalType = modalType;

  if (!isOpen) return null;

  useModalCloseEvent(onClose);
  const focusTrapRef = useFocusTrap();

  return (
    <S.Backdrop id="backdrop">
      <S.ModalContainer
        ref={focusTrapRef}
        modalSize={modalSize}
        position={position}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={className}
        style={style}
      >
        {children}
      </S.ModalContainer>
    </S.Backdrop>
  );
}

Modal.Header = function Header({
  children,
  className,
  style,
  as,
  padding,
  borderBottom,
}: HeaderProps) {
  return (
    <S.ModalHeader
      as={as}
      className={className}
      style={{
        padding,
        borderBottom,
        ...style,
      }}
    >
      {children}
    </S.ModalHeader>
  );
};

Modal.Title = function Title({
  children,
  className,
  style,
  as,
  fontSize,
  fontWeight,
  color,
}: TitleProps) {
  return (
    <S.Title
      as={as}
      className={className}
      style={{
        fontSize,
        fontWeight,
        color,
        ...style,
      }}
    >
      {children}
    </S.Title>
  );
};

Modal.CloseButton = function CloseButton({
  onClick,
  className,
  style,
  as,
  size,
  color,
}: CloseButtonProps) {
  return (
    <S.CloseButton
      as={as}
      type="button"
      onClick={onClick}
      aria-label="모달 닫기"
      className={className}
      style={{
        color,
        ...style,
      }}
    >
      <img
        src={CloseIcon}
        alt="닫기 버튼"
        style={{ width: size, height: size }}
      />
    </S.CloseButton>
  );
};

Modal.Content = function Content({
  children,
  className,
  style,
  as,
  padding,
}: ContentProps) {
  return (
    <S.ModalContent
      as={as}
      className={className}
      style={{
        padding,
        ...style,
      }}
    >
      {children}
    </S.ModalContent>
  );
};

Modal.Input = function Input({
  value,
  onChange,
  placeholder,
  className,
  style,
  as,
  type = "text",
  width,
  height,
  borderRadius,
  borderColor,
  focusBorderColor = "transparent",
  padding,
  disabled,
}: InputProps) {
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
      as={as || "input"}
      type={type}
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
      className={className}
      style={{
        width,
        height,
        borderRadius,
        borderColor,
        padding,
        ...style,
      }}
      disabled={disabled}
      data-focus-border-color={focusBorderColor}
    />
  );
};

Modal.Footer = function Footer({
  children,
  className,
  style,
  as,
  justifyContent = "flex-end",
  padding,
  borderTop,
  gap,
}: FooterProps) {
  return (
    <S.ModalFooter
      as={as}
      className={className}
      style={{
        justifyContent,
        padding,
        borderTop,
        gap,
        ...style,
      }}
    >
      {children}
    </S.ModalFooter>
  );
};

Modal.Button = function Button({
  onClick,
  primary = false,
  children,
  className,
  style,
  as,
  width,
  height,
  backgroundColor,
  textColor,
  borderRadius,
  borderColor,
  disabled,
}: ButtonProps) {
  return (
    <S.Button
      as={as}
      primary={primary}
      onClick={onClick}
      className={className}
      style={{
        width,
        height,
        backgroundColor: backgroundColor || (primary ? undefined : "white"),
        color: textColor,
        borderRadius,
        borderColor,
        ...style,
      }}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Modal;
