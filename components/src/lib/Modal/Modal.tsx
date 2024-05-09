/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";
import useModalHook from "../useModalHook";

import ModalHeader from "../ModalHeader/ModalHeader";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Xmark from "../icon/Xmark";

interface ModalProps {
  position?: "center" | "bottom";
  title?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onChange?: () => void;
  inputValue?: string;
  size?: "small" | "medium" | "large";
  type?: "alert" | "confirm" | "prompt";
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  position = "center",
  title,
  onConfirm,
  onClose,
  onChange,
  inputValue,
  children,
  size = "medium",
  type = "confirm",
}) => {
  const { ref, action } = useModalHook();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  useEffect(() => {
    const clickBackdrop = (e: MouseEvent) => {
      if (e.target === ref.current) {
        action.handleClose();
      }
    };
    ref.current?.addEventListener("click", clickBackdrop);

    return () => {
      ref.current?.removeEventListener("click", clickBackdrop);
    };
  }, [action, ref]);

  return (
    <dialog ref={ref} css={modalStyle(position)}>
      <div css={modalContentStyle}>
        <ModalHeader>{title && <Title>{title}</Title>}</ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle}>
          {hasConfirmButton && (
            <Button type="confirm" handleClick={onConfirm}>
              동의하고 저장하기
            </Button>
          )}
          {closeButtonPosition === "bottom" && (
            <Button
              type="cancel"
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              닫기
            </Button>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
