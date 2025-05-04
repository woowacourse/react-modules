import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./index";

const meta = {
  title: "Component/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    title: "Modal Title",
    onRequestClose: () => {},
    position: "center",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
