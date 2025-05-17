import { useState } from "react";
import Modal, { ModalProps } from "../Modal";
import meta from "./Modal.meta";
import ConfirmModal from "../../ModalPreset/ConfirmModal";

export default {
  ...meta,
  title: "modal/Confirm",
  tags: ["autodocs"],
};

export const ConfirmModalWithButton = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  /**
   * Button 사용 시 닫기 동작
   * -----------------------------
   * Button은 단순 버튼 컴포넌트로, 모달 닫기 기능이 자동으로 연결되지 않음
   * 따라서 onClick 핸들러에 closeModal 함수를 명시적으로 호출해야함
   */
  const handleSubmit = () => {
    alert("카드를 삭제하였습니다.");
    closeModal();
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "카드를 삭제하시겠습니까?" }}
      >
        <p>삭제하면 복구하실 수 없습니다.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "10px",
          }}
        >
          <Modal.Button
            onClick={closeModal}
            variant="secondary"
            style={{ width: "90px" }}
          >
            취소
          </Modal.Button>
          <Modal.Button
            onClick={handleSubmit}
            variant="primary"
            style={{ width: "90px" }}
          >
            확인
          </Modal.Button>
        </div>
      </Modal>
    </>
  );
};

export const ConfirmModalWithActionButtons = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  /**
   * ActionButtons 사용 시 닫기 동작
   * -----------------------------
   * ActionButtons는 Modal 컨텍스트와 통합되어 있어, onClose 함수를 자동으로 호출함
   * ConfirmButton은 사용자 정의 onClick 핸들러(handleSubmit) 실행 후 자동으로 모달을 닫음
   * CancelButton은 항상 자동으로 모달을 닫음
   */
  const handleSubmit = () => alert("카드를 삭제하였습니다.");

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "카드를 삭제하시겠습니까?" }}
      >
        <p>삭제하면 복구하실 수 없습니다.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "10px",
          }}
        >
          <Modal.ActionButtons
            onConfirm={handleSubmit}
            confirmProps={{ style: { width: "90px" } }}
            cancelProps={{ style: { width: "90px" } }}
          />
        </div>
      </Modal>
    </>
  );
};

export const ConfirmModalPreset = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = () => alert("카드를 삭제하였습니다.");

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleSubmit}
        title={{ text: "카드를 삭제하시겠습니까?" }}
      >
        <p>삭제하면 복구하실 수 없습니다.</p>
      </ConfirmModal>
    </>
  );
};
