import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "ConfirmModal",
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "확인",
    content: "정말로 이 작업을 수행하시겠습니까?",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const SmallConfirm: Story = {
  args: {
    position: "center",
    size: "small",
    title: "확인",
    content: "작은 크기의 확인 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const LargeConfirm: Story = {
  args: {
    position: "center",
    size: "large",
    title: "확인",
    content: "작은 크기의 확인 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const BottomConfirm: Story = {
  args: {
    position: "bottom",
    size: "medium",
    title: "하단 확인",
    content: "하단에 위치한 확인 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};
