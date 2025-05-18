import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../lib/components/Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '버튼 컴포넌트는 사용자가 클릭할 수 있는 UI 요소로, 특정 작업을 수행하거나 다른 페이지로 이동하는 등의 기능을 제공합니다. 이 컴포넌트는 다양한 스타일과 크기로 제공되어, 사용자의 요구에 맞게 조정할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    width: '100%',
    color: 'black',
    fontColor: 'white',
    variant: 'filled',
    shape: 'rounded',
    isLoading: false,
    children: '버튼 텍스트',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    fontColor: {
      control: {
        type: 'color',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['rounded', 'square'],
      },
    },
  },
  render: (args) => {
    return <Button {...args}>버튼입니다.</Button>;
  },
};
