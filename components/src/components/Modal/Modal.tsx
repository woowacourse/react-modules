/** @jsxImportSource @emotion/react */
import { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";

import ModalHeader from "../ModalHeader/ModalHeader";
import MainButton, { MainButtonStyleType } from "../MainButton/MainButton";

import ThemeProvider from "../contextProvider/ThemeProvider";

import useThemeContext from "../../hooks/useThemeContext";
import useModalContext from "../../hooks/useModalContext";

export interface ModalProps {
  position?: "center" | "bottom";
  title?: string;
  width?: number;
  theme?: "light" | "dark";
  buttonAlign?: "column" | "row";
  hasConfirmButton?: boolean;
  closeButtonPosition?: "bottom" | "top";
  onConfirm?: () => void;
  onClose?: () => void;
  confirmMessage?: ReactNode;
  cancelMessage?: ReactNode;
}

interface DialogProps extends Omit<ModalProps, "theme"> {}

enum ButtonPosition {
  Top = "top",
  Bottom = "bottom",
}

enum ButtonAlign {
  Column = "column",
  Row = "row",
}

const Dialog = ({
  position = "center",
  buttonAlign = "column",
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
        <ModalHeader hasCloseButton={closeButtonPosition === ButtonPosition.Top}>{title}</ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle(buttonAlign)}>
          {hasConfirmButton && (
            <MainButton
              buttonType={buttonAlign === ButtonAlign.Row ? MainButtonStyleType.Short : MainButtonStyleType.Long}
              isHighLight={true}
              handleClick={onConfirm}
            >
              {confirmMessage}
            </MainButton>
          )}
          {closeButtonPosition === ButtonPosition.Bottom && (
            <MainButton
              buttonType={buttonAlign === ButtonAlign.Row ? MainButtonStyleType.Short : MainButtonStyleType.Long}
              isHighLight={false}
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              {cancelMessage}
            </MainButton>
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

enum ModalWidth {
  Small = 320,
  Medium = 480,
  Large = 600,
}

const SmallModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={ModalWidth.Small}></Modal>;
};
const MediumModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={ModalWidth.Medium}></Modal>;
};
const LargeModal = ({ ...props }: PropsWithChildren<DialogProps>) => {
  return <Modal {...props} width={ModalWidth.Large}></Modal>;
};

Modal.Small = SmallModal;
Modal.Medium = MediumModal;
Modal.Large = LargeModal;

export default Modal;
