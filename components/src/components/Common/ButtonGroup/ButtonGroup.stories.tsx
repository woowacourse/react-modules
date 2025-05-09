import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "common/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const DefaultButton: Story = {
  args: {
    left: {
      varient: "secondary",
      text: "취소",
    },
    right: {
      varient: "primary",
      text: "확인",
    },
  },
};

export const ReverseButton: Story = {
  args: {
    left: {
      varient: "primary",
      text: "확인",
    },
    right: {
      varient: "secondary",
      text: "취소",
    },
  },
};
