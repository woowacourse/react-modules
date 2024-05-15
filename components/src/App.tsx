import React, { useState } from "react";
import { Modal, AlertModal, ConfirmModal, PromptModal } from "chlwlstlf-modal";

const App = () => {
  return (
    <>
      <DefaultSample></DefaultSample>
      <AlertSample></AlertSample>
      <ConfirmSample></ConfirmSample>
      <PromptSample></PromptSample>
    </>
  );
};

export const DefaultSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Default Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
      >
        <Modal.Header>
          <Modal.Title>기본 모달입니다.</Modal.Title>
          <Modal.CloseButton onClick={handleClose}></Modal.CloseButton>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export const AlertSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Alert Modal</button>

      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="아이디를 입력해 주세요."
        message="아이디는 필수로 입력해야 합니다."
      ></AlertModal>
    </div>
  );
};

export const ConfirmSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleConfirm = () => {
    alert("확인되었습니다.");
    handleClose();
  };
  const handleCancel = () => {
    alert("취소되었습니다.");
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Confirm Modal</button>

      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        title="카드를 삭제하시겠습니까?"
        message="삭제하면 복구하실 수 없습니다."
      ></ConfirmModal>
    </div>
  );
};

export const PromptSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };
  const handleSubmit = () => {
    alert(`${couponCode}를 입력하였습니다.`);
    handleClose();
    setCouponCode("");
  };
  const handleCancel = () => {
    alert("취소되었습니다.");
    handleClose();
    setCouponCode("");
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Prompt Modal</button>

      <PromptModal
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        title="쿠폰 번호를 입력해 주세요."
        value={couponCode}
        onChange={handleChange}
      ></PromptModal>
    </div>
  );
};

export default App;
