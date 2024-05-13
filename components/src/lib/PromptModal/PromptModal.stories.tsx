import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';

const meta = {
  title: '"입력" 타입 모달(PromptModal)',
  component: PromptModal,
  parameters: {
    controls: {
      exclude: ['children', 'inputField', 'zIndex', 'buttons', 'onSubmit', 'onCancel', 'onClose'],
    },
  },
  argTypes: {
    backdropOpacity: {
      options: ['0%', '25%', '50%', '75%', '100%'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    inputField: { name: 'promptInput', placeholder: '값을 입력해주세요' },
    submitButtonText: '확인',
    cancelButtonText: '취소',
    position: 'center',
    hasCloseButton: true,
    isClosableOnClickBackdrop: true,
    zIndex: { backdrop: 999, modal: 1000 },
    backdropOpacity: '50%',
    onSubmit: (_, value: string) => alert(`"onSubmit 메서드를 통해 "${value}"값이 전송되었습니다!`),
    onCancel: () => alert('"onCancel" 메서드가 실행되었습니다!'),
    onClose: () => alert('"onClose" 메서드가 실행되었습니다!'),
  },
};

export const CenterModal: Story = {
  args: { ...Default.args, position: 'center' },
  render: (args) => {
    return <PromptModal {...args} />;
  },
};

export const BottomModal: Story = {
  args: { ...Default.args, position: 'bottom' },
  render: (args) => {
    return <PromptModal {...args} />;
  },
};

export const ModalWithErrorMessage: Story = {
  args: {
    ...Default.args,
    inputField: {
      name: 'promptInput',
      placeholder: '값을 입력해주세요',
      initialValue: '1234',
      errorMessage: '에러 메시지가 노출되는 영역입니다.',
    },
  },
  render: (args) => {
    return <PromptModal {...args} />;
  },
};
