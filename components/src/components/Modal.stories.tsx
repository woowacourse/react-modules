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
          title="제목"
          onClose={handleModalClose}
          isOpen={isOpen}
          position={"center"}
        >
          ㅇㅇㅇ
        </Modal>
      </>
    );
  },
};

export const Bottom: Story = {
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
          title="제목"
          onClose={handleModalClose}
          isOpen={isOpen}
          position={"bottom"}
        >
          ㅇㅇㅇ
        </Modal>
      </>
    );
  },
};

export const NestedModals: Story = {
  render: () => {
    const [isOpenModal1, setIsOpenModal1] = useState(true);
    const [isOpenModal2, setIsOpenModal2] = useState(true);

    const handleModal1Close = () => {
      setIsOpenModal1(false);
    };

    const openModal1 = () => {
      setIsOpenModal1(true);
    };

    const handleModal2Close = () => {
      setIsOpenModal2(false);
    };

    const openModal2 = () => {
      setIsOpenModal2(true);
    };

    const openAllModal = () => {
      setIsOpenModal1(true);
      setIsOpenModal2(true);
    };

    return (
      <>
        <button type="button" onClick={openAllModal}>
          모든 모달 열기
        </button>
        <button type="button" onClick={openModal1}>
          모달1 열기
        </button>
        <button type="button" onClick={openModal2}>
          모달2 열기
        </button>
        <Modal
          title="제목"
          onClose={handleModal1Close}
          isOpen={isOpenModal1}
          position={"center"}
        >
          모달1
        </Modal>
        <Modal
          title="제목"
          onClose={handleModal2Close}
          isOpen={isOpenModal2}
          position={"center"}
        >
          모달2
        </Modal>
      </>
    );
  },
};
