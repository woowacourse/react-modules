import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "./PromptModal";

const meta = {
  title: "PromptModal",
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "이름 입력",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
    inputAttributes: {
      placeholder: "이름을 입력하세요",
    },
  },
};

export const EmailPrompt: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "이메일 입력",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
    inputAttributes: {
      type: "email",
      placeholder: "이메일을 입력하세요",
    },
  },
};

export const PasswordPrompt: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "비밀번호 입력",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
    inputAttributes: {
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
  },
};

export const NumberPrompt: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "수량 입력",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
    inputAttributes: {
      type: "number",
      min: 1,
      max: 100,
      defaultValue: 1,
    },
  },
};

export const SearchPrompt: Story = {
  args: {
    position: "center",
    size: "large",
    title: "검색",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("검색 버튼 클릭됨"),
    inputAttributes: {
      type: "search",
      placeholder: "검색어를 입력하세요",
    },
  },
};

export const BottomPrompt: Story = {
  args: {
    position: "bottom",
    size: "medium",
    title: "하단 입력",
    hasCloseButton: true,
    onClose: () => console.log("취소 버튼 클릭됨"),
    onConfirm: () => console.log("확인 버튼 클릭됨"),
    inputAttributes: {
      placeholder: "내용을 입력하세요",
    },
  },
};
