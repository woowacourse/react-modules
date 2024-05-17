import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button",
      },
    },
  },
  argTypes: {
    className: { control: { disable: true } },
    content: { control: "text" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "버튼",
    onClick: fn(),
    className: "modalFooter",
  },
};
