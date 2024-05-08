import React, { useState } from 'react';
import { Modal } from '../lib';

const PromptModal = ({ isOpen, toggleIsOpen }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClose = () => {
    toggleIsOpen();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    alert(`${inputValue} 값 입력 완료!`);
    toggleIsOpen();
    setInputValue('');
  };

  return (
    <>
      <Modal isOpen={isOpen} position="center" isAnimation duration={300} size="medium">
        <Modal.Dimmed onDimmedClick={handleClose} />
        <Modal.Header>
          <Modal.Title title="쿠폰 번호를 입력해 주세요." />
          <Modal.CloseIcon onClose={handleClose} showCloseIcon={false} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Input
            value={inputValue}
            onChange={handleChange}
            placeholder="CGEXX46Z"
            autoFocus
          />
        </Modal.Content>
        <Modal.Footer position="row" justifyContent="flex-end">
          <Modal.CloseButton size="small" label="취소" onClose={handleClose} />
          <Modal.ConfirmButton size="small" label="확인" onConfirm={handleConfirm} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PromptModal;
