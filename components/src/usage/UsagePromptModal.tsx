import { Button } from '../lib';
import PromptModal from '../lib/Modal/PromptModal/PromptModal';
import React from 'react';
import useInput from '../lib/hooks/useInput';
import useModal from '../lib/hooks/useModal';

const UsagePromptModal = () => {
  const { isOpened, handleModalOpen, handelModalClose } = useModal();
  const { value, handleChange, resetValue } = useInput();

  return (
    <>
      <Button
        text="PromptModal 열기"
        size="large"
        width="fit"
        onClick={handleModalOpen}
      />
      <PromptModal
        value={value}
        onChange={handleChange}
        isOpened={isOpened}
        closeModal={handelModalClose}
        title="PromptModal"
        content="이것은 입력을 위한 모달입니다. input에 대한 value 설정이 필요합니다."
        handleConfirm={() => {
          alert(`확인\nvalue: ${value}`);
          resetValue();
        }}
      ></PromptModal>
    </>
  );
};

export default UsagePromptModal;
