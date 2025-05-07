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
        <Button text="small" size="medium" onclick={openSmallModal} />
        <Button text="medium" size="medium" onclick={openMediumModal} />
        <Button text="large" size="medium" onclick={openLargeModal} />
        <Modal
          onClose={closeSmallModal}
          isOpen={isSmallOpened}
          position={"center"}
          size={"small"}
          closeButton={true}
        >
          작은 모달입니다!
        </Modal>
        <Modal
          onClose={closeMediumModal}
          isOpen={isMediumOpened}
          position={"center"}
          size={"medium"}
          closeButton={true}
        >
          중간 모달입니다!
        </Modal>
        <Modal
          onClose={closeLargeModal}
          isOpen={isLargeOpened}
          position={"center"}
          size={"large"}
          closeButton={true}
        >
          큰 모달입니다!
        </Modal>
      </>
    );
  },
};

export const AlertModal: Story = {
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
        <Button size="medium" text="열기" onclick={openModal} />
        <Modal
          onClose={closeModal}
          title="아이디를 입력해 주세요."
          isOpen={isOpened}
          position={"center"}
          confirmButton={true}
          onConfirm={closeModal}
          size={"medium"}
        >
          아이디는 필수로 입력해야 합니다.
        </Modal>
      </>
    );
  },
};

export const ConfirmModal: Story = {
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
        <Button size="medium" text="열기" onclick={openModal} />
        <Modal
          onClose={closeModal}
          title="카드를 삭제하시겠습니까?"
          isOpen={isOpened}
          position={"center"}
          confirmButton={true}
          cancelButton={true}
          onConfirm={() => {}}
          size={"medium"}
        >
          삭제하면 복구하실 수 없습니다.
        </Modal>
      </>
    );
  },
};

export const PromptModal: Story = {
  render: () => {
    const [isOpened, setIsOpened] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const openModal = () => {
      setIsOpened(true);
    };
    const closeModal = () => {
      setIsOpened(false);
    };
    const handleSetInputValue = (v: string) => {
      setInputValue(v);
    };

    return (
      <>
        <Button size="small" text="열기" onclick={openModal} />
        <Modal
          title="쿠폰 번호를 입력해 주세요."
          onClose={closeModal}
          isOpen={isOpened}
          size="medium"
          confirmButton={true}
          cancelButton={true}
          onConfirm={() => {}}
          input={true}
          inputValue={inputValue}
          onInputChange={(e) => handleSetInputValue(e.target.value)}
        />
      </>
    );
  },
};
