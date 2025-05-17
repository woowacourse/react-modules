import { Meta, StoryObj } from "@storybook/react";
import Confirm from "./Confirm";
import useModalState from "../hooks/useModalState";
import React from "react";

const meta: Meta<typeof Confirm> = {
  title: "Components/Confirm",
  component: Confirm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Basic: Story = {
  render: () => {
    const { isOpen, modalClose } = useModalState(true);

    return (
      <Confirm
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        closeButtonText="취소"
        checkButtonText="확인"
        size="medium"
        position="center"
        onCheckButtonClick={() => console.log("확인 버튼 클릭")}
      />
    );
  },
};
