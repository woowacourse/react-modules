/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren, useEffect } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";

import ModalHeader from "../ModalHeader/ModalHeader";
import CloseButton from "../CloseButton/CloseButton";
import Title from "../Title/Title";
import LongButton from "../LongButton/LongButton";

import ThemeProvider from "../../contextProvider/ThemeProvider";

import useThemeContext from "../../../hooks/useThemeContext";
import useModalContext from "../../../hooks/useModalContext";

interface ModalProps extends PropsWithChildren {
  position?: "center" | "bottom";
  title?: string;
  width?: number;
  theme?: "light" | "dark";
  hasConfirmButton?: boolean;
  closeButtonPosition?: "bottom" | "top";
  onConfirm?: () => void;
  onClose?: () => void;
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
}) => {
  const theme = useThemeContext();
  const { dialogRef, action } = useModalContext();

  useEffect(() => {
    const clickBackdrop = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        action.handleClose();
      }
    };

    if (dialogRef.current) {
      dialogRef.current.onclick = clickBackdrop;
    }
  }, [dialogRef, action]);

  return (
    <dialog ref={dialogRef} css={modalStyle(position, width, theme)}>
      <div css={modalContentStyle}>
        <ModalHeader>
          {title && <Title>{title}</Title>}
          {closeButtonPosition === "top" && (
            <CloseButton
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            />
          )}
        </ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle}>
          {hasConfirmButton && (
            <LongButton type="confirm" handleClick={onConfirm}>
              동의하고 저장하기
            </LongButton>
          )}
          {closeButtonPosition === "bottom" && (
            <LongButton
              type="cancel"
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              닫기
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
