export type ModalPositionType = "center" | "bottom";
export type ModalSizeType = "small" | "medium" | "large";

export interface ModalLayoutProps {
  position?: ModalPositionType;
  size?: ModalSizeType;
}

export interface ModalDefaultProps {
  title: string;
  onRequestClose: () => void;
  size?: ModalSizeType;
  closeTrigger: ModalCloseTriggers;
  hasCloseButton: boolean;
}

export interface ModalCloseTriggers {
  outsideClick: boolean;
  escapeKey: boolean;
}
