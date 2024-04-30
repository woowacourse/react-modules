import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    close: () => {},
    children: <p>모달 테스트</p>,
  },
};
