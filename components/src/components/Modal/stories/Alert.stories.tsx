import { useState } from "react";
import Modal, { ModalProps } from "../Modal";
import meta from "./Modal.meta";
import { Default } from "./Styles.stories";

export default {
  ...meta,
  title: "modal/Alert",
  tags: ["autodocs"],
};

export const AlertModalWithButton = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "아이디를 입력해 주세요." }}
      >
        <p>아이디는 필수로 입력해야 합니다.</p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Modal.Button style={{ width: "90px" }} onClick={closeModal}>
            확인
          </Modal.Button>
        </div>
      </Modal>
    </>
  );
};

export const AlertModalWithConfirmButton = (args: ModalProps) => (
  <Default {...args} title={{ text: "아이디를 입력해 주세요." }}>
    <p>아이디는 필수로 입력해야 합니다.</p>
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <Modal.ConfirmButton style={{ width: "90px" }} />
    </div>
  </Default>
);
