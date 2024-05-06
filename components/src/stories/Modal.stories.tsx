import React from "react";
import "../index.css";
import "soosoo-react-payments-components/dist/style.css";
import { Modal } from "soosoo-react-payments-components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    position: "center",
    title: { position: "left", content: "🍀호프는 몇 살일까🍀" },
    children: <>20살 ㅎㅎ</>,
    isOpen: true,
    onClose: fn(),
    closeButton: { onClose: fn() },
    confirmButton: { content: "확인", onConfirm: fn() },
    cancelButton: { content: "취소", onCancel: fn() },
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    title: { position: "center", content: "🍀호프는 몇 살일까🍀" },
    children: <>29살 ㅎㅎ</>,
    isOpen: true,
    onClose: fn(),
    closeButton: { onClose: fn() },
    confirmButton: { content: "확인", onConfirm: fn() },
    cancelButton: { content: "취소", onCancel: fn() },
  },
};

export const IncludeCloseButton: Story = {
  args: {
    position: "bottom",
    title: { position: "center", content: "🍀호프는 몇 살일까🍀" },
    children: <>39살 ㅎㅎ</>,
    isOpen: true,
    onClose: fn(),
    closeButton: { onClose: fn() },
    confirmButton: { content: "확인", onConfirm: fn() },
    cancelButton: { content: "취소", onCancel: fn() },
  },
};

export const ExcludeCloseButton: Story = {
  args: {
    position: "bottom",
    title: { position: "left", content: "🍀호프는 몇 살일까🍀" },
    children: <>19살 ㅎㅎ</>,
    isOpen: true,
    onClose: fn(),
    confirmButton: { content: "확인", onConfirm: fn() },
    cancelButton: { content: "취소", onCancel: fn() },
  },
};
