import type { Meta, StoryObj } from "@storybook/react";
import styled from "@emotion/styled";
import Button from "../../../modules/Button/Button";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "모달의 위치",
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
    size: {
      description: "모달의 크기",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    isOpen: {
      description: "모달의 표시 여부",
      control: "boolean",
    },
    showConfirmButton: {
      description: "확인 버튼 표시 여부",
      control: "boolean",
      defaultValue: false,
    },
    onClose: {
      description: "모달이 닫힐 때 호출되는 함수",
      action: "closed",
    },
    children: {
      description: "모달 내부에 표시할 콘텐츠",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    size: "medium",
    position: "center",
    isOpen: false,
    showConfirmButton: true,
    showCloseButton: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <ConfirmModal
          size={args.size}
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showConfirmButton={args.showConfirmButton}
          showCloseButton={args.showCloseButton}
        >
          <ModalContent>
            <h2>카드를 삭제하시겠습니까?</h2>
            <p>삭제하면 복구하실 수 없습니다.</p>
          </ModalContent>
        </ConfirmModal>
      </>
    );
  },
};

const ModalContent = styled.div`
  padding: 8px 0;

  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
`;
