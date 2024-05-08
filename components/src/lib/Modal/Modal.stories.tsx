import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

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
    onClose: () => alert('"onClose" method called!'),
    children: null,
  },
};

export const CenterModal: Story = {
  args: { ...Default.args, position: 'center' },
  render: (args) => {
    return (
      <Modal {...args}>
        <Modal.Header
          title="Center Modal"
          onClose={() => alert('close!')}
        />
        <Modal.Content>
          <div>contents</div>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Footer.Button
            style="primary"
            onClick={() => alert('Clicked primary button!')}
          >
            Primary Button
          </Modal.Footer.Button>
          <Modal.Footer.Button
            style="secondary"
            onClick={() => alert('Clicked secondary button!')}
          >
            Secondary Button
          </Modal.Footer.Button>
        </Modal.Footer>
      </Modal>
    );
  },
};

export const BottomModal: Story = {
  args: { ...Default.args, position: 'bottom' },
  render: (args) => {
    return (
      <Modal {...args}>
        <Modal.Header
          title="Center Modal"
          onClose={() => alert('close!')}
        />
        <Modal.Content>
          <div>contents</div>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Footer.Button
            style="primary"
            onClick={() => alert('Clicked primary button!')}
          >
            Primary Button
          </Modal.Footer.Button>
          <Modal.Footer.Button
            style="secondary"
            onClick={() => alert('Clicked secondary button!')}
          >
            Secondary Button
          </Modal.Footer.Button>
        </Modal.Footer>
      </Modal>
    );
  },
};

export const SmallModal: Story = {
  args: { ...Default.args, size: 'small' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>contents</div>
      </Modal>
    );
  },
};

export const MediumModal: Story = {
  args: { ...Default.args, size: 'medium' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>contents</div>
      </Modal>
    );
  },
};

export const LargeModal: Story = {
  args: { ...Default.args, size: 'large' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>contents</div>
      </Modal>
    );
  },
};
