import type { Meta, StoryObj } from "@storybook/react";

import Modal from ".";

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
      <Modal.Root>
        <Modal.Trigger>
          <button>Open</button>
        </Modal.Trigger>
        <Modal>
          <Modal.Overlay />
          <Modal.Content position="center">
            <Modal.Title fontSize="25px" fontWeight="700">
              모달 제목입니다.
            </Modal.Title>
            모달의 컨텐츠를 넣어주세요.
            <Modal.Close>
              <button>Close</button>
            </Modal.Close>
          </Modal.Content>
        </Modal>
      </Modal.Root>
    );
  },
};
