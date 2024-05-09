import { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../lib/PromptModal';

const MODAL_TITLE_MESSAGE = '모달 타이틀';
const meta = {
  title: 'Modal',
  component: PromptModal,
  args: {
    position: 'center',
    size: 'medium',
    title: MODAL_TITLE_MESSAGE,
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
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const PromptModalStory: Story = {};
