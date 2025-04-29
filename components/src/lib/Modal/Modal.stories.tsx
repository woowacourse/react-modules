import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";

const defaultArgs = {
  isOpen: true,
  onClose: () => {},
};

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

export const WithoutCloseButton: Story = {
  args: {
    ...defaultArgs,
    title: {
      text: "Without Close Button",
    },
    showCloseButton: false,
    children: "Without Close Button Contents",
  },
};

export const ModalInDarkMode: Story = {
  args: {
    ...defaultArgs,
    title: {
      text: "Dark Mode",
      color: "#fff",
    },
    backgroundColor: "#000",
    children: <div style={{ color: "#fff" }}>Dark Mode Contents</div>,
  },
};

export const ModalInLightMode: Story = {
  args: {
    ...defaultArgs,
    title: {
      text: "Light Mode",
    },
    children: "Light Mode Contents",
  },
};

export const BottomModal: Story = {
  args: {
    ...defaultArgs,
    position: "bottom",
    title: {
      text: "Bottom Mode",
    },
    children: "Bottom Modal Contents",
  },
};
