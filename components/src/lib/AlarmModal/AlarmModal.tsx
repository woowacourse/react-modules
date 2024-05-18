import React from "react";
import { Modal } from "..";
import Button from "../common/Button";
import { ModalProps } from "../type";

export const AlertModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, size, modalPosition, closeButtonPosition }) => {
  return (
    <>
      <Modal.Content
        modalPosition={modalPosition}
        closeButtonPosition={closeButtonPosition}
        size={size}
      >
        <Modal.Header title={title} containClose />
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer align="end">
          <Modal.Close>
            <Button backgroundColor="#fff" fontColor="#333" borderColor="#33333340">
              취소
            </Button>
          </Modal.Close>
          <Modal.Close>
            <Button backgroundColor="#333" fontColor="#fff">
              확인
            </Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </>
  );
};

export default AlertModal;
