import type { Meta, StoryObj } from "@storybook/react";
import BaseModal from "./BaseModal";

const meta = {
  title: "Components/Modals/BaseModal",
  component: BaseModal,
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "기본 모달",
    content: "이것은 기본 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
  },
};

export const BottomPosition: Story = {
  args: {
    position: "bottom",
    size: "medium",
    title: "하단 모달",
    content: "하단에 위치한 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
  },
};

export const SmallSize: Story = {
  args: {
    position: "center",
    size: "small",
    title: "작은 크기",
    content: "작은 크기의 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
  },
};

export const LargeSize: Story = {
  args: {
    position: "center",
    size: "large",
    title: "큰 크기",
    content: "큰 크기의 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "닫기 버튼 없음",
    content: "닫기 버튼이 없는 모달입니다.",
    hasCloseButton: false,
    onClose: () => console.log("닫기 버튼 클릭됨"),
  },
};

export const WithCustomButton: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "커스텀 버튼 모달",
    content: "하단에 커스텀 버튼이 있는 모달입니다.",
    hasCloseButton: true,
    onClose: () => console.log("닫기 버튼 클릭됨"),
    buttonElements: (
      <button onClick={() => console.log("커스텀 버튼 클릭됨")}>
        커스텀 버튼
      </button>
    ),
  },
};
