import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../Modal/PromptModal';
import Button from '../Button/Button';
import { useState } from 'react';

const customChildren = <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
const overflowChildren = <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
</div>

const onlyNumber = (value: string) => {
  if (/^\d*$/.test(value)) {
    return { isValid: true, errorMessage: '' }
  }
  return { isValid: false, errorMessage: 'please enter only numbers' }
}
const onlyEnglish = (value: string) => {
  if (/^[a-zA-Z]*$/g.test(value)) {
    return { isValid: true, errorMessage: '' }
  }
  return { isValid: false, errorMessage: 'please enter only numbers' }
}
const matchLength10 = (value: string) => {
  if (value.length === 10) {
    return { isValid: true, errorMessage: '' }
  }
  return { isValid: false, errorMessage: 'please enter 10 characters' }
}

const meta = {
  title: 'Components/PromptModal',
  component: PromptModal,
  tags: ['autodocs'],
  argTypes: {
    isOpened: {
      description: '(optional) The size of the button.',
      control: { type: 'boolean' },
    },
    size: {
      description: '(optional) The size of the button.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    showCloseButton: {
      description: '',
      control: { type: 'boolean' },
    },
    modalPosition: {
      description: "(optional) The primary color of the button.",
      control: { type: 'radio' },
      options: ['center', 'bottom']
    },
    buttonPosition: {
      description: '',
      control: { type: 'radio' },
      options: ['row', 'column']
    },
    primaryColor: {
      description: '',
      control: { type: 'color' },
    },
    onClose: {
      description: ''
    },
    onConfirm: {
      description: ''
    },
    title: {
      description: "he style of the button.",
      control: { type: 'text' },
    },
    description: {
      description: "(optional) The primary color of the button.",
      control: { type: 'text' }
    },
    initialValue: {
      description: '',
      control: { type: 'text' }
    },
    validateOnChange: {
      description: "(optional) The primary color of the button.",
      control: { type: 'radio' },
      options: ['none', 'onlyNumber', 'onlyEnglish'],
      mapping: {
        none: () => { },
        onlyNumber: onlyNumber,
        onlyEnglish: onlyEnglish,
      }
    },
    validateOnBlur: {
      description: "(optional) The primary color of the button.",
      control: { type: 'radio' },
      options: ['none', 'matchLength10'],
      mapping: {
        none: () => { },
        matchLength10: matchLength10,
      }
    },
    children: {
      description: "(optional) The primary color of the button.",
      control: { type: 'radio' },
      options: ['none', 'customChildren', 'onlyEnglish'],
      mapping: {
        none: <></>,
        customChildren: customChildren,
        overflowChildren: overflowChildren,
      }
    },
  },
  args: {
    isOpened: true,
    size: 'small',
    showCloseButton: false,
    modalPosition: 'center',
    buttonPosition: 'row',
    title: 'Title',
    description: 'description',
    primaryColor: '#333333',
    initialValue: '',
    children: <></>,
    onConfirm: (value: string) => alert(`value is ${value}`),
    onClose: () => alert('close modal'),
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <Button text='show modal' onClick={() => setIsOpened(true)} />
        <PromptModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
      </>)
  }
};