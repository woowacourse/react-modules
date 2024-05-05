import type { Meta, StoryObj } from "@storybook/react";

import { LongButton } from "../lib";

const meta = {
  title: "LongButton",
  component: LongButton,
  argTypes: {
    isHighLight: { name: "하이라이트 여부" },
    children: { name: "버튼 내부 요소" },
  },
} satisfies Meta<typeof LongButton>;

export default meta;

type Story = StoryObj<typeof LongButton>;

export const Default: Story = {
  name: "기본 버튼",
  args: {
    isHighLight: false,
    children: "버튼 입니다.",
    handleClick: () => alert("클릭 되었습니다."),
  },
};

export const ReverseColorButton: Story = {
  name: "반전 색상 버튼",
  args: {
    isHighLight: true,
    children: "버튼 입니다.",
    handleClick: () => alert("클릭 되었습니다."),
  },
};
