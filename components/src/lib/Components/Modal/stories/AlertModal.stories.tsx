import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, screen } from "@storybook/test";
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
  args: {
    ...Display.args,
    onConfirm: jest.fn(),
    onClose: jest.fn(),
  },
  play: async ({ args }) => {
    const confirmSpy = args.onConfirm as jest.Mock;
    const closeSpy = args.onClose as jest.Mock;
    await userEvent.click(screen.getByRole("button", { name: /확인/ }));
    await expect(confirmSpy).toHaveBeenCalled();

    await userEvent.keyboard("{Escape}");
    await expect(closeSpy).toHaveBeenCalled();
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
