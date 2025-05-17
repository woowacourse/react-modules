import { useState } from "react";
import Modal, { ModalProps } from "../Modal";
import meta from "./Modal.meta";
import PromptModal from "../../ModalPreset/PromptModal";

export default {
  ...meta,
  title: "modal/Prompt",
  tags: ["autodocs"],
};

export const PromptModalWithButton = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
    alert(`입력된 쿠폰 번호: ${inputValue}`);
    closeModal();
    setInputValue("");
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
        title={{ text: "쿠폰 번호를 입력해 주세요." }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <Modal.Input
            placeholder="CGEXX46Z"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
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
        </div>
      </Modal>
    </>
  );
};

export const PromptModalWithActionButtons = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
  const handleSubmit = () => {
    alert(`입력된 쿠폰 번호: ${inputValue}`);
    setInputValue("");
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
        title={{ text: "쿠폰 번호를 입력해 주세요." }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <Modal.Input
            placeholder="CGEXX46Z"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
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
        </div>
      </Modal>
    </>
  );
};

export const PromptModalPreset = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = () => {
    alert(`입력된 쿠폰 번호: ${inputValue}`);
    setInputValue("");
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <PromptModal
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleSubmit}
        placeholder="CGEXX46Z"
        title={{ text: "쿠폰 번호를 입력해 주세요." }}
      />
    </>
  );
};
