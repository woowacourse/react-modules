import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import { useState } from 'react';
import TextButton from '../lib/components/TextButton';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
  args: {},
};

export const TitleModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const NoOverlayCloseModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.Content>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const ModalWithBottomCancelButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
          <TextButton
            text="취소"
            color="#8B95A1"
            backgroundColor="transparent"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </Modal.Content>
      </Modal>
    );
  },
};

export const BottomModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content position="bottom">
          <Modal.Title title="하단 모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

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

export const SmallModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="small">
          <Modal.Title title="Size: small 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const MediumModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="medium">
          <Modal.Title title="Size: medium 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="large">
          <Modal.Title title="Size: large 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};
