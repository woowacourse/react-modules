import React from "react";

import type { StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

import Modal from "../lib/Modal/Modal";

import { ElementDirection, ModalButtonTheme, ModalPosition, ModalSize } from "../lib/types/modal";

const meta = {
  title: "Modal/Playground",

  component: Modal,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
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

    size: {
      options: ["full", "large", "medium", "small"],
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

    device: {
      options: ["desktop", "tablet", "mobile"],
      control: {
        type: "radio",
      },
    },

    modalTitle: {
      control: {
        type: "text",
      },
    },

    modalText: {
      control: {
        type: "text",
      },
    },

    primaryButtonText: {
      control: {
        type: "text",
      },
    },

    secondButtonText: {
      control: {
        type: "text",
      },
    },
  },

  args: {
    isOpen: false,
    position: "center",
    size: "medium",
    direction: "row",
    onClose: fn(),
    modalTitle: "테스트 모달 제목입니다.",
    modalText: "테스트 모달입니다.",
    primaryButtonText: "동의하고 저장하기",
    secondButtonText: "닫기",
  },
};

export default meta;

interface ModalStoryProps {
  isOpen: boolean;
  position: ModalPosition;
  size: ModalSize;
  direction: ElementDirection;
  formDirection: ElementDirection;
  theme: ModalButtonTheme;
  onClose: () => void;
  modalTitle?: string;
  modalText?: string;
  primaryButtonText?: string;
  secondButtonText?: string;
}

type Story = StoryObj<ModalStoryProps>;

export const Modal_Story_Playground: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <div
        style={{
          width: `${args.device}`,
        }}
      >
        <button onClick={onOpen}>click me, open modal!</button>
        <Modal isOpen={args.isOpen} onClose={onClose} device={args.device} position={args.position}>
          <Modal.ModalContent size={args.size}>
            <Modal.ModalHeader>
              <Modal.ModalTitle text={args.modalTitle} />
              <Modal.ModalCloseButton onCloseButtonClick={onClose} />
            </Modal.ModalHeader>
            <h1>{args.modalText}</h1>
            <Modal.ModalFooter direction={args.direction}>
              <Modal.ModalButton theme="dark">{args.primaryButtonText}</Modal.ModalButton>
              <Modal.ModalButton onClick={onClose}>{args.secondButtonText}</Modal.ModalButton>
            </Modal.ModalFooter>
          </Modal.ModalContent>
        </Modal>
      </div>
    );
  },
};

export const PromptModal_Multi_Input: Story = {
  argTypes: {
    formDirection: {
      options: ["row", "column"],
      control: {
        type: "radio",
      },
    },
  },

  render: (args) => {
    return (
      <Modal isOpen={true} onClose={args.onClose}>
        <Modal.ModalContent size={args.size}>
          <Modal.ModalHeader>
            <Modal.ModalTitle text="쿠폰 번호를 입력해 주세요." />
          </Modal.ModalHeader>
          <Modal.ModalForm direction={args.formDirection}>
            <Modal.ModalInput />
            <Modal.ModalInput />
          </Modal.ModalForm>
          <Modal.ModalFooter direction={args.direction} justify="end">
            <Modal.ModalButton theme="white" size="medium" width="fixed">
              취소
            </Modal.ModalButton>
            <Modal.ModalButton theme="dark" size="medium" width="fixed">
              확인
            </Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal.ModalContent>
      </Modal>
    );
  },
};
