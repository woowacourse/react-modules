import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { fn } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    title: {
      control: "text",
      description: "모달 제목",
    },
    position: {
      options: ["center", "bottom"],
      control: { type: "radio" },
      description: "모달 컨테이너 위치",
    },
    content: {
      description: "모달 컨텐츠 컴포넌트",
    },
    modalContainerStyle: {
      control: "object",
      description: "모달 컨테이너 인라인 스타일",
    },
    className: {
      control: "text",
      description: "모달 컨테이너의 클래스명",
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    isOpen: true,
    title: "모달 제목",
    position: "center",
    content: [<div>모달 content</div>],
  },
};

export const Bottom: Story = {
  args: {
    isOpen: true,
    title: "모달 제목",
    position: "bottom",
    content: [<div>모달 content</div>],
  },
};
