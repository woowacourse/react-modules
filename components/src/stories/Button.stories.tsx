import type { Meta, StoryObj } from "@storybook/react";
import Button from "../lib/common/Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "테스트 버튼",
    color: "#fff",
    backgroundColor: "#333",
  },
};
