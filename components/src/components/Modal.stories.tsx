import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  tags: ["autodocs"],
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
    };

    return (
      <>
        <button type="button" onClick={openModal}>
          열기
        </button>
        <Modal title="제목" onClose={handleModalClose} isOpen={isOpen}>
          ㅇㅇㅇ
        </Modal>
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};
