/** @jsxImportSource @emotion/react */
import React, {
  Children,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import {
  closeButton,
  confirmButton,
  modalContentStyle,
  modalHeaderStyle,
  modalStyle,
  titleStyle,
} from "./Modal.style";
import useModalHook from "../useModalHook";

import Xmark from "../assets/images/Xmark.png";

interface ModalProps {
  position: "center" | "bottom";
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  position,
  title,
  children,
  onConfirm,
  onClose,
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
        <div css={modalHeaderStyle}>
          <div css={titleStyle}>{title}</div>
          <button
            css={closeButton}
            onClick={() => {
              action.handleClose();
              if (onClose) onClose();
            }}
          >
            <img src={Xmark} />
          </button>
        </div>
        <div>{children}</div>
        <button
          css={confirmButton}
          onClick={() => {
            action.handleClose();
            if (onConfirm) onConfirm();
          }}
        >
          확인 버튼입니다.
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
