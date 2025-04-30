import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const meta = {
  title: 'Modal',
  component: Modal,
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '약관에 동의해 주세요',
    contents: <div>컨텐츠</div>,
    isOpen: true,
    onClose: () => {},
    buttons: [],
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal {...args} onClose={onClose} isOpen={modalOpen} />
      </>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    title: '약관에 동의해 주세요',
    contents: <div>컨텐츠</div>,
    isOpen: true,
    onClose: () => {},
    buttons: [],
    position: 'bottom',
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal {...args} onClose={onClose} isOpen={modalOpen} />
      </>
    );
  },
};

export const HiddenCloseButton: Story = {
  args: {
    title: '약관에 동의해 주세요',
    contents: <div>컨텐츠</div>,
    isOpen: true,
    onClose: () => {},
    buttons: [],
    showCloseButton: false,
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal {...args} onClose={onClose} isOpen={modalOpen} />
      </>
    );
  },
};

export const ShowAllButtons: Story = {
  args: {
    title: '약관에 동의해 주세요',
    contents: <div>컨텐츠</div>,
    isOpen: true,
    onClose: () => {},
    buttons: [],
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    const buttons = [
      <PrimaryButton
        label="동의하고 저장하기"
        onClick={() => alert('클릭됨')}
      />,
      <SecondaryButton label="닫기" onClick={onClose} />,
    ];

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal
          {...args}
          onClose={onClose}
          isOpen={modalOpen}
          buttons={buttons}
        />
      </>
    );
  },
};
