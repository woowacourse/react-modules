import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "placeholder",
    autoFocus: true,
    required: true,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
