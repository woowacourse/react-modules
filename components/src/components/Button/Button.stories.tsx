import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
