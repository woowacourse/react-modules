import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { useArgs } from '@storybook/preview-api';
import Input from './Input';
import Button from './Button';

const meta: Meta<typeof Modal.ModalContainer> = {
  title: 'Components/Modal',
  component: Modal.ModalContainer,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
    },
    width: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
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
    width: 'large',
    children: '기본 모달 제목',
  },
};

export default meta;
type Story = StoryObj<typeof Modal.ModalContainer>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ isOpen: !isOpen });
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }
    return (
      <>
        <button onClick={onClose}>열림버튼</button>
        <Modal {...args} onClose={onClose}>
          <Modal.ModalContainer isOpen={isOpen} position={args.position} width={args.width}>
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>
              이것은 모달의 본문입니다. <Input type="text" onChange={onChange}></Input>{' '}
              <Button position="right">확인</Button>
            </Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};

export const Open: Story = {
  args: {
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
          <Modal.ModalContainer isOpen={isOpen} position={args.position} width={args.width}>
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
          <Modal.ModalContainer isOpen={isOpen} position={args.position} width={args.width}>
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
          <Modal.ModalContainer isOpen={isOpen} position={args.position} width={args.width}>
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
          <Modal.ModalContainer isOpen={isOpen} position={args.position} width={args.width}>
            <Modal.ModalCloseButton onClose={onClose} />
            <Modal.ModalTitle children={args.children}></Modal.ModalTitle>
            <Modal.ModalBody>이것은 모달의 본문입니다.</Modal.ModalBody>
          </Modal.ModalContainer>
        </Modal>
      </>
    );
  },
};
