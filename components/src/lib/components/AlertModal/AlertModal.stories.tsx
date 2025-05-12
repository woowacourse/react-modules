import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal';
import { ModalProvider } from '../Modal/ModalProvider';
import { Modal } from '../..';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
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
type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    size: 'medium',
    title: 'alert 모달 제목',
    content: 'alert 모달 내용입니다.',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>alert모달</Modal.Trigger>
        <AlertModal {...args} />
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
        <Modal.Trigger>alert모달</Modal.Trigger>
        <AlertModal {...args} />
      </>
    );
  },
};
