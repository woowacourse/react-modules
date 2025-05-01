import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

function useModalState(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
}

export const CenteredModal: Story = {
  render: () => {
    const { isOpen, open, close } = useModalState();

    return (
      <>
        <button onClick={open}>모달 열기</button>
        {isOpen && (
          <Modal>
            <Modal.BackDrop onClose={close} />
            <Modal.Content position="center" style={{ width: '300px', height: '300px', backgroundColor: 'white' }}>
              <Modal.Title>중앙 모달</Modal.Title>
              <p>이곳은 중앙에 위치한 모달입니다.</p>
              <Modal.CloseButton onClick={close}>닫기</Modal.CloseButton>
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
};

export const BottomSheetModal: Story = {
  render: () => {
    const { isOpen, open, close } = useModalState();

    return (
      <>
        <button onClick={open}>바텀시트 열기</button>
        {isOpen && (
          <Modal>
            <Modal.BackDrop onClose={close} />
            <Modal.Content position="bottom" style={{ width: '100%', height: '300px', backgroundColor: 'white' }}>
              <Modal.Title>바텀 시트 모달</Modal.Title>
              <p>이 모달은 화면 하단에서 올라옵니다.</p>
              <Modal.Button onClick={close}>확인</Modal.Button>
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
};
