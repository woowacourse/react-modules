import { HTMLAttributes } from "react";

export type Type = "alert" | "confirm" | "prompt" | "default";

export type Size = "small" | "medium" | "large";

export type Position = "center" | "bottom";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "small" | "large";

export interface ModalMainProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  type?: Type;
  size?: Size;
  position?: Position;
  className?: string;
  zIndex?: number;
  portalRoot?: HTMLElement | null;
}

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalMessageProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.ComponentProps<"button"> {}

export interface ModalButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface ModalInputProps extends React.ComponentProps<"input"> {}

export interface ModalButtonContainerProps {
  type?: Type;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}
