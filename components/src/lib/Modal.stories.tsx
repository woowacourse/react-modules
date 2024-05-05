import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";
import { Content, CloseContent } from "../App";
import "../App.css";
import { fn } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    modalContainerStyle: {
      control: "object",
      description: "모달 컨테이너 인라인 스타일",
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
      setModalOpen(false);
    };

    const handleModalOpen = () => {
      setModalOpen(true);
    };

    return (
      <>
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
          <Modal.Portal id="modal">
            <Modal.Backdrop>
              <Modal.Container position="bottom" className="container">
                <Content />
                <Modal.ModalCloseButton>
                  <CloseContent />
                </Modal.ModalCloseButton>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal.Portal>
        </Modal>

        <button onClick={handleModalOpen}>모달 열기</button>
      </>
    );
  },
};
