import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../components/PromptModal';
import { within, expect, userEvent } from '@storybook/test';
import type { PromptModalProps } from '../types/PromptModal.type';
import useModal from '../hooks/useModal';

type PromptModalStoryProps = PromptModalProps & {
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  placeholder?: string;
};

const meta: Meta<PromptModalStoryProps> = {
  title: 'PromptModal',
  component: PromptModal,
  tags: ['autodocs'],
  args: {
    title: 'PromptModal 제목',
    content: 'PromptModal 내용',
    confirmText: '확인',
    cancelText: '취소',
    placeholder: '입력해주세요',
  },
};

export default meta;

type Story = StoryObj<PromptModalStoryProps>;

const Wrapper = (args: PromptModalStoryProps) => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = (inputValue: string) => {
    alert(`확인 버튼 클릭: ${inputValue}`);
    handleClose();
  };

  const handleCancel = () => {
    alert('취소 버튼 클릭');
    handleClose();
  };

  return (
    <>
      <h1>PromptModal Component</h1>
      <button onClick={handleOpen}>PromptModal 열기</button>
      <PromptModal {...args} isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} onCancel={handleCancel} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: 'PromptModal 열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('PromptModal 제목');
    expect(title).toBeDefined();

    const content = await canvas.findByText('PromptModal 내용');
    expect(content).toBeDefined();

    const confirmButton = canvas.getByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();

    const cancelButton = canvas.getByRole('button', { name: '취소' });
    expect(cancelButton).toBeDefined();

    const input = canvas.getByPlaceholderText('입력해주세요');
    expect(input).toBeDefined();

    await userEvent.type(input, '테스트');
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(input).toHaveValue('테스트');
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: 'PromptModal 열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    expect(dialog).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};
