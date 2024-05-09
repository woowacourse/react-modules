import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../.';
import Button from '../components/Button/Button';
import { useState } from 'react';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    controls: { exclude: ['close', 'children'] },
  },
  decorators: [
    (_, context) => {
      const [isOpen, setIsOpen] = useState(false);

      const storyArgs = {
        ...context.args,
        isOpen: isOpen,
        close: () => setIsOpen(false),
      };

      return (
        <div style={{ height: '500px' }}>
          <Button text="Modal Open" onClick={() => setIsOpen(!isOpen)} />
          <Modal {...storyArgs}>
            <Modal.Header>
              <Modal.Title>모달 테스트</Modal.Title>
            </Modal.Header>
            <Modal.Body>모달 내용</Modal.Body>
            <Modal.Footer direction="column">
              <Modal.Button text="확인" fullWidth></Modal.Button>
              <Modal.Button
                text="닫기"
                fullWidth
                color="none"
                variants="normal"
                onClick={() => setIsOpen(false)}
              ></Modal.Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  ],

  argTypes: {
    position: {
      options: ['center', 'bottom', 'top'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    backdropType: {
      options: ['transparent', 'blur', 'opaque'],
      control: { type: 'select' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    animation: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};

export const Top: Story = {
  args: {
    position: 'top',
  },
};

export const Center: Story = {
  args: {
    position: 'center',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const Small: Story = {
  args: {
    position: 'center',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    position: 'center',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    position: 'center',
    size: 'lg',
  },
};
