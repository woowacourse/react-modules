// import "soosoo-react-payments-components/dist/style.css";
// import { ConfirmModal } from "soosoo-react-payments-components";
import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "ConfirmModal",
  component: ConfirmModal,
  parameters: {
    docs: {
      description: {
        component: "ConfirmModal",
      },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: { position: "left", content: "🍀호프를 삭제하시겠습니까?🍀" },
    isOpen: true,
    confirmButton: { content: "", onConfirm: () => alert("확인 버튼이 클릭되었습니다.") },
    cancelButton: { content: "", onCancel: () => alert("취소 버튼이 클릭되었습니다.") },
    children: "삭제하면 복구하실 수 없습니다.",
  },
};
