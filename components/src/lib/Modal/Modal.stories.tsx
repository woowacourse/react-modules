import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../../modules/Button/Button";
import { useState } from "react";
import styled from "@emotion/styled";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
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
    children: {
      description: "모달 내부에 표시할 콘텐츠",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    size: "medium",
    position: "center",
    isOpen: false,
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
          <Button onClick={openModal}></Button>
        </ButtonWrap>
        <Modal
          size={args.size}
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
        >
          <Modal.Title>기본 모달</Modal.Title>
          <Modal.Description>기본 모달입니다.</Modal.Description>
          <Modal.Actions>
            <Modal.CloseButton onClick={closeModal}>닫기</Modal.CloseButton>
            <Modal.ConfirmButton onClick={closeModal}>확인</Modal.ConfirmButton>
          </Modal.Actions>
        </Modal>
      </>
    );
  },
};

export const SmallModal: Story = {
  args: {
    size: "small",
    position: "center",
    isOpen: false,
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
          <Button onClick={openModal}></Button>
        </ButtonWrap>
        <Modal
          size={args.size}
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
        >
          <Modal.Title>작은 기본 모달</Modal.Title>
          <Modal.Description>작은 사이즈 기본 모달입니다.</Modal.Description>
          <Modal.Actions>
            <Modal.CloseButton onClick={closeModal}>닫기</Modal.CloseButton>
            <Modal.ConfirmButton onClick={closeModal}>확인</Modal.ConfirmButton>
          </Modal.Actions>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  args: {
    size: "large",
    position: "center",
    isOpen: false,
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
          <Button onClick={openModal}></Button>
        </ButtonWrap>
        <Modal
          size={args.size}
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
        >
          <Modal.Title>큰 기본 모달</Modal.Title>
          <Modal.Description>큰 사이즈의 기본 모달입니다.</Modal.Description>
          <Modal.Actions>
            <Modal.CloseButton onClick={closeModal}>닫기</Modal.CloseButton>
            <Modal.ConfirmButton onClick={closeModal}>확인</Modal.ConfirmButton>
          </Modal.Actions>
        </Modal>
      </>
    );
  },
};

export const BottomModal: Story = {
  args: {
    size: "medium",
    position: "bottom",
    isOpen: false,
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
          <Button onClick={openModal}></Button>
        </ButtonWrap>
        <Modal
          size={args.size}
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
        >
          <Modal.Title>하단 모달</Modal.Title>
          <Modal.Description>
            화면 하단에 표시되는 모달입니다.
          </Modal.Description>
          <Modal.Actions>
            <Modal.CloseButton onClick={closeModal}>닫기</Modal.CloseButton>
            <Modal.ConfirmButton onClick={closeModal}>확인</Modal.ConfirmButton>
          </Modal.Actions>
        </Modal>
      </>
    );
  },
};

const ButtonWrap = styled.div`
  position: absolute;
`;
