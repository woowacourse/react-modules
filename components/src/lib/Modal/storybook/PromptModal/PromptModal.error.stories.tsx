import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../../PromptModal';

const meta = {
  title: 'PromptModal/error',
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const validateOnChange = (value: string) => {
  if (/^[a-zA-Z0-9@.]+$/.test(value)) {

    return { isValid: true, errorMessage: '' }
  }

  return { isValid: false, errorMessage: 'invalid input' }
}

const validateOnBlur = (value: string) => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {

    return { isValid: true, errorMessage: '' }
  }

  return { isValid: false, errorMessage: 'invalid email' }
}

export const Default: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',

    onConfirm: (value: string) => {
      alert(`${value} 전달됨`)
    },
    placeholder: 'placeholder',
    initialValue: 'email.test@gmail.com',

    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur
  },
};

export const Error: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',

    onConfirm: (value: string) => {
      alert(`${value} 전달됨`)
    },
    placeholder: 'placeholder',
    initialValue: 'invalidEmailFormat',

    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur
  },
};