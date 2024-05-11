import { ConfirmModal, PromptModal } from "@/lib";
import AlertModal from "@/lib/Modal/AlertModal/AlertModal";
import Modal from "@/lib/Modal/Modal/Modal";
import useInput from "@/lib/hooks/useInput";
import { StoryObj } from "@storybook/react";

export default {
  title: "Modal/StyledModal",
  component: Modal,
};

type AlertModalStory = StoryObj<typeof AlertModal>;

export const BasicAlertModal: AlertModalStory = {
  args: {
    position: "bottom",
    isOpen: true,
    title: "경고 모달",
    message: "경고 모달입니다.",
  },
  parameters: {
    docs: {
      description: "경고 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: (args) => {
    return <AlertModal {...args} />;
  },
};

type ConfirmModalStory = StoryObj<typeof ConfirmModal>;

export const BasicConfirmModal: ConfirmModalStory = {
  args: {
    position: "bottom",
    isOpen: true,
    title: "확인 모달",
    message: "확인 모달입니다.",
  },
  parameters: {
    docs: {
      description: "확인 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: (args) => {
    return <ConfirmModal {...args} />;
  },
};

const BasicPromptModal = () => {
  const { onChange, value } = useInput({ initialValue: "" });
  return (
    <PromptModal
      isOpen={true}
      onClose={() => {}}
      onConfirm={() => {}}
      title="프롬프트 모달"
      message="프롬프트 모달입니다."
      onChange={onChange}
      value={value}
      position="bottom"
    />
  );
};

type PromptModalStory = StoryObj<typeof PromptModal>;

export const PromptModalStory: PromptModalStory = {
  parameters: {
    docs: {
      description: "프롬프트 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: () => <BasicPromptModal />,
};
