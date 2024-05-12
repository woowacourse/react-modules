import { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../lib/PromptModal';

const MODAL_TITLE_MESSAGE = '모달 타이틀';
const meta = {
  title: 'Modal',
  component: PromptModal,
  args: {
    position: 'center',
    size: 'medium',
    // @ts-expect-error:argType mapping 인식 오류
    title: true,
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
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const PromptModalStory: Story = {};
