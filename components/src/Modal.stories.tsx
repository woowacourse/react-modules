import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../src/lib/Modal";
import React from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
      setIsOpen(false);
    };

    return (
      <div style={{ minHeight: "700px" }}>
        <button
          style={{
            border: "1px solid #000",
            backgroundColor: "#cccccc",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <div style={{ padding: "20px" }}>모달 content 입니다</div>
        </Modal>
      </div>
    );
  },
  args: {
    title: "모달 타이틀",
    position: "center",
  },
};
