import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "common/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const ConfirmButton: Story = {
  args: {
    leftProps: {
      varient: "secondary",
      children: "취소",
    },
    rightProps: {
      varient: "primary",
      children: "확인",
    },
  },
};

export const ReverseConfirmButton: Story = {
  args: {
    leftProps: {
      varient: "primary",
      children: "확인",
    },
    rightProps: {
      varient: "secondary",
      children: "취소",
    },
  },
};
