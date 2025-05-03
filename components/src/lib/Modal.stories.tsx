import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { within, expect, userEvent, waitFor } from '@storybook/test';
import type { ModalProps } from './Modal.type';
import useModal from './useModal';

const meta: Meta<ModalProps> = {
  title: 'Modal',
  component: Modal,
  args: {
    position: 'center',
    title: '모달 제목',
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

const Wrapper = (args: ModalProps) => {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    alert('동의하고 저장하기 버튼 클릭');
    handleClose();
  };

  const handleAfterOpen = () => {
    console.log('열기 버튼 클릭');
  };

  const ModalContent = () => {
    return (
      <div>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
      </div>
    );
  };

  const ModalActions = () => {
    return (
      <>
        <button onClick={handleClose}>닫기</button>
        <button onClick={handleConfirm}>동의하고 저장하기</button>
      </>
    );
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button onClick={handleOpen}>열기</button>
      <Modal {...args} isOpen={isOpen} onAfterOpen={handleAfterOpen} onClose={handleClose}>
        <ModalContent />
        <ModalActions />
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.findByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    const content = await canvas.findAllByText('모달 내용입니다.');
    expect(content).toBeDefined();
  },
};

export const CenterWithAction: Story = {
  args: {
    position: 'center',
    title: '모달 제목',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = await canvas.findByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    const closeButton = await canvas.findByRole('button', { name: '닫기' });
    expect(closeButton).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '동의하고 저장하기' });
    expect(confirmButton).toBeDefined();

    userEvent.click(confirmButton);
    await waitFor(() => {
      expect(canvas.queryByTestId('modal')).toBeNull();
    });
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    title: '모달 제목',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = await canvas.findByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    expect(modal).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};

export const ESCClose: Story = {
  args: {
    position: 'center',
    title: '모달 제목',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = await canvas.findByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(canvas.queryByTestId('modal')).toBeNull();
    });
  },
};

export const BackdropClose: Story = {
  args: {
    position: 'center',
    title: '모달 제목',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = await canvas.findByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    const backdrop = await canvas.findByTestId('modal-backdrop');
    expect(backdrop).toBeDefined();

    userEvent.click(backdrop);
    await waitFor(() => {
      expect(canvas.queryByTestId('modal')).toBeNull();
    });
  },
};
