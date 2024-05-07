import { Modal } from "../lib";
import { POSITIONS } from "../lib/Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "../reset.css";

const meta = {
  title: "Modal",
  component: Modal,
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
    isOpenState: {
      description: "Is Open State",
    },
    onOpen: {
      type: "function",
      description: "Open Event",
    },
    onConfirm: {
      type: "function",
      description: "Confirm Event",
    },
    onClose: {
      type: "function",
      description: "Close Event",
    },
  },
  args: {
    position: "center",
    title: "title",
    description: "description",
    close: false,
    cancelLabel: undefined,
    confirmLabel: undefined,
    isOpenState: [true, fn()],
    onOpen: () => {},
    onConfirm: () => {},
    onClose: () => {},
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
  },
};

export const CancelButton: Story = {
  parameters: {
    docs: { description: { story: "취소버튼이 존재하는 상태" } },
  },
  args: {
    cancelLabel: "cancel",
  },
};

export const ConfirmAndCancelButton: Story = {
  parameters: {
    docs: { description: { story: "확인/취소 버튼이 존재하는 상태" } },
  },
  args: {
    confirmLabel: "확인",
    onConfirm: () => {
      alert("confirm");
    },
    cancelLabel: "닫기",
    onClose: () => {
      alert("close");
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
