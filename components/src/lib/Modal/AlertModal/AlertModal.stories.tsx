import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta = {
  title: "AlertModal",
  component: AlertModal,
  parameters: {
    docs: {
      description: {
        component: "AlertModal",
      },
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: { position: "left", content: "🍀호프의 나이를 입력해 주세요.🍀" },
    isOpen: true,
    confirmButton: { content: "", onConfirm: () => alert("확인 버튼이 클릭되었습니다.") },
    children: "나이는 필수로 입력해야 합니다.",
  },
};
