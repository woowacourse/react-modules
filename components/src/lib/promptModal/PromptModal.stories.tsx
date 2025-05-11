import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';

const meta: Meta<typeof PromptModal> = {
  title: 'Components/PromptModal',
  component: PromptModal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PromptModal>;

export const CenteredModal: Story = {
  name: 'PromptModal 가운데 버전',
  args: {
    title: 'Alert 모달 입니다.'
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
        {isOpen && <PromptModal onClose={close} onPromptButtonClick={close} title={args.title} />}
      </>
    );
  }
};

export const BottomSheetModal: Story = {
  name: 'ConfirmModal 하단 버전',
  args: {
    title: 'Alert 모달 입니다.'
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
        {isOpen && <PromptModal onClose={close} onPromptButtonClick={close} title={args.title} position="bottom" />}
      </>
    );
  }
};
