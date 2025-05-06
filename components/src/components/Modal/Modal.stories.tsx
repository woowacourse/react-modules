import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  tags: ["autodocs"],
  component: Modal,
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Center: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

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
        <Modal
          onClose={handleModalClose}
          isOpen={isOpen}
          position={"center"}
          size={"large"}
        >
          content
        </Modal>
      </>
    );
  },
};

export const Size: Story = {
  render: () => {
    const [isSmallOpened, setIsSmallOpened] = useState(false);
    const [isMediumOpened, setIsMediumOpened] = useState(false);
    const [isLargeOpened, setIsLargeOpened] = useState(false);

    const openSmallModal = () => {
      setIsSmallOpened(true);
    };
    const openMediumModal = () => {
      setIsMediumOpened(true);
    };
    const openLargeModal = () => {
      setIsLargeOpened(true);
    };

    const closeSmallModal = () => {
      setIsSmallOpened(false);
    };
    const closeMediumModal = () => {
      setIsMediumOpened(false);
    };
    const closeLargeModal = () => {
      setIsLargeOpened(false);
    };

    return (
      <>
        <button type="button" onClick={openSmallModal}>
          small
        </button>
        <button type="button" onClick={openMediumModal}>
          medium
        </button>
        <button type="button" onClick={openLargeModal}>
          large
        </button>
        <Modal
          onClose={closeSmallModal}
          isOpen={isSmallOpened}
          position={"center"}
          size={"small"}
        >
          small Modal
        </Modal>
        <Modal
          onClose={closeMediumModal}
          isOpen={isMediumOpened}
          position={"center"}
          size={"medium"}
        >
          medium Modal
        </Modal>
        <Modal
          onClose={closeLargeModal}
          isOpen={isLargeOpened}
          position={"center"}
          size={"large"}
        >
          large Modal
        </Modal>
      </>
    );
  },
};
