import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './lib/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <div style={{ padding: '20px' }}>This is the modal content.</div>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Storybook Modal',
    position: 'center',
  },
};
