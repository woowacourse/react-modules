import type { Meta, StoryObj } from "@storybook/react";
import ContentModal from "./index";
import Button from "@/components/Button";

const meta = {
  title: "Component/ContentModal",
  component: ContentModal,
  tags: ["autodocs"],
  args: {
    title: "ContentModal Title",
    content: <p>ContentModal Content</p>,
    hasCloseButton: true,
    containerAs: "div",
    size: "medium",
    buttonElements: [
      <Button variant="secondary" type="button">
        취소
      </Button>,
      <Button variant="primary" type="submit">
        확인
      </Button>,
    ],
  },
} satisfies Meta<typeof ContentModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
