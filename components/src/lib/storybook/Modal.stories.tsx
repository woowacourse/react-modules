import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';
import { within, expect, userEvent, waitFor } from '@storybook/test';
import type { ModalProps } from '../types/Modal.type';
import useModal from '../hooks/useModal';

type ModalStoryProps = ModalProps & {
  title?: string;
  showCloseButton?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const meta: Meta<ModalStoryProps> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    position: 'center',
    title: '모달 제목',
  },
};

export default meta;

type Story = StoryObj<ModalStoryProps>;

const Wrapper = (args: ModalStoryProps) => {
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
        <Modal.Header title={args.title} showCloseButton={args.showCloseButton} />
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
        <Modal.Footer>
          <ModalActions />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    const content = canvas.getAllByText('모달 내용입니다.');
    expect(content).toBeDefined();
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);
  },
};

export const CenterWithAction: Story = {
  args: {
    position: 'center',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog', { name: '모달 제목' });
    expect(modal).toBeDefined();

    const closeButton = canvas.getByRole('button', { name: '닫기' });
    expect(closeButton).toBeDefined();

    const confirmButton = canvas.getByRole('button', { name: '동의하고 저장하기' });
    expect(confirmButton).toBeDefined();

    await userEvent.click(confirmButton);
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', { name: '모달 제목' })).toBeNull();
    });
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    showCloseButton: true,
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    expect(dialog).toHaveStyle({
      position: 'absolute',
      bottom: '0',
    });
  },
};

export const ESCClose: Story = {
  args: {
    position: 'center',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    await await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', { name: '모달 제목' })).toBeNull();
    });
  },
};

export const BackdropClose: Story = {
  args: {
    position: 'center',
  },
  render: (args) => <Wrapper {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', { name: '열기' });
    expect(openButton).toBeDefined();
    await userEvent.click(openButton);

    const dialog = await canvas.findByRole('dialog');
    expect(dialog).toBeDefined();

    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();

    const backdrop = canvas.getByLabelText('modal-backdrop');
    expect(backdrop).toBeDefined();

    await userEvent.click(backdrop);
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', { name: '모달 제목' })).toBeNull();
    });
  },
};
