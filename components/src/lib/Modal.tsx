import { Position } from "./Modal.d";
import { ReactNode } from "react";
import { css } from "@emotion/css";

const ModalPositioner = ({ position, children }: { position: Position; children: ReactNode }) => {
  return <div className={css(modalContainerCSS, positionCSS[position])}>{children}</div>;
};
const ModalHeader = ({ title, close, onClose }: { title: string; close: boolean; onClose: () => void }) => {
  return (
    <div className={css(headerContainerCSS)}>
      <p className={css(titleCSS)}>{title}</p>
      {close && (
        <button
          className={css(closeButtonCSS)}
          onClick={onClose}
        >
          X
        </button>
      )}
    </div>
  );
};

const ModalContent = ({ description, children }: { description: string; children: ReactNode }) => {
  return (
    <>
      <p className={css(descriptionCSS)}>{description}</p>
      {children && <div>{children}</div>}
    </>
  );
};

interface ModalFooterProps {
  cancelLabel?: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ModalFooter = ({ cancelLabel, confirmLabel, onConfirm, onClose }: ModalFooterProps) => {
  return (
    (confirmLabel || cancelLabel) && (
      <div className={css(buttonContainerCSS)}>
        {confirmLabel && (
          <button
            className={css(buttonCSS, confirmButtonCSS)}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        )}
        {cancelLabel && (
          <button
            className={css(buttonCSS, cancelButtonCSS)}
            onClick={onClose}
          >
            {cancelLabel}
          </button>
        )}
      </div>
    )
  );
};

interface ModalProps {
  children?: ReactNode;
  position?: Position;
  title?: string;
  description?: string;
  close?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;

  isOpen: boolean;
  confirmModal: () => void;
  closeModal: () => void;
}

const Modal = ({
  children,
  position = "center",
  title = "",
  description = "",
  close = false,
  cancelLabel,
  confirmLabel,

  isOpen,
  closeModal,
  confirmModal,
}: ModalProps) => {
  return (
    isOpen && (
      <>
        <ModalPositioner position={position}>
          <ModalHeader
            title={title}
            close={close}
            onClose={closeModal}
          />
          <ModalContent description={description}>{children}</ModalContent>
          <ModalFooter
            cancelLabel={cancelLabel}
            confirmLabel={confirmLabel}
            onConfirm={confirmModal}
            onClose={closeModal}
          />
        </ModalPositioner>
        <div
          className={css(backdropCSS)}
          onClick={closeModal}
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
