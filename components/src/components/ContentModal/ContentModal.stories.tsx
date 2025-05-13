import type { Meta, StoryObj } from "@storybook/react";
import ContentModal from "./index";
import Button from "@/components/Button";

const meta = {
  title: "Component/ContentModal",
  component: ContentModal,
  tags: ["autodocs"],
  args: {
    title: "ContentModal Title",
    onRequestClose: () => {},
    size: "medium",
    hasCloseButton: true,
    closeTrigger: {
      outsideClick: true,
      escapeKey: true,
    },
    content: <p>ContentModal Content</p>,
    containerAs: "div",
    buttonElements: [
      <Button key="cancel" variant="secondary" type="button">
        취소
      </Button>,
      <Button key="confirm" variant="primary" type="submit">
        확인
      </Button>,
    ],
  },
} satisfies Meta<typeof ContentModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
