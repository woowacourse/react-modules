import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../..';
import ModalContent from './ModalContent';
import { ModalProvider } from './ModalProvider';

const meta: Meta<typeof Modal.Content> = {
  title: 'Components/Modal',
  component: ModalContent,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    position: 'center',
    size: 'medium',
  },
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <Story />
        </ModalProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Modal.Content>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const TopModal: Story = {
  args: {
    position: 'top',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const BottomModal: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const CenterModal: Story = {
  args: {
    size: 'medium',
    position: 'center',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const SmallModal: Story = {
  args: {
    size: 'small',
    position: 'center',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const MediumModal: Story = {
  args: {
    size: 'medium',
    position: 'center',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};

export const LargeModal: Story = {
  args: {
    size: 'large',
    position: 'center',
  },
  render: (args) => {
    return (
      <>
        <Modal.Trigger>열림버튼</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content {...args}>
            <Modal.CloseButton />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </>
    );
  },
};
