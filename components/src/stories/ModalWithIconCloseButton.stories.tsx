import type { Meta, StoryObj } from '@storybook/react';
import TermsConditionConfirmModal from '../components/TermsConditionConfirmModal';

const meta: Meta<typeof TermsConditionConfirmModal> = {
  title: '모달',
  component: TermsConditionConfirmModal,
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom', 'center'],
    },
    isModalOpen: {
      control: 'boolean',
      description: '모달의 열림 상태를 제어합니다.',
    },
    closeButtonType: {
      control: 'select',
      options: ['icon', 'box'],
    },
  },
  args: {
    position: 'center',
    isModalOpen: true,
    closeButtonType: 'icon',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const 이용_약관_확인_모달: Story = {
  args: {},
};
