import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';

const meta = {
  title: 'App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalType: 'center',
    closeType: 'top',
    titleText: 'text',
    children: 'children',
  },
};
export const BottomTypeA: Story = {
  args: {
    modalType: 'bottom',
    closeType: 'top',
    titleText: 'text',
    children: 'children',
  },
};
export const BottomTypeB: Story = {
  args: {
    modalType: 'bottom',
    closeType: 'bottom',
    titleText: 'text',
    children: 'children',
  },
};
