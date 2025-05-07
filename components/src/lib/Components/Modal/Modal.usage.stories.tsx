import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from ".";
import {
  AlertDialogProps,
  ConfirmDialogProps,
  PromptDialogProps,
} from "./DialogPresets";

const meta: Meta<typeof Modal> = {
  title: "Modal/Usage",
  component: Modal,
};
export default meta;

// Alert 전용 스토리 타입
type AlertStory = StoryObj<AlertDialogProps>;
type ConfirmStory = StoryObj<ConfirmDialogProps>;
type PromptStory = StoryObj<PromptDialogProps>;

export const AlertModal: AlertStory = {
  args: {
    title: "아이디를 입력해 주세요.",
    message: "아이디는 필수로 입력해야 합니다!",
    position: "center",
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    title: {
      control: { type: "text" },
      defaultValue: "모달창 제목",
    },
    message: {
      control: { type: "text" },
      defaultValue: "모달창 내용",
    },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Alert
          {...(args as AlertDialogProps)}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => console.log("확인")}
        />
      </>
    );
  },
};
export const ConfirmModal: ConfirmStory = {
  args: {
    title: "카드를 삭제하시겠습니까?",
    message: "삭제하면 다시 카드를 등록하셔야해요.",
    position: "center",
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    title: {
      control: { type: "text" },
      defaultValue: "모달창 제목",
    },
    message: {
      control: { type: "text" },
      defaultValue: "모달창 내용",
    },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Confirm
          {...(args as ConfirmDialogProps)}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => console.log("확인")}
          onCancel={() => console.log("취소")}
        />
      </>
    );
  },
};
export const PromptModal: PromptStory = {
  args: {
    title: "쿠폰 번호를 입력해 주세요.",
    position: "center",
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    title: {
      control: { type: "text" },
      defaultValue: "모달창 제목",
    },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Prompt
          {...(args as PromptDialogProps)}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={(value) => console.log(value)}
          onCancel={() => console.log("취소")}
        />
      </>
    );
  },
};
