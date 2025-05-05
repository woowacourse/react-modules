import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, screen, within } from '@storybook/testing-library';

import { useState } from 'react';
import Modal from '../component/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
Compound Component 패턴으로 구성된 Modal입니다. 

<Modal onClose={...} isOpen={true}>
  <Modal.BackDrop />
  <Modal.Content position="center">
    <Modal.Title>제목</Modal.Title>
    <Modal.CloseButton>X</Modal.CloseButton>
  </Modal.Content>
</Modal>

각 하위 컴포넌트는 props를 통해 커스터마이징할 수 있으며, 모달 외부 클릭이나 ESC 키 입력 시 자동으로 닫힐 수 있도록 설계되어 있습니다.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;
interface ModalExampleProps {
  position: 'center' | 'bottom';
  openButtonLabel: string;
  title: string;
  content: string;
}

const ModalExample = ({ position, openButtonLabel, title, content }: ModalExampleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>{openButtonLabel}</button>
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <Modal.BackDrop />
          <Modal.Content position={position} style={{ width: 300, height: 200, background: 'pink' }}>
            <Modal.Title>{title}</Modal.Title>
            <Modal.CloseButton>닫기</Modal.CloseButton>
            <p>{content}</p>
          </Modal.Content>
        </Modal>
      ) : (
        <p>모달이 닫혔습니다</p>
      )}
    </div>
  );
};
export const Default: Story = {
  render: () => <ModalExample position="center" openButtonLabel="모달 열기" title="테스트 타이틀" content="모달 내용입니다." />,
  play: async ({ step }) => {
    await step('모달 열기 버튼 클릭', async () => {
      await userEvent.click(await screen.findByText('모달 열기'));
    });
    await step('닫기 버튼 클릭 시 모달이 닫힌다', async () => {
      await userEvent.click(await screen.findByText('닫기'));
    });
    await step('모달이 닫힌 후 텍스트 확인', async () => {
      await screen.findByText('모달이 닫혔습니다');
    });
  }
};

export const BottomPosition: Story = {
  render: () => <ModalExample position="bottom" openButtonLabel="모달 열기" title="하단 모달" content="하단에 위치한 모달입니다." />,
  play: Default.play
};
