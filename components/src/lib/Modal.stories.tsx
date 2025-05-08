import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Modal.Content> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
    },
    width: {
      control: 'number',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    position: 'center',
    width: 400,
  },
};

export default meta;
type Story = StoryObj<typeof Modal.Content>;

export const Default: Story = {
  args: {
    width: 800,
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
    width: 400,
  },
  render: (args) => {
    function handleCloseClick() {}
    return (
      <>
        <button onClick={handleCloseClick}>열림버튼</button>
        <Modal isOpen={true}>
          <Modal.Overlay onClick={handleCloseClick} />
          <Modal.Content position={args.position} width={args.width}>
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
    width: 400,
    position: 'center',
  },
  render: (args) => {
    return (
      <>
        <Modal isOpen={true}>
          <Modal.Overlay onClick={() => {}} />
          <Modal.Content {...args}>
            <Modal.CloseButton onCloseClick={() => {}} />
            <Modal.Title>중앙 모달 제목</Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
