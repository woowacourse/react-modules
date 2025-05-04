export type ModalPositionType = "center" | "bottom";
export type ModalSizeType = "small" | "medium" | "large";

export interface ModalLayoutProps {
  position?: ModalPositionType;
  size?: ModalSizeType;
}
