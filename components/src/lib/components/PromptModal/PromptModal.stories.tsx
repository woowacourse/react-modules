import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';
import { ModalProvider } from '../Modal/ModalProvider';
import { Modal } from '../..';

const meta: Meta<typeof PromptModal> = {
  title: 'Components/PromptModal',
  component: PromptModal,
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
type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  args: {
    size: 'medium',
    title: 'prompt 모달 제목',
    content: 'prompt 모달 내용입니다.',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>prompt모달</Modal.Trigger>
        <PromptModal {...args} />
      </>
    );
  },
};
