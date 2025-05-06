import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Modal.ModalContainer> = {
  title: 'Components/Modal',
  component: Modal.ModalContainer,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
    },
    width: {
      control: 'number',
    },
    isOpen: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    isOpen: true,
    position: 'center',
    width: 400,
    children: '기본 모달 제목',
  },
};

export default meta;
type Story = StoryObj<typeof Modal.ModalContainer>;

export const Default: Story = {
  args: {
    width: 800,
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <button onClick={onClose}>열림버튼</button>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};

export const Open: Story = {
  args: {
    width: 800,
    isOpen: true,
    children: '기본 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <button onClick={onClose}>열림버튼</button>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};

export const TopModal: Story = {
  args: {
    isOpen: true,
    position: 'top',
    children: '상단 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};

export const BottomModal: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    children: '하단 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};

export const CenterModal: Story = {
  args: {
    width: 400,
    isOpen: true,
    position: 'center',
    children: '중앙 모달 제목',
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};
