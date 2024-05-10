import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Input',
  component: Modal.Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal.Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    label: 'input label',
    onChange: action('onChange'),
  },
};
