import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./index";

const meta = {
  title: "Component/AlertModal",
  component: AlertModal,
  tags: ["autodocs"],
  args: {
    title: "AlertModal Title",
    alertText: "Alert Text",
    hasCloseButton: false,
    closeTrigger: {
      outsideClick: true,
      escapeKey: true,
    },
    onRequestClose: () => {},
    size: "medium",
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
