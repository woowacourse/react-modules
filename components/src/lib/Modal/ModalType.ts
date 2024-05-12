export type ModalPosition = "center" | "bottom";
export type ModalSize = "small" | "medium" | "large";
export type ModalType = "alert" | "confirm" | "prompt";
export type CloseButtonPosition = "top" | "bottom";

export interface ModalProps {
  modalPosition: ModalPosition;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  size: ModalSize;
  modalType?: ModalType;
  closeButtonPosition?: CloseButtonPosition;
}
