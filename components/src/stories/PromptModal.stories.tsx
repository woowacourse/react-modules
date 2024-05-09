import PromptModal from "@/lib/Modal/PromptModal/PromptModal";
import Modal from "@/lib/Modal/Modal/Modal";
import { StoryObj } from "@storybook/react";
import useInput from "@/lib/hooks/useInput";

export default {
  title: "StyledModal/PromptModal",
  component: PromptModal,
};

const BasicPromptModal = () => {
  const { onChange, value } = useInput({ initialValue: "" });
  return (
    <PromptModal
      isOpen={true}
      onClose={() => {}}
      onConfirm={() => {}}
      title="아이디를 입력해 주세요."
      message="아이디는 필수로 입력해야 합니다."
      onChange={onChange}
      value={value}
    />
  );
};

type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: () => <BasicPromptModal />,
};
