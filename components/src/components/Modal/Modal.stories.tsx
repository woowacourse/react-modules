import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";
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
        <Button text="small" onclick={openSmallModal} />
        <Button text="medium" onclick={openMediumModal} />
        <Button text="large" onclick={openLargeModal} />
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

export const ConfirmButton: Story = {
  render: () => {
    const [isOpened, setIsOpened] = useState(true);
    const openModal = () => {
      setIsOpened(true);
    };
    const closeModal = () => {
      setIsOpened(false);
    };

    return (
      <>
        <Button text="열기" onclick={openModal} />
        <Modal
          onClose={closeModal}
          renderHeader={true}
          title="모달을 닫으려면"
          isOpen={isOpened}
          position={"center"}
          confirmButton={true}
          onConfirm={closeModal}
          size={"small"}
        >
          확인 버튼을 누르세요!
        </Modal>
      </>
    );
  },
};

export const ConfirmCancelButton: Story = {
  render: () => {
    const [isOpened, setIsOpened] = useState(true);
    const openModal = () => {
      setIsOpened(true);
    };
    const closeModal = () => {
      setIsOpened(false);
    };

    return (
      <>
        <Button text="열기" onclick={openModal} />
        <Modal
          onClose={closeModal}
          renderHeader={true}
          title="모달을 닫으려면"
          isOpen={isOpened}
          position={"center"}
          confirmButton={true}
          cancelButton={true}
          onConfirm={() => {}}
          size={"small"}
        >
          취소 버튼을 누르세요!
        </Modal>
      </>
    );
  },
};
