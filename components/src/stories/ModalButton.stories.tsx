import React from "react";

import { StoryObj } from "@storybook/react";

import ModalButton from "../lib/Modal/ModalButton";

const meta = {
  title: "ModalButton",

  component: ModalButton,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    theme: {
      options: ["dark", "white"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "모달 컴포넌트 내부의 모달 버튼 컴포넌트 ",
      },
    },
  },

  args: {
    theme: "white",
    children: "모달 버튼 컴포넌트",
  },

  render: (args) => (
    <div style={{ width: "200px", height: "44px" }}>
      <ModalButton theme={args.theme}>{args.children}</ModalButton>
    </div>
  ),
};
