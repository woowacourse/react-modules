import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../lib/ConfirmModal';

const MODAL_TITLE_MESSAGE = '모달 타이틀';
const MODAL_CHILDREN_MESSAGE = '테스트용 내용';
const meta = {
  title: 'Modal',
  component: ConfirmModal,
  args: {
    position: 'center',
    size: 'medium',
    title: MODAL_TITLE_MESSAGE,
    children: MODAL_CHILDREN_MESSAGE,
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
    children: {
      control: 'radio',
      options: ['exist', 'none'],
      mapping: { exist: MODAL_CHILDREN_MESSAGE, none: undefined },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const ConfirmModalStory: Story = {};
