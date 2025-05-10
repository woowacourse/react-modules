import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../src/lib/Modal";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onModalClose: () => void;
  children: ReactNode;
}

type ModalStoryArgs = ModalProps & {
  size: "small" | "medium" | "large";
  position: "center" | "bottom";
  title: string;
};

const meta: Meta<ModalStoryArgs> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<ModalStoryArgs>;

const baseArgs = {
  isOpen: true,
  onModalClose: () => alert("닫힘"),
};

const Template: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "900px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Modal isOpen={args.isOpen} onModalClose={args.onModalClose}>
        <Modal.Background onClick={() => {}}>
          <Modal.ModalContainer
            $size={args.size}
            $position={args.position}
            onClick={(e) => e.stopPropagation()}
          >
            <Modal.HeaderSection>
              <Modal.Title>{args.title}</Modal.Title>
              <Modal.ModalCloseButton onClick={args.onModalClose}>
                ✕
              </Modal.ModalCloseButton>
            </Modal.HeaderSection>
            <Modal.ModalContent>
              <div style={{ padding: "20px" }}>{args.children}</div>
            </Modal.ModalContent>
          </Modal.ModalContainer>
        </Modal.Background>
      </Modal>
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

export const PCCenterSmall: Story = {
  ...Template,
  name: "PC - Center Small",
  args: {
    ...baseArgs,
    size: "small",
    position: "center",
    title: "Small Modal - PC",
    children: "PC용 small 모달입니다",
  },
};

export const PCCenterMedium: Story = {
  ...Template,
  name: "PC - Center Medium",
  args: {
    ...baseArgs,
    size: "medium",
    position: "center",
    title: "Medium Modal - PC",
    children: "PC용 medium 모달입니다",
  },
};

export const PCCenterLarge: Story = {
  ...Template,
  name: "PC - Center Large",
  args: {
    ...baseArgs,
    size: "large",
    position: "center",
    title: "Large Modal - PC",
    children: "PC용 large 모달입니다",
  },
};

export const PCBottomSmall: Story = {
  ...Template,
  name: "PC - Bottom Small",
  args: {
    ...baseArgs,
    size: "small",
    position: "bottom",
    title: "Small Modal - PC / bottom",
    children: "PC용 small 모달입니다 (bottom)",
  },
};

export const PCBottomMedium: Story = {
  ...Template,
  name: "PC - Bottom Medium",
  args: {
    ...baseArgs,
    size: "medium",
    position: "bottom",
    title: "Medium Modal - PC / bottom",
    children: "PC용 medium 모달입니다 (bottom)",
  },
};

export const PCBottomLarge: Story = {
  ...Template,
  name: "PC - Bottom Large",
  args: {
    ...baseArgs,
    size: "large",
    position: "bottom",
    title: "Large Modal - PC / bottom",
    children: "PC용 large 모달입니다 (bottom)",
  },
};
