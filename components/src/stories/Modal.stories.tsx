import { Modal } from '../lib';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Modal Component. Try test by changing the size of the viewport.' } },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Determines whether the modal is open or not',
    },
    setIsOpen: {
      action: 'setIsOpen',
      description: 'Function to set the open state of the modal',
    },
    type: {
      control: { type: 'select', options: ['basic', 'alert', 'confirm', 'prompt'] },
      description: 'The type of the modal',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'The size of the modal (only for desktop, tablet)',
    },
    position: {
      control: { type: 'select', options: ['top', 'center', 'bottom'] },
      description: 'The position of the modal (only for mobile)',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the modal',
    },
    description: {
      control: { type: 'text' },
      description: 'The description of the modal',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder for the input field (only for prompt type)',
    },
    confirmLabel: {
      control: { type: 'text' },
      description: 'The label for the confirm button',
    },
    cancelLabel: {
      control: { type: 'text' },
      description: 'The label for the cancel button (only for confirm and prompt types)',
    },
    portalNodeId: {
      control: { type: 'text' },
      description: 'The ID of the parent node where the modal should be rendered',
    },
    onConfirm: {
      action: 'onConfirm',
      description: 'The function to be called when the confirm button is clicked',
    },
    children: {
      control: { type: 'text' },
      description: 'The content to be displayed inside the modal',
    },
  },
  args: {
    isOpen: true,
    setIsOpen: fn,
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const exampleCommonArgs = {
  title: 'Title',
  description: 'Description',
  placeholder: 'Placeholder',
  confirmLabel: 'Confirm Label',
  cancelLabel: 'Cancel Label',
};

export const Default: Story = {
  parameters: {
    docs: { description: { story: 'Default (type: basic, size: small, position: center)' } },
  },
};

export const Type_Basic: Story = {
  name: 'Type / Basic',
  args: {
    ...exampleCommonArgs,
    type: 'basic',
    position: 'center',
  },
  parameters: {
    docs: { description: { story: 'Basic Type (type: basic)' } },
  },
};

export const Type_Alert: Story = {
  name: 'Type / Alert',
  args: {
    ...exampleCommonArgs,
    type: 'alert',
  },
  parameters: {
    docs: { description: { story: 'Alert Type (type: alert)' } },
  },
};

export const Type_Confirm: Story = {
  name: 'Type / Confirm',
  args: {
    ...exampleCommonArgs,
    type: 'confirm',
  },
  parameters: {
    docs: { description: { story: 'Confirm Type (type: confirm)' } },
  },
};

export const Type_Prompt: Story = {
  name: 'Type / Prompt',
  args: {
    ...exampleCommonArgs,
    type: 'prompt',
  },
  parameters: {
    docs: { description: { story: 'Prompt Type (type: prompt)' } },
  },
};

export const Position_Top: Story = {
  name: 'Position / Top (only for Mobile)',
  args: {
    ...exampleCommonArgs,
    position: 'top',
  },
  parameters: {
    docs: { description: { story: 'Top Position (position: top)' } },
  },
};

export const Position_Center: Story = {
  name: 'Position / Center (only for Mobile)',
  args: {
    ...exampleCommonArgs,
    position: 'center',
  },
  parameters: {
    docs: { description: { story: 'Center Position (position: center)' } },
  },
};

export const Position_Bottom: Story = {
  name: 'Position / Bottom (only for Mobile)',
  args: {
    ...exampleCommonArgs,
    position: 'bottom',
  },
  parameters: {
    docs: { description: { story: 'Bottom Position (position: bottom)' } },
  },
};

export const Size_Small: Story = {
  name: 'Size / Small (only for Desktop, Tablet)',
  args: {
    ...exampleCommonArgs,
    size: 'small',
  },
  parameters: {
    docs: { description: { story: 'Small Size (size: small)' } },
  },
};

export const Size_Medium: Story = {
  name: 'Size / Medium (only for Desktop, Tablet)',
  args: {
    ...exampleCommonArgs,
    size: 'medium',
  },
  parameters: {
    docs: { description: { story: 'Medium Size (size: medium)' } },
  },
};

export const Size_Large: Story = {
  name: 'Size / Large (only for Desktop, Tablet)',
  args: {
    ...exampleCommonArgs,
    size: 'large',
  },
  parameters: {
    docs: { description: { story: 'Large Size (size: large)' } },
  },
};
