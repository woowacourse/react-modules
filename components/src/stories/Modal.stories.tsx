import React from "react";

import type { StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

import Modal from "../lib/Modal/Modal";

import { ElementDirection, ModalButtonTheme, ModalPosition, ModalSize } from "../lib/types/modal";

const meta = {
  title: "Modal",

  component: Modal,

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
  },

  args: {
    isOpen: false,
    position: "center",
    size: "medium",
    direction: "row",
    onClose: fn(),
  },
};

export default meta;

interface ModalProps {
  isOpen: boolean;
  position: ModalPosition;
  size: ModalSize;
  direction: ElementDirection;
  formDirection: ElementDirection;
  theme: ModalButtonTheme;
  onClose: () => void;
}

type Story = StoryObj<ModalProps>;

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
              <Modal.ModalTitle text="약관에 동의해 주세요." />
              <Modal.ModalCloseButton onCloseButtonClick={onClose} />
            </Modal.ModalHeader>
            <h1>테스트 모달입니다</h1>
            <Modal.ModalFooter direction={args.direction}>
              <Modal.ModalButton theme="dark">동의하고 저장하기</Modal.ModalButton>
              <Modal.ModalButton onClick={onClose}>닫기</Modal.ModalButton>
            </Modal.ModalFooter>
          </Modal.ModalContent>
        </Modal>
      </div>
    );
  },
};

export const AlertModal: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "375px",
          margin: "auto",
        }}
      >
        <Modal isOpen={true} onClose={args.onClose}>
          <Modal.ModalContent size={args.size}>
            <Modal.ModalHeader>
              <Modal.ModalTitle text="아이디를 입력해 주세요." />
            </Modal.ModalHeader>
            <span>아이디는 필수로 입력해야 합니다.</span>
            <Modal.ModalFooter direction={args.direction} justify="end">
              <Modal.ModalButton theme="dark" size="medium" width="fixed">
                확인
              </Modal.ModalButton>
            </Modal.ModalFooter>
          </Modal.ModalContent>
        </Modal>
      </div>
    );
  },
};

export const ConfirmModal: Story = {
  render: (args) => {
    return (
      <Modal isOpen={true} onClose={args.onClose}>
        <Modal.ModalContent size={args.size}>
          <Modal.ModalHeader>
            <Modal.ModalTitle text="카드를 삭제하시겠습니까?" />
          </Modal.ModalHeader>
          <span>삭제하면 복구할 수 없습니다.</span>
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

export const PromptModal: Story = {
  render: (args) => {
    return (
      <Modal isOpen={true} onClose={args.onClose}>
        <Modal.ModalContent size={args.size}>
          <Modal.ModalHeader>
            <Modal.ModalTitle text="쿠폰 번호를 입력해 주세요." />
          </Modal.ModalHeader>

          <Modal.ModalForm>
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
