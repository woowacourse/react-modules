import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Type',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.AlertContent>
          <Modal.Title title="아이디를 입력해 주세요." />
          <p>아이디는 필수로 입력해야 합니다.</p>
        </Modal.AlertContent>
      </Modal>
    );
  },
};

export const ConfirmModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.ConfirmContent>
          <Modal.Title title="카드를 삭제하시겠습니까?" />
          <p>삭제하면 복구하실 수 없습니다.</p>
        </Modal.ConfirmContent>
      </Modal>
    );
  },
};

export const PromptModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [inputValue, setInputValue] = useState('');

    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.PromptContent
          inputValue={inputValue}
          setInputValue={setInputValue}
          confirmButton={{
            onClick: () => {
              alert('입력된 정보: ' + inputValue);
            },
          }}>
          <Modal.Title title="쿠폰 번호를 입력해 주세요." />
        </Modal.PromptContent>
      </Modal>
    );
  },
};
