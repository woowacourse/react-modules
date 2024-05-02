import { Position } from "./Modal.d";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { css } from "@emotion/css";

export interface ModalProps {
  children?: ReactNode;
  position?: Position;
  title?: string;
  description?: string;
  close?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  isOpenState: ReturnType<typeof useState<boolean>>;
  onOpen?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
}

const Modal = ({
  children,
  position = "center",
  title = "",
  description = "",
  close = false,
  cancelLabel,
  confirmLabel,
  isOpenState,
  onOpen,
  onConfirm,
  onClose,
}: ModalProps) => {
  const [isOpen, setIsOpen] = isOpenState;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    if (isOpen && onOpen) onOpen();
    if (!isOpen && onClose) onClose();
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
    handleClose();
  };

  return (
    isOpen && (
      <>
        <div className={css(modalContainerCSS, positionCSS[position])}>
          <div className={css(headerContainerCSS)}>
            <h2 className={css(titleCSS)}>{title}</h2>
            {close && (
              <button
                className={css(closeButtonCSS)}
                onClick={handleClose}
              >
                ×
              </button>
            )}
          </div>
          <div>
            <p className={css(descriptionCSS)}>{description}</p>
          </div>
          {children && <div>{children}</div>}
          {(confirmLabel || cancelLabel) && (
            <div className={css(buttonContainerCSS)}>
              {confirmLabel && (
                <button
                  className={css(buttonCSS, confirmButtonCSS)}
                  onClick={handleConfirm}
                >
                  {confirmLabel}
                </button>
              )}
              {cancelLabel && (
                <button
                  className={css(buttonCSS, cancelButtonCSS)}
                  onClick={handleClose}
                >
                  {cancelLabel}
                </button>
              )}
            </div>
          )}
        </div>
        <div
          className={css(backdropCSS)}
          onClick={handleClose}
        />
      </>
    )
  );
};

const modalContainerCSS = css`
  transform: translateX(-50%);
  left: 50%;
  width: 300px;
  gap: 16px;
  z-index: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  background-color: white;
`;

const headerContainerCSS = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const titleCSS = css`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

const descriptionCSS = css`
  color: #333333;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

const buttonContainerCSS = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const buttonCSS = css`
  aspect-ratio: 8;
  height: auto;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: 2px solid #333333;
`;

const confirmButtonCSS = css`
  color: white;
  background-color: #333333;
`;

const cancelButtonCSS = css`
  color: #8b95a1;
  background-color: white;
`;

const closeButtonCSS = css`
  padding: 0;
  font-size: 24px;
  width: 24px;
  height: 24px;
  line-height: 0px;
  color: #333333;
  background-color: white;
`;

const backdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const positionCSS: Record<Position, string> = {
  top: "width:100%; top:0; border-radius: 0 0 8px 8px;",
  center: "top:50%; transform:translate(-50%,-50%); border-radius: 8px;",
  bottom: "width:100%; bottom:0; border-radius: 8px 8px 0 0;",
} as const;

export default Modal;
