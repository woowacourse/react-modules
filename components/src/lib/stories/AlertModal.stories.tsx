import type { Meta, StoryObj } from "@storybook/react";
import { AlertModal } from "chlwlstlf-modal";
import { fn } from "@storybook/test";

const meta = {
  title: "AlertModal",
  component: AlertModal,
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
    title: {
      control: "text",
      description: "모달의 제목을 설정합니다.",
    },
    message: {
      control: "text",
      description: "사용자에게 전달할 메시지를 설정합니다.",
    },
    buttonText: {
      control: "text",
      description: "모달 버튼의 텍스트를 설정합니다.",
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: "아이디를 입력해 주세요.",
    message: "아이디는 필수로 입력해야 합니다.",
    buttonText: "확인",
  },
};
