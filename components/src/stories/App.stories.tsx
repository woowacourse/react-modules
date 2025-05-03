import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "@storybook/test";
import App from "../App";

const meta = {
  title: "App",
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OpenModal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const modalText = screen.queryByText("모달열림");
    if (modalText) {
      expect(modalText).not.toBeVisible();
    }

    const openButton = canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    expect(screen.getByText("모달열림")).toBeVisible();
  },
};

export const CloseByButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    const modalText = canvas.queryByText("모달열림");
    if (modalText) {
      expect(modalText).toBeVisible();
    }

    const closeButton = screen.getByRole("button", {
      name: "✕",
    });
    await userEvent.click(closeButton);

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};

export const CloseByOverlayClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    const modalText = screen.queryByText("모달열림");
    if (modalText) {
      expect(modalText).toBeVisible();
    }

    const overlay = screen.getByTestId("modal-overlay");
    await userEvent.click(overlay);

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};

export const CloseByEsc: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole("button", {
      name: "모달 열기 버튼",
    });
    await userEvent.click(openButton);

    const modalText = screen.queryByText("모달열림");
    if (modalText) {
      expect(modalText).toBeVisible();
    }

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};
