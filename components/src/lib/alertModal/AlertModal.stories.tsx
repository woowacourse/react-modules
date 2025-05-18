import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const CenteredModal: Story = {
  name: 'AlertModal 가운데 버전',
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
        {isOpen && <AlertModal onClose={close} onConfirmButtonClick={close} title={args.title} description={args.description} />}
      </>
    );
  }
};

export const BottomSheetModal: Story = {
  name: 'AlertModal 하단 버전',
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
        {isOpen && <AlertModal onClose={close} onConfirmButtonClick={close} title={args.title} description={args.description} position="bottom" />}
      </>
    );
  }
};
