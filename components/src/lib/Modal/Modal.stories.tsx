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
        Default Contents
      </Modal>
    </>
  );
};

export const ModalInDarkMode: Story = {
  args: {
    title: "Dark Mode",
    titleColor: "#fff",
    backgroundColor: "#000",
    children: <div style={{ color: "#fff" }}>Dark Mode Contents</div>,
    isOpen: true,
    onClose: () => {},
  },
};

export const ModalInLightMode: Story = {
  args: {
    title: "Light Mode",
    children: "Light Mode Contents",
    isOpen: true,
    onClose: () => {},
  },
};

export const BottomModal: Story = {
  args: {
    position: "bottom",
    title: "Bottom Modal",
    children: "Bottom Modal Contents",
    isOpen: true,
    onClose: () => {},
  },
};
