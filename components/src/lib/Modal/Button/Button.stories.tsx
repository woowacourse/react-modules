import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../..';
import { fn } from '@storybook/test';

const meta = {
  title: 'Component/Button',
  component: Modal.Button,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal.Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: 'primary',
    size: 'small',
    onClick: fn(),
    children: '버튼',
  },
};

export const Small: Story = {
  args: {
    backgroundColor: 'primary',
    size: 'small',
    onClick: fn(),
    children: '버튼',
  },
};

export const Full: Story = {
  args: {
    backgroundColor: 'primary',
    size: 'full',
    onClick: fn(),
    children: '버튼',
  },
};

export const Primary: Story = {
  args: {
    backgroundColor: 'primary',
    size: 'small',
    onClick: fn(),
    children: '버튼',
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: 'secondary',
    size: 'small',
    onClick: fn(),
    children: '버튼',
  },
};
