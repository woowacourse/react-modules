import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ButtonContainer from "../lib/Modal/ButtonContainer/ButtonContainer";
import Modal from "../lib/Modal/Modal";

const meta = {
  title: "ButtonContainer",
  component: ButtonContainer,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof ButtonContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    direction: "row",
    children: (
      <>
        <Modal.Button
          color="light"
          size="small"
          onClick={() => console.log("closeButton clicked")}
        >
          <span>확인</span>
        </Modal.Button>
        <Modal.Button
          color="dark"
          size="small"
          onClick={() => console.log("closeButton clicked")}
        >
          <span>확인</span>
        </Modal.Button>
      </>
    ),
  },
};
