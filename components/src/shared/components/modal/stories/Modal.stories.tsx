import { Meta, StoryObj } from '@storybook/react';
import Modal from '../ui/Modal';
import useBoolean from '../../../../hooks/useBoolean';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    closeModal: () => alert('Modal closed'),
    position: 'center',
    maxWidth: 500,
    title: 'Modal Title',
    isVisibleCloseButton: true,
    children: <div>Modal Content</div>,
  },
  render: () => {
    const { value, setTrue, setFalse } = useBoolean(false);
    return (
      <>
        <button onClick={setTrue}>Open Modal</button>
        {value && (
          <Modal
            closeModal={setFalse}
            position="center"
            maxWidth={500}
            title="Modal Title"
            isVisibleCloseButton={true}
          >
            <div>Modal Content</div>
          </Modal>
        )}
      </>
    );
  },
};

export const Bottom: Story = {
  args: {
    closeModal: () => alert('Modal closed'),
    position: 'bottom',
    maxWidth: 500,
    title: 'Modal Title',
    isVisibleCloseButton: true,
    children: <div>Modal Content</div>,
  },
  render: () => {
    const { value, setTrue, setFalse } = useBoolean(false);
    return (
      <>
        <button onClick={setTrue}>Open Modal</button>
        {value && (
          <Modal
            closeModal={setFalse}
            position="bottom"
            maxWidth={500}
            title="Modal Title"
            isVisibleCloseButton={true}
          >
            <div>Modal Content</div>
          </Modal>
        )}
      </>
    );
  },
};
