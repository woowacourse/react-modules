import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { useArgs } from '@storybook/preview-api';
import ModalContent from './ModalContent';

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
};

export default meta;
type Story = StoryObj<typeof Modal.Content>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function handleCloseClick() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <button onClick={handleCloseClick}>열림버튼</button>
        <Modal isOpen={isOpen}>
          <Modal.Overlay onClick={handleCloseClick} />
          <Modal.Content {...args}>
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Open: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => {
    function handleCloseClick() {}
    return (
      <>
        <button onClick={handleCloseClick}>열림버튼</button>
        <Modal isOpen={true}>
          <Modal.Overlay onClick={handleCloseClick} />
          <Modal.Content position={args.position} size={args.size}>
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title>기본 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>상단 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>하단 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args} size={args.size}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>중앙 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args} size={args.size}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>스몰 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args} size={args.size}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>미디엄 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
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
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args} size={args.size}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>라지 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
