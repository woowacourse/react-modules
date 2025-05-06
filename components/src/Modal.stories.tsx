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
        <Modal {...args}>
          <Modal.Background onClick={() => {}}>
            <Modal.ModalContainer
              $position="center"
              onClick={(e) => e.stopPropagation()}
            >
              <Modal.HeaderSection>
                <Modal.Title>기본 모달</Modal.Title>
                <Modal.ModalCloseButton onClick={() => {}}>
                  ✕
                </Modal.ModalCloseButton>
              </Modal.HeaderSection>
              <Modal.ModalContent>
                <div style={{ padding: "20px" }}>모달 콘텐츠입니다</div>
              </Modal.ModalContent>
            </Modal.ModalContainer>
          </Modal.Background>
        </Modal>
      </div>
    );
  },
  args: {
    isOpen: true,
    handleCloseModal: () => alert("모달 닫힘"),
  },
};

export const BottomModal: Story = {
  render: (args) => {
    return (
      <div style={{ minHeight: "700px", minWidth: "100%" }}>
        <Modal {...args}>
          <Modal.Background onClick={() => {}}>
            <Modal.ModalContainer
              $position="bottom"
              onClick={(e) => e.stopPropagation()}
            >
              <Modal.HeaderSection>
                <Modal.Title>하단 모달</Modal.Title>
                <Modal.ModalCloseButton onClick={() => {}}>
                  ✕
                </Modal.ModalCloseButton>
              </Modal.HeaderSection>
              <Modal.ModalContent>
                <div style={{ padding: "20px" }}>하단에 위치한 모달입니다</div>
              </Modal.ModalContent>
            </Modal.ModalContainer>
          </Modal.Background>
        </Modal>
      </div>
    );
  },
  args: {
    isOpen: true,
    handleCloseModal: () => alert("모달 닫기"),
  },
};
