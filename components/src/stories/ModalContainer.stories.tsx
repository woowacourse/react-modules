import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Container",
  component: Modal.Container,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Modal.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    position: "center",
    size: "large",
    children: (
      <>
        <Modal.Header>
          <Modal.Title text="카드사 선택" />
        </Modal.Header>
        <Modal.ButtonContainer direction="column" position="center">
          <>
            <Modal.Button
              color="dark"
              size="large"
              onClick={() => console.log("confirmButton clicked")}
            >
              <span>동의</span>
            </Modal.Button>
            <Modal.Button
              color="light"
              size="large"
              onClick={() => console.log("closeButton clicked")}
            >
              <span>닫기</span>
            </Modal.Button>
          </>
        </Modal.ButtonContainer>
      </>
    ),
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    position: "center",
    size: "large",
    children: (
      <>
        <Modal.Header>
          <Modal.Title text="카드사 선택" />
        </Modal.Header>
        <Modal.ButtonContainer direction="column" position="center">
          <>
            <Modal.Button
              color="dark"
              size="large"
              onClick={() => console.log("confirmButton clicked")}
            >
              <span>동의</span>
            </Modal.Button>
            <Modal.Button
              color="light"
              size="large"
              onClick={() => console.log("closeButton clicked")}
            >
              <span>닫기</span>
            </Modal.Button>
          </>
        </Modal.ButtonContainer>
      </>
    ),
  },
};
