import type { Meta, StoryObj } from '@storybook/react';
import ModalSizeContents from '../ModalSizeContents';
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
  title: 'Modals/Step2 Modal/Modal Size Option',
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

const ModalSizeContentsMeta = {
  title: 'Modals/Step2 Modal/Modal Size Option/Overview',
  component: ModalSizeContents,
} satisfies Meta<typeof ModalSizeContents>;

type ModalSizeContentsStory = StoryObj<typeof ModalSizeContentsMeta>;

export const AllModalSizes: ModalSizeContentsStory = {
  render: () => <ModalSizeContents />,
};

export const SmallModal: Story = {
  args: {
    type: '중앙(small)',
    modalPosition: 'center',
    modalSize: 'small',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};

export const MediumModal: Story = {
  args: {
    type: '중앙(medium)',
    modalPosition: 'center',
    modalSize: 'medium',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};

export const LargeModal: Story = {
  args: {
    type: '중앙(large)',
    modalPosition: 'center',
    modalSize: 'large',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};

export const DefaultSizeModal: Story = {
  args: {
    type: '중앙(size 미지정)',
    modalPosition: 'center',
    closeType: 'top',
    titleText: 'titleText',
    children: <ModalChildren />,
  },
};
