import { Button, CustomModal, useModal } from '../lib';

import CustomModalCloseButton from '../lib/Modal/CustomModal/CustomModalCloseButton';
import React from 'react';

const UsageCustomModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="CustomModal 열기"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <CustomModal isOpened={isOpened} closeModal={handelModalClose}>
        <CustomModal.Header>
          <CustomModal.Title>제목</CustomModal.Title>
          <CustomModalCloseButton closeModal={handelModalClose} />
        </CustomModal.Header>
        <CustomModal.Body>
          <div>안녕하세요</div>
          <div>이곳에 원하는 컴포넌트들을 넣어줄 수 있습니다.</div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <Button text="닫기" onClick={handelModalClose} />
        </CustomModal.Footer>
      </CustomModal>
    </>
  );
};

export default UsageCustomModal;
