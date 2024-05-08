/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";

import ModalHeader from "../ModalHeader/ModalHeader";
import LongButton from "../MainButton/MainButton";

import ThemeProvider from "../ContextProvider/ThemeProvider";

import useThemeContext from "../../hooks/useThemeContext";
import useModalContext from "../../hooks/useModalContext";

export interface ModalProps {
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

enum ButtonPosition {
  top = "top",
  bottom = "bottom",
}

const Dialog = ({
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
}: PropsWithChildren<ModalProps>) => {
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
        <ModalHeader hasCloseButton={closeButtonPosition === ButtonPosition.top}>{title}</ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle}>
          {hasConfirmButton && (
            <LongButton isHighLight={true} handleClick={onConfirm}>
              {confirmMessage}
            </LongButton>
          )}
          {closeButtonPosition === ButtonPosition.bottom && (
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

const Modal = ({ theme, ...props }: PropsWithChildren<ModalProps>) => {
  return (
    <ThemeProvider value={theme}>
      <Dialog {...props}></Dialog>
    </ThemeProvider>
  );
};

export const useModalAction = () => {
  const { action } = useModalContext();
  return action;
};

const SmallModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={320}></Modal>;
};
const MediumModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={480}></Modal>;
};
const LargeModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={600}></Modal>;
};

Modal.Small = SmallModal;
Modal.Medium = MediumModal;
Modal.Large = LargeModal;

export default Modal;
