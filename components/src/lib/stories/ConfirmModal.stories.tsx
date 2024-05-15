import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from "chlwlstlf-modal";
import { fn } from "@storybook/test";

const meta = {
  title: "ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "1000px", height: "700px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    onClose: {
      action: "closed",
      description: "모달을 닫을 때 호출되는 함수",
    },
    onConfirm: {
      action: "confirm",
      description: "확인 버튼 눌렀을 때 호출되는 함수",
    },
    onCancel: {
      action: "cancel",
      description: "취소 버튼 눌렀을 때 호출되는 함수",
    },
    title: {
      control: "text",
      description: "모달의 제목을 설정합니다.",
    },
    message: {
      control: "text",
      description: "사용자에게 전달할 선택지를 설정합니다.",
    },
    confirmButtonText: {
      control: "text",
      description: "확인 버튼의 텍스트를 설정합니다.",
    },
    cancelButtonText: {
      control: "text",
      description: "취소 버튼의 텍스트를 설정합니다.",
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    onConfirm: fn(),
    onCancel: fn(),
    title: "카드를 삭제하시겠습니까?",
    message: "삭제하면 복구하실 수 없습니다.",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  },
};
