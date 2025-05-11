import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import AlertModal from './AlertModal';

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
    const [{ isAlertOpen }, updateArgs] = useArgs();

    function handleCloseClick() {
      updateArgs({ isAlertOpen: !isAlertOpen });
    }
    return (
      <>
        <button onClick={handleCloseClick}>alert모달</button>
        <AlertModal
          {...args}
          isOpen={isAlertOpen}
          onCloseClick={handleCloseClick}
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
        <AlertModal
          {...args}
          isOpen={true}
          onCloseClick={handleCloseClick}
          onConfirmClick={handleCloseClick}
        />
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
    function handleCloseClick() {}
    return (
      <>
        <AlertModal
          {...args}
          isOpen={true}
          onCloseClick={handleCloseClick}
          onConfirmClick={handleCloseClick}
        />
      </>
    );
  },
};
