import Modal, { POSITIONS } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";
import "../reset.css";
import useModalState from "./useModalState";

const ModalWrapper = ({ onOpen = () => {}, onConfirm = () => {}, onClose = () => {}, ...restProps }) => {
  const { isOpen, closeModal, confirmModal } = useModalState(true, { onOpen, onClose, onConfirm });
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      confirmModal={confirmModal}
      {...restProps}
    />
  );
};

const meta = {
  title: "Modal",
  component: ModalWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Modal Component",
      },
    },
  },
  argTypes: {
    position: {
      type: "string",
      control: {
        type: "select",
      },
      options: [...POSITIONS],
      description: "Floating Position",
    },
    title: {
      type: "string",
      control: {
        type: "text",
      },
      description: "Modal Title",
    },
    description: {
      type: "string",
      control: {
        type: "text",
      },
    },
    close: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      description: "Show Close Button or Not",
    },
    cancelLabel: {
      type: "string",
      control: {
        type: "text",
      },
      description: "Cancel Button Label (if empty, Cancel Button will be hidden)",
    },
    confirmLabel: {
      type: "string",
      control: {
        type: "text",
      },
      description: "Confirm Button Label (if empty, Confirm Button will be hidden)",
    },
  },
  args: {
    position: "center",
    title: "title",
    description: "description",
    close: false,
    cancelLabel: undefined,
    confirmLabel: undefined,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: "기본 상태" } },
  },
};

export const ConfirmButton: Story = {
  parameters: {
    docs: { description: { story: "확인버튼이 존재하는 상태" } },
  },
  args: {
    confirmLabel: "confirm",
    onConfirm: () => {
      alert("confirm");
    },
  },
};

export const CancelButton: Story = {
  parameters: {
    docs: { description: { story: "취소버튼이 존재하는 상태" } },
  },
  args: {
    cancelLabel: "cancel",
    onClose: () => {
      alert("close");
    },
  },
};

export const ConfirmAndCancelButton: Story = {
  parameters: {
    docs: { description: { story: "확인/취소 버튼이 존재하는 상태" } },
  },

  args: {
    confirmLabel: "확인",
    cancelLabel: "취소",
    onClose: () => {
      alert("close");
    },
    onConfirm: () => {
      alert("confirm");
    },
  },
};

export const CloseButton: Story = {
  parameters: {
    docs: { description: { story: "닫기버튼이 존재하는 상태" } },
  },
  args: {
    close: true,
    onClose: () => {
      alert("close");
    },
  },
};

export const Full: Story = {
  parameters: {
    docs: { description: { story: "확인/취소버튼과 끄기버튼이 존재하는 상태" } },
  },
  args: {
    close: true,
    confirmLabel: "확인",
    cancelLabel: "취소",
    onClose: () => {
      alert("close");
    },
    onConfirm: () => {
      alert("confirm");
    },
  },
};
