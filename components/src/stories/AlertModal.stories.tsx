import { Meta, StoryObj } from '@storybook/react';
import AlertModal from '../lib/AlertModal';

const MODAL_TITLE_MESSAGE = '모달 타이틀';
const MODAL_CHILDREN_MESSAGE = '테스트용 내용';
const meta = {
  title: 'Modal',
  component: AlertModal,
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
      value: true,
    },
    children: {
      control: 'boolean',
      mapping: { true: MODAL_CHILDREN_MESSAGE, false: undefined },
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const AlertModalStory: Story = {};
