import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../';

const meta = {
  title: 'Label',
  component: Modal.Label,
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
} satisfies Meta<typeof Modal.Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'basic',
    children: '기본 Label 입력입니다.',
  },
};

export const Basic: Story = {
  args: {
    color: 'basic',
    children: '기본 Label 입력입니다.',
  },
};

export const LightGray: Story = {
  args: {
    color: 'lightGray',
    children: '기본 Label 입력입니다.',
  },
};
