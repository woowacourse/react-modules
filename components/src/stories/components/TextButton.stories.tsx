import type { Meta, StoryObj } from '@storybook/react';
import TextButton from '../../lib/components/TextButton';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
