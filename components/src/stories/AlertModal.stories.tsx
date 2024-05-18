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

export const AlertModal: Story = {
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
              <Modal.Title text="아이디를 입력해주세요." />
            </Modal.Header>
            <p>아이디는 필수로 입력해야 합니다.</p>
            <Modal.ButtonContainer direction="row" position="right">
              <>
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
