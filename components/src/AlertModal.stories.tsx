import React from "react";
import AlertModal from "./AlertModal";
import type { Meta, StoryObj } from "@storybook/react";
import useModalState from "./lib/useModalState";

const AlertModalWrapper = () => {
  const { isOpen, closeModal } = useModalState(true, {});
  return (
    <AlertModal
      isOpen={isOpen}
      closeModal={closeModal}
      title="아이디를 입력해 주세요."
      description="아이디는 필수로 입력해야 합니다."
      confirmLabel="확인"
      size="medium"
    />
  );
};

const meta = { title: "AlertModal" } satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    docs: { description: { story: "기본 상태" } },
  },
  render: AlertModalWrapper,
};
