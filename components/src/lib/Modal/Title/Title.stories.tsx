import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../';

const meta = {
  title: 'Component/Title',
  component: Modal.Title,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal.Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '제목을 입력해주세요.',
  },
};
