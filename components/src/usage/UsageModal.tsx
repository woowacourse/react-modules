import { Button, Modal } from '../lib';

import React from 'react';
import useModal from '../lib/hooks/useModal';

const UsageModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();

  return (
    <>
      <Button
        text="Modal 열기"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <Modal
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="안녕하세요, 하루 💙"
        description="여기는 description 이에요."
        size="small"
        children={
          <>
            <div style={{ backgroundColor: '#f3e3da', height: '100px' }}>
              여기는 children 이에요.
            </div>
          </>
        }
        buttonPosition="column"
        primaryColor="#F66F00"
        primaryButton={{
          text: '확인',
          onClick: () => {
            alert('확인');
          },
        }}
        secondaryButton={{
          text: '닫기',
          onClick: handelModalClose,
        }}
      />
    </>
  );
};

export default UsageModal;
