import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '..';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    controls: { exclude: ['close', 'children'] },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
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

const childrenSample = (
  <>
    <Modal.Header>
      <Modal.Title>모달 테스트</Modal.Title>
    </Modal.Header>
    <Modal.Body>모달 내용</Modal.Body>
    <Modal.Footer>
      <Modal.Button text="확인"></Modal.Button>
      <Modal.Button text="닫기" mode="secondary"></Modal.Button>
    </Modal.Footer>
  </>
);

export const Default: Story = {
  args: {
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Top: Story = {
  args: {
    position: 'top',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Center: Story = {
  args: {
    position: 'center',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Small: Story = {
  args: {
    position: 'center',
    size: 'sm',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Medium: Story = {
  args: {
    position: 'center',
    size: 'md',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};

export const Large: Story = {
  args: {
    position: 'center',
    size: 'lg',
    isOpen: true,
    close: () => {},
    children: childrenSample,
  },
};
