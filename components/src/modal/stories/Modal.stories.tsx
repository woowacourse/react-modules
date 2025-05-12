import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import Modal from '../Modal';

const meta = {
  title: 'Modal',
  component: Modal.Container,
  tags: ['autodocs'],
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

export const Default: Story = {
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

export const HideCloseButton: Story = {
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Container
          {...args}
          title="약관에 동의해 주세요"
          showCloseButton={false}
        >
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const ShowAllButtons: Story = {
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Container {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
          <Modal.ButtonGroup direction="column">
            <Modal.CloseTrigger>
              <Modal.Button variant="primary" onClick={() => alert('클릭됨')}>
                동의하고 저장하기
              </Modal.Button>
            </Modal.CloseTrigger>
            <Modal.CloseTrigger>
              <Modal.Button variant="secondary" onClick={() => {}}>
                닫기
              </Modal.Button>
            </Modal.CloseTrigger>
          </Modal.ButtonGroup>
        </Modal.Container>
      </Modal>
    );
  },
};
