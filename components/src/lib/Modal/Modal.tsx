/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { modalContentStyle, modalStyle } from "./Modal.style";
import useModalHook from "../useModalHook";
import ConfirmButton from "../ConfirmButton/ConfirmButton";

import ModalHeader from "../ModalHeader/ModalHeader";
import CloseButton from "../CloseButton/CloseButton";
import Title from "../Title/Title";

interface ModalProps {
  position: "center" | "bottom";
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ position, title, children, onConfirm, onClose }) => {
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
          <Title>{title}</Title>
          <CloseButton handleClose={action.handleClose} onClose={onClose} />
        </ModalHeader>
        <div>{children}</div>
        <ConfirmButton handleClose={action.handleClose} onConfirm={onConfirm} />
      </div>
    </dialog>
  );
};

export default Modal;
