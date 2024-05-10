import ConfirmModal from "./ConfirmModal";
import type { Meta, StoryObj } from "@storybook/react";
import useModalState from "./common/useModalState";

const AlertModalWrapper = () => {
  const { isOpen, closeModal, confirmModal } = useModalState(true, {});
  return (
    <ConfirmModal
      isOpen={isOpen}
      closeModal={closeModal}
      confirmModal={confirmModal}
      title="카드를 삭제하시겠습니까?"
      description="삭제하면 복구하실 수 없습니다."
      confirmLabel="확인"
      cancelLabel="취소"
      size="medium"
    />
  );
};

const meta = { title: "ConfirmModal" } satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    docs: { description: { story: "기본 상태" } },
  },
  render: AlertModalWrapper,
};
