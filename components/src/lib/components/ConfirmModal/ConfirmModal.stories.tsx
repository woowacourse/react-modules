import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';
import { Modal } from '../..';
import { ModalProvider } from '../Modal/ModalProvider';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    alertActionsWidth: {
      control: 'number',
    },
  },
  args: {
    size: 'medium',
  },
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <Story />
        </ModalProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    size: 'medium',
    title: 'confirm 모달 제목',
    content: 'confirm 모달 내용입니다.',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>confirm모달</Modal.Trigger>
        <ConfirmModal {...args} />
      </>
    );
  },
};

export const AlertWidth: Story = {
  args: {
    size: 'medium',
    title: 'alert 모달 제목',
    content: 'alert 모달 내용입니다.',
    alertActionsWidth: 172,
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>confirm모달</Modal.Trigger>
        <ConfirmModal {...args} />
      </>
    );
  },
};
