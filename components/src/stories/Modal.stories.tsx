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
    // @ts-expect-error:argType mapping 인식 오류
    title: true,
    hasCloseButton: true,
    children: true,
    // @ts-expect-error:argType mapping 인식 오류
    buttonText: true,
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
    hasCloseButton: { control: 'boolean' },
    children: {
      control: 'boolean',
      mapping: { true: MODAL_CHILDREN_MESSAGE, false: undefined },
    },

    buttonText: {
      control: 'boolean',
      mapping: { true: MODAL_BUTTON_MESSAGE, false: undefined },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalStory: Story = {};
