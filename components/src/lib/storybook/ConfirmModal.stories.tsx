import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../Modal/ConfirmModal';
import Button from '../Button/Button';
import { useState } from 'react';

const customChildren = <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
const overflowChildren = <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
</div>

const meta = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
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
    children: {
      description: "(optional) The primary color of the button.",
      control: { type: 'radio' },
      options: ['none', 'customChildren', 'overflowChildren'],
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
    children: <></>,
    onConfirm: () => alert('confirm'),
    onClose: () => alert('close modal'),
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <Button text='show modal' onClick={() => setIsOpened(true)} />
        <ConfirmModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
      </>)
  }
};