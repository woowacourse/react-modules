import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import "../App.css";
import { fn } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    position: {
      options: ["center", "bottom"],
      control: { type: "radio" },
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    isOpen: true,
    position: "center",
  },
};

export const Bottom: Story = {
  args: {
    isOpen: true,
    position: "bottom",
  },
};
