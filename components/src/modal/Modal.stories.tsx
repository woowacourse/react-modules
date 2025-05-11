import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
  title: 'ModalContainer',
  component: Modal.Content,
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
} satisfies Meta<typeof Modal.Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Content {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
        </Modal.Content>
      </Modal>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    position: 'bottom',
  },

  render: function App(args) {
    return (
      <Modal>
        <Modal.OpenTrigger>
          <button>Component Modules</button>
        </Modal.OpenTrigger>
        <Modal.Content {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
        </Modal.Content>
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
        <Modal.Content
          {...args}
          title="약관에 동의해 주세요"
          showCloseButton={false}
        >
          <div>컨텐츠</div>
        </Modal.Content>
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
        <Modal.Content {...args} title="약관에 동의해 주세요">
          <div>컨텐츠</div>
          <Modal.ButtonWrapper direction="column">
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
          </Modal.ButtonWrapper>
        </Modal.Content>
      </Modal>
    );
  },
};
