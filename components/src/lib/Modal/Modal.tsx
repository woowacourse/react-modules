/** @jsxImportSource @emotion/react */
import React, { Children, MutableRefObject, forwardRef, useEffect, useRef } from "react";
import { ModalStyle } from "./Modal.style";
import useModalHook from "../useModalHook";

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
    <dialog ref={ref} css={ModalStyle}>
      <div>
        <div>
          <div>{title}</div>
          <button
            onClick={() => {
              action.handleClose();
              if (onClose) onClose();
            }}
          >
            취소 버튼입니다.
          </button>
          <button
            onClick={() => {
              action.handleClose();
              if (onConfirm) onConfirm();
            }}
          >
            확인 버튼입니다.
          </button>
        </div>
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
