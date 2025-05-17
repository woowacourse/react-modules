import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import Modal from '../Modal';

const meta = {
  title: 'Modal/Size',
  component: Modal.Container,
  argTypes: {
    position: {
      control: 'inline-radio',
      options: ['center', 'bottom'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    position: 'center',
    size: 'medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
  },
} satisfies Meta<typeof Modal.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Container {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const Medium: Story = {
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Container {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Container {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};
