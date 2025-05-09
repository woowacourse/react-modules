import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "common/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    varient: "primary",
    text: "확인",
  },
};

export const SecondaryButton: Story = {
  args: {
    varient: "secondary",
    text: "취소",
  },
};
