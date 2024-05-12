// import "soosoo-react-payments-components/dist/style.css";
// import { PromptModal } from "soosoo-react-payments-components";
import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "./PromptModal";

const meta = {
  title: "PromptModal",
  component: PromptModal,
  parameters: {
    docs: {
      description: {
        component: "PromptModal",
      },
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    title: { position: "left", content: "🍀호프 번호를 입력해 주세요.🍀" },
    isOpen: true,
    confirmButton: { content: "", onConfirm: () => alert("확인 버튼이 클릭되었습니다.") },
    cancelButton: { content: "", onCancel: () => alert("취소 버튼이 클릭되었습니다.") },
  },
};
