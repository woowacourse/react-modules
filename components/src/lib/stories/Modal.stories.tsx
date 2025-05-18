import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';
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

<Modal isOpen={true} onClose={...} position="center">
  <Modal.BackDrop />
  <Modal.Content>
    <Modal.Title>제목</Modal.Title>
    <Modal.CloseButton>X</Modal.CloseButton>
    <Modal.Footer align="right">
      <button>확인</button>
    </Modal.Footer>
  </Modal.Content>
</Modal>

ESC 키나 외부 클릭 시 자동으로 닫히며, position, size 등을 통해 유연하게 조절 가능합니다.
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
      <Modal isOpen={isOpen} onClose={handleClose} position={position} size="medium">
        <Modal.BackDrop />
        <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px' }}>
          <Modal.Title>{title}</Modal.Title>
          <p>{content}</p>
          <Modal.Footer align="right">
            <Modal.CloseButton>닫기</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {!isOpen && <p>모달이 닫혔습니다</p>}
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
