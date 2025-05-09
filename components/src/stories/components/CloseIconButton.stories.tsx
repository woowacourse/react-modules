import type { Meta, StoryObj } from '@storybook/react';
import CloseIconButton from '../../lib/components/CloseIconButton';

const meta = {
  title: 'Components/CloseIconButton',
  component: CloseIconButton,
} satisfies Meta<typeof CloseIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
