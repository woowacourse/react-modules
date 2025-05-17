import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { userEvent, screen } from '@storybook/testing-library';
import ConfirmModal from '../component/ConfirmModal/ConfirmModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/Modal/ConfirmModal',
  component: ConfirmModal
};
export default meta;
type Story = StoryObj<typeof ConfirmModal>;

const ConfirmModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>확인 모달 열기</button>
      <ConfirmModal isOpen={open} onClose={() => setOpen(false)} title="삭제 확인" content={<p>정말 삭제하시겠습니까?</p>} onConfirm={() => alert('확인됨')} />
    </>
  );
};

export const Default: Story = {
  render: () => <ConfirmModalExample />,
  play: async ({ step }) => {
    await step('모달 열기', async () => {
      await userEvent.click(await screen.findByText('확인 모달 열기'));
    });
    await step('취소 클릭', async () => {
      await userEvent.click(await screen.findByText('취소'));
    });
    await step('다시 열기', async () => {
      await userEvent.click(await screen.findByText('확인 모달 열기'));
    });
    await step('확인 클릭', async () => {
      await userEvent.click(await screen.findByText('확인'));
    });
  }
};
