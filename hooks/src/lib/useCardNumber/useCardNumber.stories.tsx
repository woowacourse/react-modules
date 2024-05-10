import type { Meta, StoryObj } from "@storybook/react";
import UseCardNumberTestComponent from "./UseCardNumberTestComponent";

const meta = {
  title: "useCardNumber 기능 작동 확인",
  component: UseCardNumberTestComponent,
} satisfies Meta<typeof UseCardNumberTestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
