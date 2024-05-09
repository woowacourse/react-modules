import AlertModal from '../lib/Modal/AlertModal/AlertModal';
import { Button } from '../lib';
import React from 'react';
import useModal from '../lib/hooks/useModal';

const UsageAlertModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="AlertModal 열기"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <AlertModal
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="AlertModal"
        content="이것은 알림을 위한 모달입니다. 오로지 확인 버튼만 있습니다."
        handleConfirm={() => {
          alert('확인');
        }}
      ></AlertModal>
    </>
  );
};

export default UsageAlertModal;
