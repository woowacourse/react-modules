import { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from '../Modal.type';
import useModal from '../hooks/useModal';
import { expect, within, userEvent } from '@storybook/test';
import Modal from '../components/Modal/Modal';

const meta: Meta<ModalProps> = {
  title: 'PromptModal',
  component: Modal,
  args: {
    position: 'center',
    size: 'large',
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

const Wrapper = (args: ModalProps) => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleAfterOpen = () => {
    console.log('열기 버튼 클릭');
  };

  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal.Prompt
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onAfterOpen={handleAfterOpen}
        title="PromptModal"
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.findByRole('button', { name: 'Open' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const title = await canvas.findByText('PromptModal');
    expect(title).toBeDefined();

    const input = await canvas.findByRole('textbox');
    expect(input).toBeDefined();

    const cancelButton = await canvas.findByRole('button', { name: '취소' });
    expect(cancelButton).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '확인' });
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
    const openButton = await canvas.findByRole('button', { name: 'Open' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const title = await canvas.findByText('PromptModal');
    expect(title).toBeDefined();

    const input = await canvas.findByRole('textbox');
    expect(input).toBeDefined();

    const cancelButton = await canvas.findByRole('button', { name: '취소' });
    expect(cancelButton).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    expect(modal).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};

export const medium: Story = {
  args: {
    position: 'center',
    size: 'medium',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.findByRole('button', { name: 'Open' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const title = await canvas.findByText('PromptModal');
    expect(title).toBeDefined();

    const input = await canvas.findByRole('textbox');
    expect(input).toBeDefined();

    const cancelButton = await canvas.findByRole('button', { name: '취소' });
    expect(cancelButton).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    expect(modal).toHaveStyle({
      width: '480px',
    });
  },
};
