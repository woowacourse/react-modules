import React from 'react';
import { Modal } from '../lib';

const AlertModal = ({ isOpen, toggleIsOpen }) => {
  const handleClose = () => {
    toggleIsOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} position="center" size="small" isAnimation duration={300}>
        <Modal.Dimmed onDimmedClick={handleClose} />
        <Modal.Header>
          <Modal.Title title="아이디를 입력해 주세요." />
          <Modal.CloseIcon onClose={handleClose} showCloseIcon={false} />
        </Modal.Header>
        <Modal.Content>
          <div>아이디는 필수로 입력해야 합니다.</div>
        </Modal.Content>
        <Modal.Footer position="row" justifyContent="flex-end">
          <Modal.ConfirmButton size="small" label="확인" onConfirm={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertModal;
