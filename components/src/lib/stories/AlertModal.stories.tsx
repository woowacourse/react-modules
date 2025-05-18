import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { userEvent, screen } from '@storybook/testing-library';
import AlertModal from '../component/AlertModal/AlertModal';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/Modal/AlertModal',
  component: AlertModal
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

const AlertModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>알림 모달 열기</button>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} title="알림" content={<p>이것은 알림입니다.</p>} confirmText="확인" />
    </>
  );
};

export const Default: Story = {
  render: () => <AlertModalExample />,
  play: async ({ step }) => {
    await step('모달 열기', async () => {
      await userEvent.click(await screen.findByText('알림 모달 열기'));
      await screen.findByText('이것은 알림입니다.');
    });

    await step('확인 클릭하여 닫기', async () => {
      await userEvent.click(await screen.findByText('확인'));
      await expect(screen.queryByText('이것은 알림입니다.')).not.toBeInTheDocument();
    });
  }
};
