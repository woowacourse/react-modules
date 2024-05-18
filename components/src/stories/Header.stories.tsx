import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "../lib/Modal/Header/Header";
import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Header",
  component: Header,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Modal.Title text="카드사 선택" />
        <Modal.CloseButton
          onCloseButtonClick={() => console.log("closeButton clicked")}
        />
      </>
    ),
  },
};
