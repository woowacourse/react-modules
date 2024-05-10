import PromptModal from "./PromptModal";
import type { Meta, StoryObj } from "@storybook/react";
import useModalState from "./common/useModalState";

const PromptModalWrapper = () => {
  const { isOpen, closeModal } = useModalState(true, {});
  return (
    <PromptModal
      isOpen={isOpen}
      closeModal={closeModal}
      title="쿠폰 번호를 입력해 주세요."
      confirmLabel="확인"
      cancelLabel="취소"
      size="medium"
    />
  );
};

const meta = { title: "PromptModal" } satisfies Meta<typeof PromptModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    docs: { description: { story: "기본 상태" } },
  },
  render: PromptModalWrapper,
};
