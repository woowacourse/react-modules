import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "../../hooks/useModal";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: "",
  },

  render: () => {
    const { isOpen, handleOpen, handleClose } = useModal();

    return (
      <>
        <button onClick={handleOpen}>Open</button>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalContent position="center">
            <ModalHeader direction="row" align="start" justify="start">
              <ModalTitle tag="h1" fontSize="25px" fontWeight="700">
                Title이다!
              </ModalTitle>
              <ModalCloseButton onClose={handleClose} />
            </ModalHeader>
            <ModalBody>몸통이다!</ModalBody>
            <ModalFooter direction="row" align="end" justify="center">
              Footer이다!
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
