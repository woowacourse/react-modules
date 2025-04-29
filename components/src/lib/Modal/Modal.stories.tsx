import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: "Center Modal",
  },
};
