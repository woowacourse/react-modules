import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../src/lib/Modal";
import React, { type ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onModalClose: () => void;
  children: ReactNode;
}

type ModalStoryArgs = ModalProps & {
  size: "small" | "medium" | "large";
  position: "center" | "bottom";
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  placeholder?: string;
  onConfirm?: (value?: string) => void;
};

const meta: Meta<ModalStoryArgs> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "모달의 크기 설정",
      defaultValue: "medium",
    },
    position: {
      control: { type: "radio" },
      options: ["center", "bottom"],
      description: "모달의 위치 설정",
      defaultValue: "center",
    },
  },
};
export default meta;

type Story = StoryObj<ModalStoryArgs>;

const baseStyle = {
  width: "100%",
  height: "900px",
  maxWidth: "1440px",
  margin: "0 auto",
  backgroundColor: "#f8f8f8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PlaygroundTemplate: Story = {
  render: (args) => {
    return (
      <div style={baseStyle}>
        <Modal isOpen={args.isOpen} onModalClose={args.onModalClose}>
          <Modal.Background onClick={() => {}}>
            <Modal.ModalContainer $position={args.position} $size={args.size}>
              <Modal.Title>{args.title}</Modal.Title>
              <Modal.ModalContent>
                <div style={{ padding: "20px" }}>{args.message}</div>
              </Modal.ModalContent>
            </Modal.ModalContainer>
          </Modal.Background>
        </Modal>
      </div>
    );
  },
};

export const Playground: Story = {
  ...PlaygroundTemplate,
  name: "Playground",
  args: {
    isOpen: true,
    onModalClose: () => alert("닫힘"),
    size: "medium",
    position: "center",
    title: "Playground Modal",
    message: "size, position 등을 자유롭게 조절해보세요.",
  },
};

const AlertTemplate: Story = {
  render: (args) => (
    <div style={baseStyle}>
      <Modal isOpen={args.isOpen} onModalClose={args.onModalClose}>
        <Modal.Background onClick={args.onModalClose} />
        <Modal.ModalContainer $position="center" $size="small">
          <Modal.Title>{args.title}</Modal.Title>
          <Modal.ModalContent>
            <p>{args.message}</p>
          </Modal.ModalContent>
          <Modal.ModalButtonContainer>
            <Modal.ModalButton
              onClick={() => args.onConfirm?.()}
              $size="small"
              $type="confirm"
            >
              {args.confirmLabel || "확인"}
            </Modal.ModalButton>
          </Modal.ModalButtonContainer>
        </Modal.ModalContainer>
      </Modal>
    </div>
  ),
};

export const AlertModal: Story = {
  ...AlertTemplate,
  name: "Alert Modal",
  args: {
    isOpen: true,
    onModalClose: () => alert("닫힘"),
    size: "small",
    position: "center",
    title: "알림",
    message: "alert 문구",
    confirmLabel: "확인",
    onConfirm: () => alert("확인"),
  },
};

const ConfirmTemplate: Story = {
  render: (args) => (
    <div style={baseStyle}>
      <Modal isOpen={args.isOpen} onModalClose={args.onModalClose}>
        <Modal.Background onClick={args.onModalClose} />
        <Modal.ModalContainer $position="center" $size="small">
          <Modal.Title>{args.title}</Modal.Title>
          <Modal.ModalContent>
            <p>{args.message}</p>
          </Modal.ModalContent>
          <Modal.ModalButtonContainer>
            <Modal.ModalButton
              onClick={() => args.onConfirm?.()}
              $size="small"
              $type="confirm"
            >
              {args.confirmLabel || "확인"}
            </Modal.ModalButton>
            <Modal.ModalButton
              onClick={args.onModalClose}
              $size="small"
              $type="cancel"
            >
              {args.cancelLabel || "취소"}
            </Modal.ModalButton>
          </Modal.ModalButtonContainer>
        </Modal.ModalContainer>
      </Modal>
    </div>
  ),
};

export const ConfirmModal: Story = {
  ...ConfirmTemplate,
  name: "Confirm Modal",
  args: {
    isOpen: true,
    onModalClose: () => alert("취소됨"),
    size: "small",
    position: "center",
    title: "확인",
    message: "confirm 문구",
    confirmLabel: "확인",
    cancelLabel: "취소",
    onConfirm: () => alert("확인됨"),
  },
};

const PromptTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={baseStyle}>
        <Modal isOpen={args.isOpen} onModalClose={args.onModalClose}>
          <Modal.Background onClick={args.onModalClose} />
          <Modal.ModalContainer $position="center" $size="small">
            <Modal.Title>{args.title}</Modal.Title>
            <Modal.ModalContent>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={args.placeholder}
                style={{ width: "100%", padding: 8, marginBottom: 16 }}
              />
            </Modal.ModalContent>
            <Modal.ModalButtonContainer>
              <Modal.ModalButton
                onClick={() => {
                  args.onConfirm?.(value);
                  setValue("");
                }}
                $size="small"
                $type="confirm"
              >
                {args.confirmLabel || "저장"}
              </Modal.ModalButton>
              <Modal.ModalButton
                onClick={args.onModalClose}
                $size="small"
                $type="cancel"
              >
                {args.cancelLabel || "취소"}
              </Modal.ModalButton>
            </Modal.ModalButtonContainer>
          </Modal.ModalContainer>
        </Modal>
      </div>
    );
  },
};

export const PromptModal: Story = {
  ...PromptTemplate,
  name: "Prompt Modal",
  args: {
    isOpen: true,
    onModalClose: () => alert("취소됨"),
    size: "small",
    position: "center",
    title: "입력",
    placeholder: "값을 입력하세요",
    confirmLabel: "저장",
    cancelLabel: "취소",
    onConfirm: (value?: string) => alert(`입력값: ${value}`),
  },
};
