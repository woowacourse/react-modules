import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "common/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "쿠폰 번호를 입력해 주세요.",
  },
};
