import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal';

const meta = {
  title: '"확인" 타입 모달(AlertModal)',
  component: AlertModal,
  parameters: {
    controls: { exclude: ['children', 'zIndex', 'buttons', 'onConfirm', 'onClose'] },
  },
  argTypes: {
    backdropOpacity: {
      options: ['0%', '25%', '50%', '75%', '100%'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    confirmButtonText: '확인',
    position: 'center',
    hasCloseButton: true,
    isClosableOnClickBackdrop: true,
    zIndex: { backdrop: 999, modal: 1000 },
    backdropOpacity: '50%',
    onConfirm: () => alert('"onConfirm 메서드가 실행되었습니다!'),
    onClose: () => alert('"onClose" 메서드가 실행되었습니다!'),
  },
  render: (args) => {
    return (
      <AlertModal {...args}>
        <p>"확인" 타입 모달(AlertModal)의 본문 내용입니다.</p>
      </AlertModal>
    );
  },
};

export const CenterModal: Story = {
  args: { ...Default.args, position: 'center' },
  render: (args) => {
    return (
      <AlertModal {...args}>
        <p>"확인" 타입 모달(AlertModal)의 본문 내용입니다.</p>
      </AlertModal>
    );
  },
};

export const BottomModal: Story = {
  args: { ...Default.args, position: 'bottom' },
  render: (args) => {
    return (
      <AlertModal {...args}>
        <p>"확인" 타입 모달(AlertModal)의 본문 내용입니다.</p>
      </AlertModal>
    );
  },
};
