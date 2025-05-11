import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import useModalState from "../hooks/useModalState";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  render: () => {
    const { isOpen, modalClose } = useModalState(true);

    return (
      <Alert
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        buttonText="확인"
        size="medium"
        position="center"
      />
    );
  },
};
