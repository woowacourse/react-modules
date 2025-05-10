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
    left: {
      varient: "secondary",
      children: "취소",
    },
    right: {
      varient: "primary",
      children: "확인",
    },
  },
};

export const ReverseConfirmButton: Story = {
  args: {
    left: {
      varient: "primary",
      children: "확인",
    },
    right: {
      varient: "secondary",
      children: "취소",
    },
  },
};
