import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    value: {
      control: 'text',
    },
  },
  args: {
    value: '',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: 'label',
    placeholder: 'placeholder',
  },
};
