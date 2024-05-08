import React from 'react';
import { Modal } from '../lib';

const ConfirmModal = ({ isOpen, toggleIsOpen }) => {
  const handleClose = () => {
    toggleIsOpen();
  };

  const handleConfirm = () => {
    alert('입력 완료!');
    toggleIsOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} position="center" isAnimation duration={300} size="medium">
        <Modal.Dimmed onDimmedClick={handleClose} />
        <Modal.Header>
          <Modal.Title title="카드를 삭제하시겠습니까?" />
          <Modal.CloseIcon onClose={handleClose} showCloseIcon={false} />
        </Modal.Header>
        <Modal.Content>
          <div>삭제하면 복구하실 수 없습니다.</div>
        </Modal.Content>
        <Modal.Footer position="row" justifyContent="flex-end">
          <Modal.CloseButton size="small" label="취소" onClose={handleClose} />
          <Modal.ConfirmButton size="small" label="확인" onConfirm={handleConfirm} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
