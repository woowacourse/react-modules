import { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from '../Modal.type';
import AlertModal from '../components/Modal/AlertModal';
import useModal from '../hooks/useModal';
import { expect, within, userEvent } from '@storybook/test';

const meta: Meta<ModalProps> = {
  title: 'AlertModal',
  component: AlertModal,
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
      <AlertModal {...args} isOpen={isOpen} onClose={handleClose} onAfterOpen={handleAfterOpen}>
        <AlertModal.Header title="AlertModal" />
        <AlertModal.Body>
          <div>AlertModal 내용입니다.</div>
        </AlertModal.Body>
      </AlertModal>
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

    const title = await canvas.findByText('AlertModal');
    expect(title).toBeDefined();

    const content = await canvas.findByText('AlertModal 내용입니다.');
    expect(content).toBeDefined();

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

    const title = await canvas.findByText('AlertModal');
    expect(title).toBeDefined();

    const content = await canvas.findByText('AlertModal 내용입니다.');
    expect(content).toBeDefined();

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

    const title = await canvas.findByText('AlertModal');
    expect(title).toBeDefined();

    const content = await canvas.findByText('AlertModal 내용입니다.');
    expect(content).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '확인' });
    expect(confirmButton).toBeDefined();

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    expect(modal).toHaveStyle({
      width: '480px',
    });
  },
};
