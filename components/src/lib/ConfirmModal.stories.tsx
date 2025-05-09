import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import ConfirmModal from './ConfirmModal';

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
  },
  args: {
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    size: 'medium',
    title: 'alert 모달 제목',
    content: 'alert 모달 내용입니다.',
  },
  render: (args) => {
    const [{ isAlertOpen }, updateArgs] = useArgs();

    function handleCloseClick() {
      updateArgs({ isAlertOpen: !isAlertOpen });
    }
    return (
      <>
        <button onClick={handleCloseClick}>alert모달</button>
        <ConfirmModal
          {...args}
          isOpen={isAlertOpen}
          onConfirmClick={handleCloseClick}
        />
      </>
    );
  },
};

export const Open: Story = {
  args: {
    size: 'medium',
    title: 'alert 모달 제목',
    content: 'alert 모달 내용입니다.',
  },
  render: (args) => {
    function handleCloseClick() {}
    return (
      <>
        <ConfirmModal
          {...args}
          isOpen={true}
          onConfirmClick={handleCloseClick}
        />
      </>
    );
  },
};
