import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent/ModalContent";
import ModalTitle from "../ModalTitle/ModalTitle";

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
    children: "",
  },

  render: () => {
    const { isOpen, handleOpen, handleClose } = useModal();

    return (
      <>
        <button onClick={handleOpen}>Open</button>
        <Modal isOpen={isOpen}>
          <ModalOverlay onClose={handleClose} />
          <ModalContent position="center">
            <ModalTitle fontSize="25px" fontWeight="700">
              모달 제목입니다.
            </ModalTitle>
            모달의 컨텐츠를 넣어주세요.
          </ModalContent>
        </Modal>
      </>
    );
  },
};
