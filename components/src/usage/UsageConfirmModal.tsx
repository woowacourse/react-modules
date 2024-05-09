import { Button } from '../lib';
import ConfirmModal from '../lib/Modal/ConfirmModal/ConfirmModal';
import React from 'react';
import useModal from '../lib/hooks/useModal';

const UsageConfirmModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="ConfirmModal 열기"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <ConfirmModal
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="ConfirmModal"
        content="이것은 확인을 위한 모달입니다. 취소 버튼과 확인 버튼이 있습니다."
        handleConfirm={() => {
          alert('확인');
        }}
      ></ConfirmModal>
    </>
  );
};

export default UsageConfirmModal;
