import type { Meta, StoryObj } from '@storybook/react';
import CustomModal from '../Modal/CustomModal';
import { useState } from 'react';
import Button from '../Button/Button';

const customChildren = <div style={{ height: '320px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area</div>
const overflowChildren = <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  {Array.from({ length: 30 }).map((_, index) => <div style={{ height: '48px', width: '100%', backgroundColor: '#EEEEEE', borderRadius: '24px', color: '#AAAAAA', textAlign: 'center', alignContent: 'center' }}>Custom children Area {index}</div>)}
</div>

const meta = {
  title: 'Components/CustomModal',
  component: CustomModal,
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
      description: '(optional) Defines the layout of the buttons within the modal.Options are "row" for horizontal arrangement or "column" for vertical arrangement.',
      control: { type: 'radio' },
      options: ['row', 'column']
    },
    primaryColor: {
      description: '(optional) Sets the primary color of the modal, influencing the header, footer, and primary buttons.',
      control: { type: 'color' },
    },
    onClose: {
      description: '(required) Function to be called when the modal is requested to be closed, such as clicking on a close button.',
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
      options: ['none', 'customChildren', 'onlyEnglish'],
      mapping: {
        none: <></>,
        customChildren: customChildren,
        overflowChildren: overflowChildren,
      }
    },
    primaryButton: {
      description: '(optional) Configuration for the primary action button within the modal. This includes text, click behavior, and styling options such as size, width, and button style.Use this to define the main actionable button in the modal.',
    },
    secondaryButton: {
      description: '(optional) Configuration for the secondary action button within the modal. This button typically handles less critical actions. Configure its text, click behavior, and appearance similar to the primary button.',
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
} satisfies Meta<typeof CustomModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <Button text='show modal' onClick={() => setIsOpened(true)} />
        <CustomModal {...args} title="title" description='description' isOpened={isOpened} onClose={() => setIsOpened(false)} />
      </>)
  }
};