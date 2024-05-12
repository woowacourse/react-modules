import React, { useState } from "react";
import { Modal } from "./lib";

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
        <Modal.CloseButton onClick={handleClose}></Modal.CloseButton>
        <Modal.Title>기본 모달입니다.</Modal.Title>
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

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
        type="alert"
      >
        <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
        <Modal.Message>아이디는 필수로 입력해야 합니다.</Modal.Message>
      </Modal>
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

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        position="center"
        type="confirm"
      >
        <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
        <Modal.Message>삭제하면 복구하실 수 없습니다.</Modal.Message>
      </Modal>
    </div>
  );
};

export const PromptSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleChange = (e) => {
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

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        position="center"
        type="prompt"
      >
        <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
        <Modal.Input
          value={couponCode}
          onChange={handleChange}
        ></Modal.Input>
      </Modal>
    </div>
  );
};

export default App;
