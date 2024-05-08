import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
  title: '기본 모달 컴포넌트(Modal)',
  component: Modal,
  parameters: {
    controls: { exclude: ['children', 'zIndex', 'buttons', 'onClose'] },
  },
  argTypes: {
    backdropOpacity: {
      options: ['0%', '25%', '50%', '75%', '100%'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    children: '@seongjinme/react-modal 모달의 본문 내용입니다.',
    position: 'center',
    hasCloseButton: true,
    buttons: [
      {
        text: '확인',
        style: 'primary',
        onClick: () => alert('확인 버튼이 눌렸습니다!'),
      },
      {
        text: '취소',
        style: 'secondary',
        onClick: () => alert('취소 버튼이 눌렸습니다!'),
      },
    ],
    isClosableOnClickBackdrop: true,
    zIndex: { backdrop: 999, modal: 1000 },
    backdropOpacity: '50%',
    onClose: () => alert('"onClose" 메서드가 실행되었습니다!'),
  },
};

export const CenterModal: Story = {
  args: { ...Default.args, position: 'center' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>@seongjinme/react-modal</div>
      </Modal>
    );
  },
};

export const BottomModal: Story = {
  args: { ...Default.args, position: 'bottom' },
  render: (args) => {
    return (
      <Modal {...args}>
        <div>@seongjinme/react-modal</div>
      </Modal>
    );
  },
};
