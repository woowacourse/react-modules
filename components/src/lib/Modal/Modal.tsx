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
  hasConfirmButton?: boolean;
  closeButtonPosition?: "bottom" | "top";
  onConfirm?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  position = "center",
  title,
  hasConfirmButton = true,
  closeButtonPosition = "top",
  onConfirm,
  onClose,
  children,
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
        <ModalHeader>
          {title && <Title>{title}</Title>}
          {closeButtonPosition === "top" && (
            <Button
              type="cancel"
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              <Xmark />
            </Button>
          )}
        </ModalHeader>
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
