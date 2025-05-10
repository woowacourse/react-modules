import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import PromptModal from "./PromptModal";
import Button from "../../../modules/Button/Button";
import styled from "@emotion/styled";

const meta: Meta<typeof PromptModal> = {
  title: "Components/Modal/PromptModal",
  component: PromptModal,
};

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
    const handleConfirm = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onClick={openModal}></Button>
        </ButtonWrap>

        <PromptModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
          title="쿠폰 번호를 입력해주세요."
          confirmText="확인"
          cancelText="취소"
          position="center"
          size="medium"
        />
      </>
    );
  },
};

const ButtonWrap = styled.div`
  position: absolute;
`;
