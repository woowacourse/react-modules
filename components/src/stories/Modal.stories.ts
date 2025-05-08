import type { Meta, StoryObj } from "@storybook/react";
import BaseModal from "../lib/BaseModal/BaseModal";
const meta = {
  title: "Components/Modal",
  component: BaseModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["center", "top", "bottom"],
      description: "모달의 위치",
    },
    title: {
      control: "text",
      description: "모달의 제목",
    },
    content: {
      control: "text",
      description: "모달의 본문 콘텐츠 (string 또는 ReactNode)",
    },
    hasCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
    },
    onClose: { action: "onClose (닫기 버튼 클릭)" },
  },
} satisfies Meta<typeof BaseModal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    position: "center",
    title: "기본 모달",
    content: "이것은 기본 모달입니다.",
    hasCloseButton: true,
    onClose: () => alert("닫기 버튼 클릭됨"),
  },
};

export const BottomPosition: Story = {
  args: {
    position: "bottom",
    title: "하단 모달",
    content: "하단에 위치한 모달입니다.",
    hasCloseButton: true,
    onClose: () => alert("닫기"),
  },
};
export const NoConfirm: Story = {
  args: {
    position: "center",
    title: "확인 버튼 없음",
    content: "확인 버튼이 비활성화된 모달입니다.",
    hasCloseButton: true,
    onClose: () => alert("닫기 클릭"),
  },
};
