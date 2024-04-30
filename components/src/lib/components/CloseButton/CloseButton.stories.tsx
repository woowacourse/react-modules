import { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';
import { CloseButtonProps } from './CloseButton';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  argTypes: {
    close: { action: 'closed' },
  },
} as Meta<CloseButtonProps>;

export const Default: StoryObj<CloseButtonProps> = {
  render: (args) => <CloseButton {...args} />,
};
