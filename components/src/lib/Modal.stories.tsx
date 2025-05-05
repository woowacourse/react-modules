import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Modal.Container> = {
  title: 'Components/Modal',
  component: Modal.Container,
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
type Story = StoryObj<typeof Modal.Container>;

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
        <Modal {...args} onCloseClick={handleCloseClick}>
          <Modal.Container
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title children={args.children}></Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Container>
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

    function handleCloseClick() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <button onClick={handleCloseClick}>열림버튼</button>
        <Modal {...args} onCloseClick={handleCloseClick}>
          <Modal.Container
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title children={args.children}></Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Container>
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

    function handleCloseClick() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onCloseClick={handleCloseClick}>
          <Modal.Container
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title children={args.children}></Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Container>
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

    function handleCloseClick() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onCloseClick={handleCloseClick}>
          <Modal.Container
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title children={args.children}></Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Container>
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

    function handleCloseClick() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Modal {...args} onCloseClick={handleCloseClick}>
          <Modal.Container
            isOpen={isOpen}
            position={args.position}
            width={args.width}
          >
            <Modal.CloseButton onCloseClick={handleCloseClick} />
            <Modal.Title children={args.children}></Modal.Title>
            <Modal.Body>이것은 모달의 본문입니다.</Modal.Body>
          </Modal.Container>
        </Modal>
      </>
    );
  },
};
