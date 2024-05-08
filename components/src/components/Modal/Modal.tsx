/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";

import ModalHeader from "../ModalHeader/ModalHeader";
import LongButton from "../LongButton/LongButton";

import ThemeProvider from "../ContextProvider/ThemeProvider";

import useThemeContext from "../../hooks/useThemeContext";
import useModalContext from "../../hooks/useModalContext";

export interface ModalProps extends PropsWithChildren {
  position?: "center" | "bottom";
  title?: string;
  width?: number;
  theme?: "light" | "dark";
  hasConfirmButton?: boolean;
  closeButtonPosition?: "bottom" | "top";
  onConfirm?: () => void;
  onClose?: () => void;
  confirmMessage?: ReactNode;
  cancelMessage?: ReactNode;
}

interface DialogProps extends Omit<ModalProps, "theme"> {}

const Dialog: React.FC<DialogProps> = ({
  position = "center",
  title,
  width = 242,
  hasConfirmButton = true,
  closeButtonPosition = "top",
  onConfirm,
  onClose,
  children,
  confirmMessage,
  cancelMessage,
}) => {
  const theme = useThemeContext();
  const { dialogRef, action } = useModalContext();

  const clickBackdrop: MouseEventHandler<HTMLDialogElement> = (e) => {
    if (e.target === e.currentTarget) {
      action.handleClose();
    }
  };

  return (
    <dialog onClick={clickBackdrop} ref={dialogRef} css={modalStyle(position, width, theme)}>
      <div css={modalContentStyle}>
        <ModalHeader hasCloseButton={closeButtonPosition === "top"}>{title}</ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle}>
          {hasConfirmButton && (
            <LongButton isHighLight={true} handleClick={onConfirm}>
              {confirmMessage}
            </LongButton>
          )}
          {closeButtonPosition === "bottom" && (
            <LongButton
              isHighLight={false}
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              {cancelMessage}
            </LongButton>
          )}
        </div>
      </div>
    </dialog>
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <ThemeProvider value={props.theme}>
      <Dialog {...props}></Dialog>
    </ThemeProvider>
  );
};

export const useModalAction = () => {
  const { action } = useModalContext();
  return action;
};

export default Modal;
