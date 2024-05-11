import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Button from '../Button/Button';

const customChildren = <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
const overflowChildren = <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
</div>

const meta = {
  title: 'Components/Modal',
  component: Modal,
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
      options: ['none', 'customChildren', 'onlyEnglish'],
      mapping: {
        none: <></>,
        customChildren: customChildren,
        overflowChildren: overflowChildren,
      }
    },
    primaryButton: {
      description: "(optional) The primary color of the button.",
    },
    secondaryButton: {
      description: "(optional) The primary color of the button.",
    },
  },
  args: {
    isOpened: true,
    size: 'small',
    showCloseButton: false,
    modalPosition: 'center',
    buttonPosition: 'row',
    primaryColor: '#333333',
    onClose: () => alert('close modal'),
    title: 'Title',
    description: 'description',
    children: <></>,
    primaryButton: {
      text: 'primary',
      onClick: () => { alert('click primary'); },
      width: 'full',
      buttonStyle: 'primary',
    },
    secondaryButton: {
      text: 'secondary',
      onClick: () => { alert('click secondary'); },
      width: 'full',
      buttonStyle: 'border',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <Button text='show modal' onClick={() => setIsOpened(true)} />
        <Modal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
      </>)
  }
};