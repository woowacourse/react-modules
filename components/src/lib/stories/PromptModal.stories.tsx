import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { userEvent, screen } from '@storybook/testing-library';
import PromptModal from '../component/PromptModal/PromptModal';

const meta: Meta<typeof PromptModal> = {
  title: 'Components/Modal/PromptModal',
  component: PromptModal
};
export default meta;
type Story = StoryObj<typeof PromptModal>;

const PromptModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>입력 모달 열기</button>
      <PromptModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="쿠폰 입력"
        placeholder="쿠폰 번호를 입력하세요"
        onConfirm={(value) => alert(`입력값: ${value}`)}
      />
    </>
  );
};

export const Default: Story = {
  render: () => <PromptModalExample />,
  play: async ({ step }) => {
    await step('모달 열기', async () => {
      await userEvent.click(await screen.findByText('입력 모달 열기'));
    });
    await step('쿠폰 입력', async () => {
      const input = await screen.findByPlaceholderText('쿠폰 번호를 입력하세요');
      await userEvent.type(input, 'GCEX1234');
    });
    await step('확인 클릭', async () => {
      await userEvent.click(await screen.findByText('확인'));
    });
  }
};
