import type { Meta, StoryObj } from '@storybook/react';
import ModalTypeContents from '../ModalTypeContents';
import ModalExample from '../ModalExample';
import { ModalInput, useInput } from '../lib';

const exampleMeta = {
  title: 'Modals/Step2 Modal/Modal Types',
  component: ModalExample,
  argTypes: {
    modalPosition: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    closeType: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'none'],
    },
    modalType: {
      control: { type: 'radio' },
      options: ['default', 'alert', 'confirm', 'prompt'],
    },
    titleText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ModalExample>;

export default exampleMeta;

type ExampleStory = StoryObj<typeof exampleMeta>;

const contentsMeta = {
  title: 'Modals/Step2 Modal/Modal Types/Overview',
  component: ModalTypeContents,
} satisfies Meta<typeof ModalTypeContents>;

type ContentsStory = StoryObj<typeof contentsMeta>;

export const AllModalTypes: ContentsStory = {
  render: () => <ModalTypeContents />,
};

export const AlertModal: ExampleStory = {
  args: {
    type: '확인(Alert)',
    modalPosition: 'center',
    modalType: 'alert',
    closeType: 'none',
    titleText: '아이디를 입력해 주세요.',
    onClose: () => console.log('alert closed'),
    children: (
      <p style={{ color: 'black', margin: '16px 0px' }}>아이디는 필수로 입력해야 합니다.</p>
    ),
  },
};

export const ConfirmModal: ExampleStory = {
  args: {
    type: '확인/취소(Confirm)',
    modalPosition: 'center',
    modalType: 'confirm',
    closeType: 'none',
    titleText: '카드를 삭제하시겠습니까?',
    onClose: () => console.log('confirm closed'),
    children: <p style={{ color: 'black', margin: '16px 0px' }}>삭제하면 복구하실 수 없습니다.</p>,
  },
};

// 입력 모달 컴포넌트
interface PromptModalComponentProps {
  type?: string;
  modalPosition?: 'center' | 'bottom';
  modalType?: 'default' | 'alert' | 'confirm' | 'prompt';
  closeType?: 'top' | 'bottom' | 'none';
  modalSize?: 'small' | 'medium' | 'large';
  titleText?: string;
}

const PromptModalComponent = (props: PromptModalComponentProps) => {
  const { value, handleChange, reset } = useInput();

  const handlePromptModalClose = () => {
    console.log(value);
    if (value) {
      reset();
    }
  };

  return (
    <ModalExample
      type={props.type || '입력(Prompt)'}
      modalPosition={props.modalPosition || 'center'}
      modalType={props.modalType || 'prompt'}
      closeType={props.closeType || 'none'}
      modalSize={props.modalSize}
      titleText={props.titleText || '쿠폰 번호를 입력해 주세요.'}
      onClose={handlePromptModalClose}
    >
      <ModalInput placeholder="입력해 주세요." initialValue={value} onChange={handleChange} />
    </ModalExample>
  );
};

const promptMeta = {
  title: 'Modals/Step2 Modal/Modal Types/PromptModal',
  component: PromptModalComponent,
  argTypes: {
    modalPosition: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    closeType: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'none'],
    },
    modalType: {
      control: { type: 'radio' },
      options: ['default', 'alert', 'confirm', 'prompt'],
    },
    modalSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    titleText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PromptModalComponent>;

type PromptStory = StoryObj<typeof promptMeta>;

export const PromptModal: PromptStory = {
  args: {
    type: '입력(Prompt)',
    modalPosition: 'center',
    modalType: 'prompt',
    closeType: 'none',
    modalSize: 'medium',
    titleText: '쿠폰 번호를 입력해 주세요.',
  },
};
