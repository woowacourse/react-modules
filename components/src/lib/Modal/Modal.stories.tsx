import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../../modules/Button/Button";
import { useState } from "react";
import styled from "@emotion/styled";
import CardCompany from "./CardCompany";
import AgreeTermModal from "./AgreeTermModal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "text",
      description: "모달 위치",
    },
    showCloseButton: {
      description: "닫기 버튼 여부",
    },
    showConfirmButton: {
      description: "확인 버튼 여부",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    position: "center",
    showCloseButton: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <CardCompany />
        </Modal>
      </>
    );
  },
};

export const ModalWithCofirmButton: Story = {
  args: {
    position: "bottom",
    showConfirmButton: true,
    showCloseButton: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <AgreeTermModal />
        </Modal>
      </>
    );
  },
};

const ButtonWrap = styled.div`
  position: absolute;
`;
