import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../components/ConfirmModal';
import { within, expect, userEvent } from '@storybook/test';
import type { ConfirmModalProps } from '../types/ConfirmModal.type';
import useModal from '../hooks/useModal';

type ConfirmModalStoryProps = ConfirmModalProps & {
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
};

const meta: Meta<ConfirmModalStoryProps> = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  args: {
    title: 'ConfirmModal 제목',
    content: 'ConfirmModal 내용',
    confirmText: '확인',
    cancelText: '취소',
  },
};

export default meta;

type Story = StoryObj<ConfirmModalStoryProps>;

const Wrapper = (args: ConfirmModalStoryProps) => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    alert('확인 버튼 클릭');
    handleClose();
  };

  const handleCancel = () => {
    alert('취소 버튼 클릭');
    handleClose();
  };

  return (
    <>
      <h1>ConfirmModal Component</h1>
      <button onClick={handleOpen}>ConfirmModal 열기</button>
      <ConfirmModal {...args} isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} onCancel={handleCancel} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: 'ConfirmModal 열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('ConfirmModal 제목');
    expect(title).toBeDefined();

    const content = await canvas.findByText('ConfirmModal 내용');
    expect(content).toBeDefined();

    const confirmButton = canvas.getByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();

    const cancelButton = canvas.getByRole('button', { name: '취소' });
    expect(cancelButton).toBeDefined();
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: 'ConfirmModal 열기' });
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
