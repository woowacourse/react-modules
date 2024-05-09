import "../../index.css";
import type { Meta, StoryObj } from "@storybook/react";

import { MainButton } from "../../lib";
import { MainButtonStyleType } from "./constants";

const meta = {
  title: "MainButton",
  component: MainButton,
  argTypes: {
    isHighLight: { name: "하이라이트 여부" },
    children: { name: "버튼 내부 요소" },
    buttonType: { name: "버튼의 타입" },
  },
} satisfies Meta<typeof MainButton>;

export default meta;

type Story = StoryObj<typeof MainButton>;

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

export const ShortButton: Story = {
  name: "작은 버튼",
  args: {
    isHighLight: false,
    children: "버튼 입니다.",
    buttonType: MainButtonStyleType.Short,
    handleClick: () => alert("클릭 되었습니다."),
  },
};

export const ShortReverseButton: Story = {
  name: "작은 버튼 하이라이트",
  args: {
    isHighLight: true,
    children: "버튼 입니다.",
    buttonType: MainButtonStyleType.Short,
    handleClick: () => alert("클릭 되었습니다."),
  },
};
