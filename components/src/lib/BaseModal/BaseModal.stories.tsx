import type { Meta, StoryObj } from "@storybook/react";
import BaseModal from "./index";

const meta = {
  title: "Component/BaseModal",
  component: BaseModal,
  tags: ["autodocs"],
  args: {
    title: "Modal Title",
    onRequestClose: () => {},
    hasCloseButton: true,
    position: "center",
    size: "medium",
    modalRef: { current: null },
    children: "Modal Content",
  },
} satisfies Meta<typeof BaseModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
