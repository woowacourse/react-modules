import { ReactNode } from "react";

export interface ModalProps {
  modalPosition: "center" | "bottom";
  modalSize?: "small" | "medium" | "large";
  titleText?: string;
  children: ReactNode;
  closeType: "top" | "bottom" | "none";
  onClose: () => void;
}

export interface ConfirmModalProps {
  modalPosition: "center" | "bottom";
  modalSize?: "small" | "medium" | "large";
  titleText?: string;
  descriptionText?: string;
  children?: ReactNode;
  closeType: "top" | "bottom" | "none";
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
  onClose?: () => void;
}

export interface ModalStyledProps {
  modalPosition: "center" | "bottom";
}
