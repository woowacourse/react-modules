import { ReactNode } from "react";

export interface ModalProps {
  modalPosition: "center" | "bottom";
  titleText?: string;
  children: ReactNode;
  closeType: "top" | "bottom";
  onClose: () => void;
}

export interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
  onClose?: () => void;
}

export interface ModalStyledProps {
  modalPosition: "center" | "bottom";
}
