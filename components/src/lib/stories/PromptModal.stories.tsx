import { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from '../Modal.type';
import PromptModal from '../components/Modal/PromptModal';
import useModal from '../hooks/useModal';
import { expect, within, userEvent } from '@storybook/test';

const meta: Meta<ModalProps> = {
  title: 'PromptModal',
  component: PromptModal,
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

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <PromptModal {...args} isOpen={isOpen} onClose={handleClose} onAfterOpen={handleAfterOpen}>
        <PromptModal.Header title="PromptModal" />
      </PromptModal>
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
