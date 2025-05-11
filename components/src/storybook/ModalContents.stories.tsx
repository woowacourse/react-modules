import type { Meta, StoryObj } from '@storybook/react';
import ModalContents from '../ModalContents';
import ModalExample from '../ModalExample';

const ModalChildren = () => (
  <>
    <p style={{ color: 'black' }}>Test!!!!!!</p>
    <p style={{ color: 'black' }}>Test!!!!!!</p>
    <p style={{ color: 'black' }}>Test!!!!!!</p>
    <p style={{ color: 'black' }}>Test!!!!!!</p>
  </>
);

const meta = {
  title: 'Modals/Step1 Modal',
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
    modalSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    titleText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ModalExample>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalContentsMeta = {
  title: 'Modals/Step1 Modal/Overview',
  component: ModalContents,
} satisfies Meta<typeof ModalContents>;

type ModalContentsStory = StoryObj<typeof ModalContentsMeta>;

export const AllBasicModals: ModalContentsStory = {
  render: () => <ModalContents />,
};

export const CenterModal: Story = {
  args: {
    type: '중앙(size 미지정)',
    modalPosition: 'center',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};

export const BottomWithTopClose: Story = {
  args: {
    type: '하단(상단 닫기)',
    modalPosition: 'bottom',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};

export const BottomWithBottomClose: Story = {
  args: {
    type: '하단(하단 닫기)',
    modalPosition: 'bottom',
    closeType: 'bottom',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};
