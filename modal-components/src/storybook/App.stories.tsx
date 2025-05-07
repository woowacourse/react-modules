import type { Meta, StoryObj } from "@storybook/react";
import App from "../App";

const meta = {
  title: "App",
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalPosition: "center",
    closeType: "top",
    titleText: "text",
    children: "children",
  },
};
export const BottomTypeA: Story = {
  args: {
    modalPosition: "bottom",
    closeType: "top",
    titleText: "text",
    children: "children",
  },
};
export const BottomTypeB: Story = {
  args: {
    modalPosition: "bottom",
    closeType: "bottom",
    titleText: "text",
    children: "children",
  },
};
