import type { Meta, StoryObj } from "@storybook/react";

import Modal from ".";
import ModalRoot from "../ModalRoot";
import ModalOverlay from "../ModalOverlay";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle";
import ModalClose from "../ModalClose";
import ModalTrigger from "../ModalTrigger";

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
    children: "",
  },

  render: () => {
    return (
      <ModalRoot>
        <ModalTrigger>
          <button>Open</button>
        </ModalTrigger>
        <Modal>
          <ModalOverlay />
          <ModalContent position="center">
            <ModalTitle fontSize="25px" fontWeight="700">
              모달 제목입니다.
            </ModalTitle>
            모달의 컨텐츠를 넣어주세요.
            <ModalClose>
              <button>Close</button>
            </ModalClose>
          </ModalContent>
        </Modal>
      </ModalRoot>
    );
  },
};
