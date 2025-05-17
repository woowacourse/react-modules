import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import AlertModal from "./AlertModal";
import Button from "../../../modules/Button/Button";
import styled from "@emotion/styled";

const meta: Meta<typeof AlertModal> = {
  title: "Components/Modal/AlertModal",
  component: AlertModal,
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

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

        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
          title="아이디를 입력해 주세요."
          description="아이디는 필수로 입력해야 합니다."
          confirmText="확인"
          position="center"
          size="small"
        />
      </>
    );
  },
};

const ButtonWrap = styled.div`
  position: absolute;
`;
