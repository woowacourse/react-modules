import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
  title: 'components/Title',
  component: Title,
  parameters: {
    controls: { exclude: 'children' },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: <p>제목 테스트</p>,
  },
};
