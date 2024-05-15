import type { Meta, StoryObj } from "@storybook/react";
import { PromptModal } from "chlwlstlf-modal";
import { fn } from "@storybook/test";

const meta = {
  title: "PromptModal",
  component: PromptModal,
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
    onSubmit: {
      action: "submit",
      description: "제출 버튼 눌렀을 때 호출되는 함수",
    },
    onCancel: {
      action: "cancel",
      description: "취소 버튼 눌렀을 때 호출되는 함수",
    },
    title: {
      control: "text",
      description: "모달의 제목을 설정합니다.",
    },
    submitButtonText: {
      control: "text",
      description: "확인 버튼의 텍스트를 설정합니다.",
    },
    cancelButtonText: {
      control: "text",
      description: "취소 버튼의 텍스트를 설정합니다.",
    },
    value: {
      control: "text",
      description: "input에 들어가는 값입니다.",
    },
    onChange: {
      action: "change",
      description: "input의 값이 변할 때마다 값을 저장합니다.",
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    onSubmit: fn(),
    onCancel: fn(),
    title: "쿠폰 번호를 입력해 주세요.",
    submitButtonText: "확인",
    cancelButtonText: "취소",
    value: "",
    onChange: fn(),
  },
};
