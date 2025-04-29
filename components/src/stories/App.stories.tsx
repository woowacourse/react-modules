import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
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

    // "모달 열기 버튼"을 찾아 클릭
    const openButton = await canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    expect(canvas.getByText("모달열림")).toBeDefined();
  },
};
