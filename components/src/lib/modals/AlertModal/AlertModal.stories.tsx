import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "AlertModal",
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "알림",
    content: "작업이 성공적으로 완료되었습니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const SmallAlert: Story = {
  args: {
    position: "center",
    size: "small",
    title: "알림",
    content: "작은 크기의 알림 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const LargeAlert: Story = {
  args: {
    position: "center",
    size: "large",
    title: "알림",
    content: "큰 크기의 알림 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "알림",
    content: "닫기 버튼이 없는 알림 모달입니다.",
    hasCloseButton: false,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const CenterAlert: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "중앙 알림",
    content: "중앙에 위치한 알림 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};

export const BottomAlert: Story = {
  args: {
    position: "bottom",
    size: "medium",
    title: "하단 알림",
    content: "하단에 위치한 알림 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
  },
};
