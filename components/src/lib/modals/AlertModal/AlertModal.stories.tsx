import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/Modals/AlertModal",
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs = {
  title: "알림",
  onClose: () => console.log("닫기"),
  onConfirm: () => console.log("확인"),
};

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    content: "작업이 성공적으로 완료되었습니다.",
    hasCloseButton: true,
    ...baseArgs,
  },
};

export const SmallAlert: Story = {
  args: {
    position: "center",
    size: "small",
    content: "작은 크기의 알림 모달입니다.",
    hasCloseButton: true,
    ...baseArgs,
  },
};

export const LargeAlert: Story = {
  args: {
    position: "center",
    size: "large",
    content: "큰 크기의 알림 모달입니다.",
    hasCloseButton: true,
    ...baseArgs,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    position: "center",
    size: "medium",
    content: "닫기 버튼이 없는 알림 모달입니다.",
    hasCloseButton: false,
    ...baseArgs,
  },
};

export const CenterAlert: Story = {
  args: {
    position: "center",
    size: "medium",
    content: "중앙에 위치한 알림 모달입니다.",
    hasCloseButton: true,
    ...baseArgs,
  },
};

export const BottomAlert: Story = {
  args: {
    position: "bottom",
    size: "medium",
    content: "하단에 위치한 알림 모달입니다.",
    hasCloseButton: true,
    ...baseArgs,
  },
};
