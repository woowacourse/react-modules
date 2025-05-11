import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../lib/components/Input';

const meta = {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '입력 컴포넌트는 사용자가 텍스트를 입력할 수 있는 UI 요소로, 다양한 형태와 스타일로 제공됩니다. 이 컴포넌트는 사용자가 정보를 입력하거나 검색할 수 있도록 돕는 역할을 합니다.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    isValid: true,
    placeholder: '입력 텍스트',
    size: 2.5,
  },
  argTypes: {
    value: {
      description: 'The value of the input',
      control: false,
    },
    isValid: {
      description: 'Indicates isValidation of the input',
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      description: 'The placeholder of the input',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'The size of the input',
      control: false,
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return (
      <div>
        <Input {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};
