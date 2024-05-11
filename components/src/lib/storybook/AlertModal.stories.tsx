import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from '../Modal/AlertModal';
import Button from '../Button/Button';
import { useState } from 'react';

const customChildren = <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
const overflowChildren = <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
</div>

const meta = {
  title: 'Components/AlertModal',
  component: AlertModal,
  tags: ['autodocs'],
  argTypes: {
    isOpened: {
      description: '(required) Controls whether the modal is visible. Set to true to show the modal and false to hide it.',
      control: { type: 'boolean' },
    },
    size: {
      description: '(optional) Specifies the size of the modal. Options include "small", "medium" (default), and "large".',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    showCloseButton: {
      description: '(optional) Determines if a close button is displayed on the modal. Set to true to display the button.',
      control: { type: 'boolean' },
    },
    modalPosition: {
      description: '(optional) Sets the position of the modal on the screen. Options are "center" (default) or "bottom".',
      control: { type: 'radio' },
      options: ['center', 'bottom']
    },
    buttonPosition: {
      description: '(optional) Defines the layout of the buttons within the modal. Options are "row" for horizontal arrangement or "column" for vertical arrangement.',
      control: { type: 'radio' },
      options: ['row', 'column']
    },
    primaryColor: {
      description: '(optional) Sets the primary color of the modal, influencing the header, footer, and primary buttons.',
      control: { type: 'color' },
    },
    onClose: {
      description: '(required) Function to be called when the modal is requested to be closed, such as clicking on a close button.'
    },
    onConfirm: {
      description: '(optional) Function to be called when the confirm action is triggered, typically via a confirm button.'
    },
    title: {
      description: '(optional) The title text to display at the top of the modal.',
      control: { type: 'text' },
    },
    description: {
      description: '(optional) A brief description or content text that appears inside the modal.',
      control: { type: 'text' }
    },
    children: {
      description: '(optional) Custom content to be displayed in the modal, allowing for flexible modal content configuration.',
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
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <Button text='show modal' onClick={() => setIsOpened(true)} />
        <AlertModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} onConfirm={() => alert('confirm')} />
      </>)
  }
};