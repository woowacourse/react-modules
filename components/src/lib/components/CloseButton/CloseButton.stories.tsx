import { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta = {
  title: 'Components/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['close'] },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  render: (args) => <CloseButton {...args} />,
};
