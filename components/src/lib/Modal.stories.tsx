import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { within, expect, userEvent, waitFor } from '@storybook/test';
import type { ModalProps } from './Modal.type';
import { useState } from 'react';

const meta: Meta<ModalProps> = {
  title: 'Modal',
  component: Modal,
  args: {
    position: 'center',
    content: '모달 내용입니다.',
    title: '모달 제목',
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

const Wrapper = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => {
    console.log('모달이 열렸습니다.');
  };

  const handleClose = () => {
    console.log('모달이 닫혔습니다.');
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log('모달이 확인되었습니다.');
    setIsOpen(false);
  };

  const actionDefs = [
    { label: '닫기', style: '', onClick: handleClose },
    { label: '동의하고 저장하기', style: '', onClick: handleConfirm },
  ];

  return <>{isOpen && <Modal onOpen={handleOpen} {...args} onClose={handleClose} actions={actionDefs} />}</>;
};

export const Default: Story = {
  render: (args) => <Modal {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    const content = await canvas.findByText('모달 내용입니다.');
    expect(content).toBeDefined();
  },
};

export const CenterWithAction: Story = {
  args: {
    position: 'center',
    content: '모달 내용입니다.',
    title: '모달 제목',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    const closeButton = await canvas.findByRole('button', { name: '닫기' });
    expect(closeButton).toBeDefined();

    const confirmButton = await canvas.findByRole('button', { name: '동의하고 저장하기' });
    expect(confirmButton).toBeDefined();

    userEvent.click(closeButton);
    await waitFor(() => {
      expect(canvas.queryByTestId('modal')).toBeNull();
    });
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    content: '모달 내용입니다.',
    title: '모달 제목',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const modal = await canvas.findByTestId('modal');
    expect(modal).toBeDefined();

    expect(modal).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};
