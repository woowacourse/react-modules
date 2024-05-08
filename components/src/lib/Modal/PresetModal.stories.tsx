// decorator override가 무시 안되어 별도의 파일로 분리함

import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '..';
import Button from '../components/Button/Button';
import { useState } from 'react';

const meta = {
  title: 'PresetModal',
  component: Modal,
  parameters: {
    controls: { exclude: ['close', 'children'] },
  },

  argTypes: {
    position: {
      options: ['center', 'bottom', 'top'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    backdropType: {
      options: ['transparent', 'blur', 'opaque'],
      control: { type: 'select' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    animation: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const AlertModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const storyArgs = {
      isOpen: isOpen,
      close: () => setIsOpen(false),
    };

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(true)} />
        <Modal {...storyArgs}>
          <Modal.Header>
            <Modal.Title>아이디를 입력해주세요.</Modal.Title>
          </Modal.Header>
          <Modal.Body>아이디는 필수로 입력해야 합니다.</Modal.Body>
          <Modal.Footer position="right">
            <Modal.Button text="확인" onClick={() => setIsOpen(false)}></Modal.Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const ConfirmModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const storyArgs = {
      isOpen: isOpen,
      close: () => setIsOpen(false),
    };

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
        <Modal {...storyArgs}>
          <Modal.Header>
            <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
          </Modal.Header>
          <Modal.Body>삭제하면 복구하실 수 없습니다.</Modal.Body>
          <Modal.Footer direction="row" position="right">
            <Modal.Button text="취소" variants="border" color="none" onClick={() => setIsOpen(false)}></Modal.Button>
            <Modal.Button text="확인"></Modal.Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};

export const PromptModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const storyArgs = {
      isOpen: isOpen,
      close: () => setIsOpen(false),
    };

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
        <Modal {...storyArgs}>
          <Modal.Header>
            <Modal.Title>쿠폰 번호를 입력해주세요.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Input fullWidth onChange={(e) => setValue(e.target.value)} value={value} />
          </Modal.Body>
          <Modal.Footer direction="row" position="right">
            <Modal.Button text="취소" variants="border" color="none" onClick={() => setIsOpen(false)}></Modal.Button>
            <Modal.Button text="확인"></Modal.Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};
