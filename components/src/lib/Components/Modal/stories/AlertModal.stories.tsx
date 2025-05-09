import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { jest } from "@storybook/jest";

import { renderAlertModal } from "./renderers";
import type { AlertDialogProps } from "../parts/DialogPresets";
import Modal from "..";

const meta: Meta<typeof Modal> = {
  title: "Modal/Alert",
  component: Modal,
};
export default meta;

type AlertStory = StoryObj<AlertDialogProps>;

export const Display: AlertStory = {
  args: {
    title: "아이디를 입력해 주세요.",
    message: "아이디는 필수로 입력해야 합니다!",
    position: "center",
    onClose: () => {},
    onConfirm: () => {},
  },
  argTypes: {
    position: { control: { type: "radio" }, options: ["center", "bottom"] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    title: { control: "text" },
    message: { control: "text" },
  },
  render: renderAlertModal,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const WithTests: AlertStory = {
  ...Display,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const confirmSpy = jest.fn();
    const closeSpy = jest.fn();
    args.onConfirm = confirmSpy;
    args.onClose = closeSpy;

    await userEvent.click(canvas.getByRole("button", { name: /확인/ }));
    await expect(confirmSpy).toHaveBeenCalled();

    await userEvent.click(canvas.getByRole("button", { name: /취소/ }));
    await userEvent.keyboard("{Escape}");
    await expect(closeSpy).toHaveBeenCalled();
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
