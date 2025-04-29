import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import App from "../App";

const meta = {
  title: "App",
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const modalText = canvas.getByText("모달열림");
    if (modalText) {
      expect(modalText).not.toBeVisible();
    }

    const openButton = canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    expect(canvas.getByText("모달열림")).toBeVisible();
  },
};
