import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '(optional) The size of the button.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    width: {
      description: "(optional) The width setting for the button's CSS.",
      control: { type: 'radio' },
      options: ['fixed', 'fit', 'full'],
    },
    buttonStyle: {
      description: "he style of the button.",
      control: { type: 'radio' },
      options: ['primary', 'border', 'text']
    },
    primaryColor: {
      description: "(optional) The primary color of the button.",
      control: { type: 'color' }
    },
    disabled: {
      description: "(optional) Specifies whether the button is disabled. If set to true, the button will be unclickable and typically styled to indicate it is inactive.",
      control: { type: 'boolean' }
    },
    text: {
      description: "(required) The text displayed on the button.",
      control: { type: 'text' }
    },
    onClick: {
      description: "(required) The function called when the button is clicked."
    }
  },
  args: {
    size: 'small',
    width: 'fixed',
    buttonStyle: 'primary',
    primaryColor: '#333333',
    disabled: false,
    text: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};