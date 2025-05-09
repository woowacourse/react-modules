import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect, screen } from "@storybook/test";
import { jest } from "@storybook/jest";
import Modal from "..";
import { renderPromptModal } from "./renderers";
import type { PromptDialogProps } from "../parts/DialogPresets";

const meta: Meta<typeof Modal> = {
  title: "Modal/Prompt",
  component: Modal,
};
export default meta;

type PromptStory = StoryObj<PromptDialogProps>;

export const Display: PromptStory = {
  args: {
    title: "쿠폰 번호를 입력해 주세요.",
    position: "center",
    placeholder: "쿠폰 번호",
    onClose: () => {},
    onConfirm: (_: string) => {},
    onCancel: () => {},
  },
  argTypes: {
    position: { control: { type: "radio" }, options: ["center", "bottom"] },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    title: { control: "text" },
    placeholder: { control: "text" },
  },
  render: renderPromptModal,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const WithTests: PromptStory = {
  ...Display,
  args: {
    ...Display.args,
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const confirmSpy = args.onConfirm as jest.Mock;
    const cancelSpy = args.onCancel as jest.Mock;
    const input = screen.getByRole("textbox", {
      name: args.title,
    });
    await userEvent.type(input, "TEST123");
    await userEvent.click(screen.getByRole("button", { name: /확인/ }));
    await expect(confirmSpy).toHaveBeenCalledWith("TEST123");

    await userEvent.click(
      canvas.getByRole("button", { name: /모달창 trigger/ })
    );
    await userEvent.click(screen.getByRole("button", { name: /취소/ }));
    await expect(cancelSpy).toHaveBeenCalled();
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
