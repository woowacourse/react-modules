import React from "react";

import type { StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

import Modal from "../lib/Modal/Modal";

const meta = {
  title: "Modal",

  component: Modal,

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    children: {},

    isOpen: {
      control: {
        type: "boolean",
      },
    },

    onClose: {
      description: "모달을 닫을 수 있는 콜백 함수",
    },

    position: {
      options: ["top", "center", "bottom"],
      control: {
        type: "radio",
      },
    },

    direction: {
      options: ["row", "column"],
      control: {
        type: "radio",
      },
    },
  },

  args: {
    onClose: fn(),
  },
};

export default meta;

interface ModalProps {
  isOpen: boolean;
  position: "top" | "center" | "bottom";
  direction: "row" | "column";
  theme: "dark" | "light";
  children: React.ReactNode;
}

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    position: "center",
    direction: "row",
    theme: "dark",
    children: (
      <>
        <h1>테스트 모달입니다</h1>
      </>
    ),
  },

  render: () => {
    const [args, updateArgs] = useArgs();

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <button onClick={onOpen}>click me, open modal!</button>
        <Modal isOpen={args.isOpen} onClose={onClose}>
          <Modal.ModalContent position={args.position}>
            <Modal.ModalHeader>
              <Modal.ModalTitle text="약관에 동의해 주세요" />
              <Modal.ModalCloseButton onCloseButtonClick={onClose} />
            </Modal.ModalHeader>
            {args.children}
            <Modal.ModalFooter direction={args.direction}>
              <Modal.ModalButton theme="dark">동의하고 저장하기</Modal.ModalButton>
              <Modal.ModalButton onClick={onClose}>닫기</Modal.ModalButton>
            </Modal.ModalFooter>
          </Modal.ModalContent>
        </Modal>
      </>
    );
  },
};
