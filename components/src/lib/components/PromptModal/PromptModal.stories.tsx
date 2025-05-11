import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import PromptModal from './PromptModal';

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
    const [{ isPromptOpen }, updateArgs] = useArgs();

    function handleCloseClick() {
      updateArgs({ isPromptOpen: !isPromptOpen });
    }
    return (
      <>
        <button onClick={handleCloseClick}>alert모달</button>
        <PromptModal
          {...args}
          isOpen={isPromptOpen}
          onConfirmClick={handleCloseClick}
          onCloseClick={handleCloseClick}
        />
      </>
    );
  },
};

export const Open: Story = {
  args: {
    size: 'medium',
    title: 'prompt 모달 제목',
    content: 'prompt 모달 내용입니다.',
  },
  render: (args) => {
    function handleCloseClick() {}
    return (
      <>
        <PromptModal
          {...args}
          isOpen={true}
          onConfirmClick={handleCloseClick}
          onCloseClick={handleCloseClick}
        />
      </>
    );
  },
};
