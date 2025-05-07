import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { jest } from "@storybook/jest";
import Modal from "..";
import { renderConfirmModal } from "./renderers";
import type { ConfirmDialogProps } from "../parts/DialogPresets";

const meta: Meta<typeof Modal> = {
  title: "Modal/Confirm",
  component: Modal,
};
export default meta;

type ConfirmStory = StoryObj<ConfirmDialogProps>;

export const Display: ConfirmStory = {
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
    title: { control: "text" },
    message: { control: "text" },
  },
  render: renderConfirmModal,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const WithTests: ConfirmStory = {
  ...Display,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const confirmSpy = jest.fn();
    const cancelSpy = jest.fn();
    args.onConfirm = confirmSpy;
    args.onCancel = cancelSpy;

    await userEvent.click(document.getElementById("confirm-button")!);
    await expect(confirmSpy).toHaveBeenCalled();

    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );
    await userEvent.click(document.getElementById("cancel-button")!);
    await expect(cancelSpy).toHaveBeenCalled();
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
