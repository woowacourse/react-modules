import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor } from "@storybook/test";

import { useState } from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const CenterModal: Story = {
  args: {
    id: "modal-container",
    position: "center",
    title: "중앙 모달 제목입니다",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <p>중앙 모달 내용 입니다.</p>
        </Modal>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector(
      "#trigger-button"
    ) as HTMLButtonElement;
    await userEvent.click(triggerButton);
    const modalContainer = document.body.querySelector(
      "#modal-container"
    ) as HTMLDivElement;
    await waitFor(() => {
      expect(modalContainer).toHaveTextContent("중앙 모달 제목입니다");
    });

    // close button 클릭시 모달 닫히기
    await userEvent.click(triggerButton);
    const closeButton = document.body.querySelector(
      "#modal-close-button"
    ) as HTMLImageElement;
    await userEvent.click(closeButton);

    await waitFor(() => expect(modalContainer).not.toBeInTheDocument());

    // background 클릭시 모달 닫히기
    await userEvent.click(triggerButton);
    const modalBackground = document.body.querySelector(
      "#modal-background"
    ) as HTMLImageElement;
    await userEvent.click(modalBackground);
    await waitFor(() => expect(modalContainer).not.toBeInTheDocument());

    // esc 키 눌렀을 때 모달 닫히기
    await userEvent.click(triggerButton);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(modalContainer).not.toBeInTheDocument());
  },
};

export const BottomModal: Story = {
  args: {
    id: "modal-container",
    position: "bottom",
    title: "하단 모달 제목입니다",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <p>하단 모달 내용 입니다.</p>
        </Modal>
      </>
    );
  },
};

export const CustomHeaderModal: Story = {
  args: {
    id: "modal-container",
    position: "center",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);

    const customHeader = () => {
      return (
        <header>
          <h3 style={{ textAlign: "center", color: "#e02d2d" }}>
            사용자 정의 헤더 스타일을 적용합니다
          </h3>
        </header>
      );
    };
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          renderHeader={customHeader}
        >
          <p>사용자 정의 헤더가 적용된 모달입니다</p>
        </Modal>
      </>
    );
  },
};
