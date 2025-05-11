import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from '../components/AlertModal';
import { within, expect, userEvent } from '@storybook/test';
import type { AlertModalProps } from '../types/AlertModal.type';
import useModal from '../hooks/useModal';

type AlertModalStoryProps = AlertModalProps & {
  title?: string;
  content?: string;
  confirmText?: string;
};

const meta: Meta<AlertModalStoryProps> = {
  title: 'AlertModal',
  component: AlertModal,
  args: {
    position: 'center',
    title: 'AlertModal 제목',
    content: 'AlertModal 내용',
    confirmText: '확인',
  },
};

export default meta;

type Story = StoryObj<AlertModalStoryProps>;

const Wrapper = (args: AlertModalStoryProps) => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    alert('확인 버튼 클릭');
    handleClose();
  };

  const handleAfterOpen = () => {
    console.log('알림 모달 열림');
  };

  return (
    <>
      <h1>AlertModal Component</h1>
      <button onClick={handleOpen}>알림 열기</button>
      <AlertModal
        {...args}
        isOpen={isOpen}
        onAfterOpen={handleAfterOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '알림 열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('AlertModal 제목');
    expect(title).toBeDefined();

    const content = await canvas.findByText('AlertModal 내용');
    expect(content).toBeDefined();

    const confirmButton = canvas.getByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '알림 열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    expect(dialog).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};
