import { useEffect } from "react";
import { ReactNode } from "react";
import { css } from "@emotion/css";

export type Position = "top" | "bottom" | "center";

export interface ModalProps {
  children?: ReactNode;
  position?: Position;
  title?: string;
  description?: string;
  close?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
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

  useEffect(() => {
    if (isOpen && onOpen) onOpen();
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
    handleClose();
  };

  return isOpen ? (
    <>
      <div className={css(modalContainerCSS, positionCSS[position])}>
        <div className={css(headerContainerCSS)}>
          <h2 className={css(titleCSS)}>{title}</h2>
          {close && (
            <button className={css(closeButtonCSS)} onClick={handleClose}>
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
              <button className={css(buttonCSS, confirmButtonCSS)} onClick={handleConfirm}>
                {confirmLabel}
              </button>
            )}
            {cancelLabel && (
              <button className={css(buttonCSS, cancelButtonCSS)} onClick={handleClose}>
                {cancelLabel}
              </button>
            )}
          </div>
        )}
      </div>
      <div className={css(backdropCSS)} onClick={handleClose} />
    </>
  ) : null;
};

const modalContainerCSS = css`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 24px 32px;
  position: fixed;
  left: 50%;
  z-index: 1;
  width: 300px;
  background-color: var(--main-bg-color);
  transform: translateX(-50%);
`;

const headerContainerCSS = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const titleCSS = css`
  font-size: var(--title-font-size);
  font-weight: 700;
  color: var(--title-font-color);

  text-align: left;
`;

const descriptionCSS = css`
  font-size: var(--desc-font-size);
  font-weight: 400;
  color: var(--desc-font-color);
  text-align: left;
`;

const buttonContainerCSS = css`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const buttonCSS = css`
  padding: 5px;
  border: 2px solid var(--color-gray-300);
  width: 100%;
  height: auto;
  font-size: var(--btn-font-size);
  font-weight: 700;
  text-align: center;
  aspect-ratio: 8;
  border-radius: 5px;
  box-sizing: border-box;
`;

const confirmButtonCSS = css`
  background-color: var(--confirm-btn-bg-color);
  color: var(--confirm-btn-font-color);
`;

const cancelButtonCSS = css`
  background-color: var(--cancel-btn-bg-color);
  color: var(--cancel-btn-font-color);
`;

const closeButtonCSS = css`
  padding: 0;
  font-size: 24px;
  width: 24px;
  height: 24px;
  line-height: 0px;
  color: var(--color-gray-300);
  background-color: rgba(0, 0, 0, 0);
`;

const backdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: var(--backdrop-bg-color);
`;

const positionCSS: Record<Position, string> = {
  top: "width:100%; top:0; border-radius: 0 0 8px 8px;",
  center: "top:50%; transform:translate(-50%,-50%); border-radius: 8px;",
  bottom: "width:100%; bottom:0; border-radius: 8px 8px 0 0;",
} as const;

export default Modal;
