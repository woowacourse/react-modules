import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";

const meta = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        테스트 열기 버튼
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        Contents
      </Modal>
    </>
  );
};

export const WithCustomColor: Story = {
  args: {
    title: "Title",
    children: "Center Modal",
    backgroundColor: "#9ec5ff",
    titleColor: "#fff",
    isOpen: true,
  },
};
