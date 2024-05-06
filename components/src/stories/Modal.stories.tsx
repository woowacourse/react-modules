import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "hash-modal";
import React from "react";
import { ContentDefaultTemplate, ContentWideTemplate } from "../App";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],

  argTypes: {
    hasXButton: { control: "boolean" },
  },
  decorators: [(Story) => <div style={{ padding: "3rem" }}>{Story()}</div>],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    title: "제목입니다.",
    buttonLayout: "row",
    children: <ContentDefaultTemplate>default 문서</ContentDefaultTemplate>,
    hasXButton: true,
    confirmButtonContent: "확인",
    handleConfirmEvent: () => {
      alert("열림");
    },
    handleCloseEvent: () => {
      alert("닫힘");
    },
  },
};

export const BottomModal: Story = {
  args: {
    ...Default.args,
    position: "bottom",
  },
};

export const NoneXButton: Story = {
  args: {
    ...Default.args,
    hasXButton: false,
  },
};

export const CancelButton: Story = {
  args: {
    ...Default.args,
    closeButtonContent: "취소",
  },
};

export const ColumnButtonLayout: Story = {
  args: {
    ...Default.args,
    buttonLayout: "column",
  },
};

export const ScrollContent: Story = {
  args: {
    ...Default.args,
    children: <ContentWideTemplate>Wide 문서</ContentWideTemplate>,
  },
};
