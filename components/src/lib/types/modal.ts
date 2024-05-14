import { PropsWithChildren } from "react";
import { DEVICE_WIDTH, FLEX_DIRECTION, JUSTIFY_CONTENT } from "../constants/modal";

export interface ModalProps extends PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  isOpen: boolean;
  position?: ModalPosition;
  device?: Device;
  onClose: () => void;
}

export type ElementDirection = keyof typeof FLEX_DIRECTION;
export type ElementJustify = keyof typeof JUSTIFY_CONTENT;
export type Device = keyof typeof DEVICE_WIDTH;

export type SizeOption = "small" | "medium" | "large";

export type ModalPosition = "top" | "center" | "bottom";
export type ModalSize = SizeOption | "full";
export type ModalButtonSize = SizeOption | "xLarge";
export type ModalButtonTheme = "dark" | "white";
export type ModalButtonWidth = "full" | "fit";
