import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../src/lib/Modal";
import React from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ minHeight: "700px", minWidth: "100%" }}>
        <Modal {...args} />
      </div>
    );
  },
  args: {
    isOpen: true,
    title: "기본 모달",
    position: "center",
    handleCloseModal: () => alert("모달 닫힘"),
    children: <div style={{ padding: "20px" }}>모달 콘텐츠입니다</div>,
  },
};

export const BottomModal: Story = {
  render: (args) => {
    return (
      <div style={{ minHeight: "700px", minWidth: "100%" }}>
        <Modal {...args} />
      </div>
    );
  },
  args: {
    isOpen: true,
    title: "하단 모달",
    position: "bottom",
    handleCloseModal: () => alert("모달 닫기"),
    children: <div style={{ padding: "20px" }}>하단 모달 내용입니다</div>,
  },
};
