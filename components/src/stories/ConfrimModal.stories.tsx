import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../lib/Modal/Modal";

const meta = {
  title: "ModalExample",
  component: Modal,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmModal: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <Modal.BackDrop
          onClose={() => {
            console.log("backdrop clicked");
          }}
        />
        <Modal.Container position="center" size="medium">
          <>
            <Modal.Header>
              <Modal.Title text="카드를 삭제하시겠습니까?" />
            </Modal.Header>
            <p>삭제하면 복구하실 수 없습니다.</p>
            <Modal.ButtonContainer direction="row" position="right">
              <>
                <Modal.Button
                  color="light"
                  size="small"
                  onClick={() => console.log("closeButton clicked")}
                >
                  <span>취소</span>
                </Modal.Button>
                <Modal.Button
                  color="dark"
                  size="small"
                  onClick={() => console.log("closeButton clicked")}
                >
                  <span>확인</span>
                </Modal.Button>
              </>
            </Modal.ButtonContainer>
          </>
        </Modal.Container>
      </>
    ),
  },
};
