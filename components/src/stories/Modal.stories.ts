import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 320,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["alert", "confirm", "prompt"],
      description: "모달의 형태",
      defaultValue: "alert",
    },
    position: {
      control: { type: "radio" },
      options: ["center", "top", "bottom"],
      description: "모달의 위치",
      defaultValue: "center",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "모달의 크기",
      defaultValue: "small",
    },
    title: {
      control: "text",
      description: "모달의 제목 (prompt 타입 제외)",
    },
    content: {
      control: "text",
      description: "모달 본문 내용 (prompt 타입 제외)",
    },
    inputTitle: {
      control: "text",
      description: "입력 필드의 제목 (prompt 타입 전용)",
    },
    confirmText: {
      control: "text",
      description: "확인 버튼의 텍스트",
    },
    cancelText: {
      control: "text",
      description: "취소 버튼의 텍스트",
    },
    hasCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
    },
    onClose: { action: "onClose (닫기 버튼 클릭)" },
    onConfirm: { action: "onConfirm (확인 버튼 클릭)" },
    handleBackdropClick: { action: "handleBackdropClick (배경 클릭)" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertModal: Story = {
  args: {
    type: "alert",
    position: "center",
    title: "안녕하세요?",
    content: "이것은 알림 모달입니다.",
    confirmText: "확인",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const ConfirmModal: Story = {
  args: {
    type: "confirm",
    position: "top",
    title: "삭제하시겠습니까?",
    content: "삭제된 데이터는 복구할 수 없습니다.",
    confirmText: "삭제",
    cancelText: "취소",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const PromptModal: Story = {
  args: {
    type: "prompt",
    position: "center",
    inputTitle: "이름을 입력해주세요",
    confirmText: "제출",
    cancelText: "취소",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const BottomAlertModal: Story = {
  args: {
    type: "alert",
    position: "bottom",
    title: "하단 모달",
    content: "하단에 위치한 모달입니다.",
    confirmText: "확인",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const SmallAlertModal: Story = {
  args: {
    type: "alert",
    position: "center",
    size: "small",
    title: "미니 모달",
    content: "이것은 작은 크기의 알림 모달입니다.",
    confirmText: "확인",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const MediumConfirmModal: Story = {
  args: {
    type: "confirm",
    position: "center",
    size: "medium",
    title: "중간 모달",
    content: "이것은 중간 크기의 확인 모달입니다.",
    confirmText: "확인",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const LargePromptModal: Story = {
  args: {
    type: "prompt",
    position: "center",
    size: "large",
    title: "빅 모달",
    content: "이것은 큰 크기의 입력 모달입니다.",
    confirmText: "확인",
    hasCloseButton: true,
    onClose: () => {},
    onConfirm: () => {},
  },
};
