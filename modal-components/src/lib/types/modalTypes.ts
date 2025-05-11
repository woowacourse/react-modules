export interface ModalProps {
  modalPosition: "center" | "bottom";
  modalSize?: "small" | "medium" | "large";
  titleText?: string;
  children?: React.ReactNode;
  closeType: "top" | "bottom" | "none";
  onClose: () => void;
  footer?: React.ReactNode;
  descriptionText?: string;
  isCloseFocus?: boolean;
}

export interface ConfirmModalProps extends ModalProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface AgreementModalProps extends ModalProps {
  onConfirm?: () => void;
  agreementContents: {
    text: string;
    details?: string;
    isRequired: boolean;
  }[];
}

export interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
  onClose?: () => void;
  isCloseFocus?: boolean;
}

export interface ModalStyledProps {
  modalPosition: "center" | "bottom";
}
