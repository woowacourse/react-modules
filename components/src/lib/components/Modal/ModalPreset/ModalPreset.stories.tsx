import type { Meta, StoryObj } from '@storybook/react';

import { ChangeEvent, useState } from 'react';
import { Modal } from '../../..';
import { AlertModal as MyAlertModal, AlertModalProps } from './AlertModal';
import { ConfirmModal as MyConfirmModal, ConfirmModalProps } from './ConfirmModal';
import { PromptModal as MyPromptModal, PromptModalProps } from './PromptModal';

import Button from '../../common/Button/Button';

const meta = {
  title: 'ModalPreset',
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
    customWidth: {
      control: { type: 'text' },
    },
    customHeight: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type AlertModalStory = StoryObj<AlertModalProps>;
type ConfirmModalStory = StoryObj<ConfirmModalProps>;
type PromptModalStory = StoryObj<PromptModalProps>;

//
export const AlertModal: AlertModalStory = {
  args: {
    confirmButtonProps: {
      size: 'lg',
      fullWidth: true,
    },
  },
  render: (_, context) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(true)} />
        <MyAlertModal
          {...context.args}
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          title="아이디를 입력해주세요."
          description="아이디는 필수로 입력해야 합니다."
          onConfirm={() => setIsOpen(false)}
        />
      </div>
    );
  },
};

export const ConfirmModal: ConfirmModalStory = {
  args: {
    confirmButtonProps: {
      size: 'sm',
      fullWidth: true,
    },
    cancelButtonProps: {
      size: 'sm',
      fullWidth: true,
    },
  },
  render: (_, context) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
        <MyConfirmModal
          {...context.args}
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          title="카드를 삭제하시겠습니까?"
          description="삭제하면 복구하실 수 없습니다."
          onConfirm={() => setIsOpen(false)}
        />
      </div>
    );
  },
};

export const PromptModal: PromptModalStory = {
  render: (_, context) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div style={{ height: '500px' }}>
        <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
        <MyPromptModal
          {...context.args}
          onConfirm={() => setIsOpen(false)}
          value={value}
          onChange={handleChange}
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          title="쿠폰 번호를 입력해 주세요."
        />
      </div>
    );
  },
};
