import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import Button from "../../../modules/Button/Button";
import styled from "@emotion/styled";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/Modal/ConfirmModal",
  component: ConfirmModal,
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

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

        <ConfirmModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
          title="카드를 삭제하시겠습니까?"
          description="삭제하면 복구하실 수 없습니다."
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
