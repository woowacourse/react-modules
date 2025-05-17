import { Meta, StoryObj } from "@storybook/react";
import Prompt from "./Prompt";
import useModalState from "../hooks/useModalState";
import React, { useState } from "react";

const meta: Meta<typeof Prompt> = {
  title: "Components/Prompt",
  component: Prompt,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Prompt>;

export const Basic: Story = {
  render: () => {
    const { isOpen, modalClose } = useModalState(true);
    const [value, setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Prompt
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        value={value}
        onChange={handleChange}
        closeButtonText="취소"
        checkButtonText="확인"
        size="medium"
        position="center"
        onCheckButtonClick={() => {
          setValue("");
        }}
      />
    );
  },
};
