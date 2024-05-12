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
    content: { control: "text" },
    onClick: { action: "clicked" },
    className: { control: "text" },
    style: { control: "object" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "버튼",
    onClick: fn(),
    className: "modalFooter",
    style: {
      background: "rgba(51, 51, 51, 1)",
      color: "white",
    },
  },
};
