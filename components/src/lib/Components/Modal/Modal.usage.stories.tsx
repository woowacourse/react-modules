import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { within, userEvent, expect } from "@storybook/test";
import { jest } from "@storybook/jest";

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

type AlertStory = StoryObj<AlertDialogProps>;
type ConfirmStory = StoryObj<ConfirmDialogProps>;
type PromptStory = StoryObj<PromptDialogProps>;

export const AlertModal: AlertStory = {
  args: {
    title: "아이디를 입력해 주세요.",
    message: "아이디는 필수로 입력해야 합니다!",
    position: "center",
    // play 에서 덮어쓰기 용으로 초기값만 지정
    onClose: () => {},
    onConfirm: () => {},
  },
  argTypes: {
    position: { control: { type: "radio" }, options: ["center", "bottom"] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    title: { control: { type: "text" }, defaultValue: "모달창 제목" },
    message: { control: { type: "text" }, defaultValue: "모달창 내용" },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((p) => !p)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Alert
          {...args}
          isOpen={isOpen}
          onClose={() => {
            args.onClose();
            setIsOpen(false);
          }}
          onConfirm={() => {
            args.onConfirm();
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // spy 설정
    const confirmSpy = jest.fn();
    const closeSpy = jest.fn();
    args.onConfirm = confirmSpy;
    args.onClose = closeSpy;

    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );

    // 확인 버튼이 있는지 확인
    const confirmButton = document.getElementById("confirm-button");
    if (confirmButton) {
      await userEvent.click(confirmButton);
      await expect(confirmSpy).toHaveBeenCalled();
    }

    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );
    await userEvent.keyboard("{Escape}");
    await expect(closeSpy).toHaveBeenCalled();
  },
};

export const ConfirmModal: ConfirmStory = {
  args: {
    title: "카드를 삭제하시겠습니까?",
    message: "삭제하면 다시 카드를 등록하셔야해요.",
    position: "center",
    onClose: () => {},
    onConfirm: () => {},
    onCancel: () => {},
  },
  argTypes: {
    position: { control: { type: "radio" }, options: ["center", "bottom"] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    title: { control: { type: "text" }, defaultValue: "모달창 제목" },
    message: { control: { type: "text" }, defaultValue: "모달창 내용" },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((p) => !p)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Confirm
          {...args}
          isOpen={isOpen}
          onClose={() => {
            args.onClose();
            setIsOpen(false);
          }}
          onConfirm={() => {
            args.onConfirm();
            setIsOpen(false);
          }}
          onCancel={() => {
            args.onCancel();
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const confirmSpy = jest.fn();
    const cancelSpy = jest.fn();
    args.onConfirm = confirmSpy;
    args.onCancel = cancelSpy;

    // 모달 열기
    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );

    // 확인 버튼 클릭
    await userEvent.click(document.getElementById("confirm-button")!);
    await expect(confirmSpy).toHaveBeenCalled();

    // 다시 열고 취소 버튼 클릭
    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );
    await userEvent.click(document.getElementById("cancel-button")!);
    await expect(cancelSpy).toHaveBeenCalled();
  },
};

export const PromptModal: PromptStory = {
  args: {
    title: "쿠폰 번호를 입력해 주세요.",
    position: "center",
    onClose: () => {},
    onConfirm: (_: string) => {},
    onCancel: () => {},
  },
  argTypes: {
    position: { control: { type: "radio" }, options: ["center", "bottom"] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    title: { control: { type: "text" }, defaultValue: "모달창 제목" },
  },
  render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((p) => !p)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal.Prompt
          {...args}
          isOpen={isOpen}
          onClose={() => {
            args.onClose();
            setIsOpen(false);
          }}
          onConfirm={(value) => {
            args.onConfirm(value);
            setIsOpen(false);
          }}
          onCancel={() => {
            args.onCancel();
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const confirmSpy = jest.fn();
    const cancelSpy = jest.fn();
    args.onConfirm = confirmSpy;
    args.onCancel = cancelSpy;

    // 모달 열기
    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );

    // 입력 및 확인
    const input = document.getElementById("modal-input")!;
    await userEvent.type(input, "TEST123");
    await userEvent.click(document.getElementById("confirm-button")!);
    await expect(confirmSpy).toHaveBeenCalledWith("TEST123");

    // 다시 열고 취소
    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );
    await userEvent.click(document.getElementById("cancel-button")!);
    await expect(cancelSpy).toHaveBeenCalled();
  },
};
