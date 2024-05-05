/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren, useEffect } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";
import useModalHook from "../../../hooks/useModal";

import ModalHeader from "../ModalHeader/ModalHeader";
import CloseButton from "../CloseButton/CloseButton";
import Title from "../Title/Title";
import LongButton from "../LongButton/LongButton";
import ThemeProvider from "../../contextProvider/ThemeProvider";
import useThemeContext from "../../../hooks/useThemeContext";

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

interface DialogProps extends Omit<ModalProps, "theme"> {
  dialogRef: React.LegacyRef<HTMLDialogElement>;
  action: ModalActionType;
}

const Dialog: React.FC<DialogProps> = ({
  position = "center",
  title,
  width = 242,
  hasConfirmButton = true,
  closeButtonPosition = "top",
  dialogRef,
  action,
  onConfirm,
  onClose,
  children,
}) => {
  const theme = useThemeContext();

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

const Modal = (props: ModalProps) => {
  const { ref, action } = useModalHook();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  useEffect(() => {
    const clickBackdrop = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        action.handleClose();
      }
    };

    if (ref.current) {
      ref.current.onclick = clickBackdrop;
    }
  }, [ref, action]);

  return (
    <ThemeProvider value={props.theme}>
      <Dialog {...props} dialogRef={ref} action={action}></Dialog>
    </ThemeProvider>
  );
};

export default Modal;
