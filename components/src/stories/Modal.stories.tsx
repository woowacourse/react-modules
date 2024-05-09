import { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';

const MODAL_TITLE_MESSAGE = '모달 타이틀';
const MODAL_CHILDREN_MESSAGE = '테스트용 내용';
const MODAL_BUTTON_MESSAGE = '확인';
const meta = {
  title: 'Modal',
  component: Modal,
  args: {
    position: 'center',
    size: 'medium',
    title: MODAL_TITLE_MESSAGE,
    hasCloseButton: true,
    children: MODAL_CHILDREN_MESSAGE,
    buttonText: MODAL_BUTTON_MESSAGE,
  },
  argTypes: {
    position: { control: 'radio', options: ['center', 'bottom'] },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'full-width'],
    },
    title: {
      control: 'radio',
      options: ['exist', 'none'],
      mapping: { exist: MODAL_TITLE_MESSAGE, none: undefined },
    },
    hasCloseButton: { control: 'boolean' },
    children: {
      control: 'radio',
      options: ['exist', 'none'],
      mapping: { exist: MODAL_CHILDREN_MESSAGE, none: undefined },
    },

    buttonText: {
      control: 'radio',
      options: ['exist', 'none'],
      mapping: { exist: MODAL_BUTTON_MESSAGE, none: undefined },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalStory: Story = {};
