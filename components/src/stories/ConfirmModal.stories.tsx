import ConfirmModal from "@/lib/Modal/ConfirmModal/ConfirmModal";
import Modal from "@/lib/Modal/Modal/Modal";
import { StoryObj } from "@storybook/react";

export default {
  title: "StyledModal/ConfirmModal",
  component: ConfirmModal,
};

const BasicConfirmModal = () => {
  return (
    <ConfirmModal
      isOpen={true}
      onClose={() => {}}
      onConfirm={() => {}}
      title="아이디를 입력해 주세요."
      message="아이디는 필수로 입력해야 합니다."
    />
  );
};

type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: () => <BasicConfirmModal />,
};
