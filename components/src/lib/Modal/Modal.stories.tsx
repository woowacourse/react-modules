import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import ModalButton from './ModalButton/ModalButton';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    controls: { exclude: ['children', 'footerButtons', 'onClose'] },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 테스트',
    position: 'center',
    hasCloseButton: true,
    footerButtons: [
      <ModalButton
        key="primary-button"
        text="Primary Button"
        style="primary"
        onClick={() => alert('Clicked primary button!')}
      />,
      <ModalButton
        key="secondary-button"
        text="Secondary Button"
        style="secondary"
        onClick={() => alert('Clicked secondary button!')}
      />,
    ],
    onClose: () => alert('"onClose" method called!'),
    children: null,
  },
};

export const CenterModal: Story = {
  args: { ...Default.args, position: 'center' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>contents</div>
      </Modal>
    );
  },
};

export const BottomModal: Story = {
  args: { ...Default.args, position: 'bottom' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>contents</div>
      </Modal>
    );
  },
};
