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
    // @ts-expect-error:argType mapping 인식 오류
    title: true,
    children: true,
  },
  argTypes: {
    position: { control: 'radio', options: ['center', 'bottom'] },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'full-width'],
    },
    title: {
      control: 'boolean',
      mapping: { true: MODAL_TITLE_MESSAGE, false: undefined },
    },
    children: {
      control: 'boolean',
      mapping: { true: MODAL_CHILDREN_MESSAGE, false: undefined },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const ConfirmModalStory: Story = {};
