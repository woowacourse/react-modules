import type { Meta } from "@storybook/react";
import Modal from "../Modal";

const meta = {
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "모달의 위치 지정",
      control: { type: "radio" },
      options: ["center", "bottom"],
      table: { defaultValue: { summary: "center" } },
    },
    size: {
      description: "모달 가로 크기 설정",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      table: { defaultValue: { summary: "medium" } },
    },
    title: {
      description: "모달의 제목 및 스타일 설정",
      table: {
        type: { summary: "{ text?: string; color?: string; size?: number; }" },
      },
    },
    showCloseButton: {
      description: "닫기 버튼 표시 여부",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
    theme: {
      description: "모달 테마 설정",
      control: { type: "radio" },
      options: ["light", "dark"],
      table: { defaultValue: { summary: "light" } },
    },
    children: {
      description: "모달 내부에 표시될 콘텐츠",
    },
    isOpen: {
      description: "모달 열림 상태",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "모달 닫기 함수",
      action: "closed",
      table: { type: { summary: "() => void" } },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
