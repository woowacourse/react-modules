import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const CenteredModal: Story = {
  name: 'ConfirmModal 가운데 버전',
  args: {
    title: 'Alert 모달 입니다.',
    description: '설명문을 적는 란입니다.'
  },
  render: (args) => {
    function useModalState(defaultOpen = false) {
      const [isOpen, setIsOpen] = useState(defaultOpen);
      const open = () => setIsOpen(true);
      const close = () => setIsOpen(false);
      return { isOpen, open, close };
    }

    const { isOpen, open, close } = useModalState();

    return (
      <>
        <button onClick={open}>모달 열기</button>
        {isOpen && <ConfirmModal onClose={close} onConfirmButtonClick={close} title={args.title} description={args.description} />}
      </>
    );
  }
};

export const BottomSheetModal: Story = {
  name: 'ConfirmModal 하단 버전',
  args: {
    title: 'Alert 모달 입니다.',
    description: '설명문을 적는 란입니다.'
  },
  render: (args) => {
    function useModalState(defaultOpen = false) {
      const [isOpen, setIsOpen] = useState(defaultOpen);
      const open = () => setIsOpen(true);
      const close = () => setIsOpen(false);
      return { isOpen, open, close };
    }

    const { isOpen, open, close } = useModalState();

    return (
      <>
        <button onClick={open}>바텀시트 열기</button>
        {isOpen && <ConfirmModal onClose={close} onConfirmButtonClick={close} title={args.title} description={args.description} position="bottom" />}
      </>
    );
  }
};
