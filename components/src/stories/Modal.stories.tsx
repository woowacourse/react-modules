import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal.tsx";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const centerOpen: Story = {
  args: {
    isModalOpen: true,
    position: "center",
    title: "제목",
    children: "이것은 모달 내용입니다.",
    onClose: () => {},
  },
};

export const bottomOpen: Story = {
  args: {
    isModalOpen: true,
    position: "bottom",
    title: "제목",
    children: "이것은 모달 내용입니다.",
    onClose: () => {},
  },
};
