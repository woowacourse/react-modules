import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "버튼 컴포넌트",
      },
    },
  },
  argTypes: {
    size: {
      description: "버튼 크기",
    },
    buttonText: {
      description: "버튼 내용",
    },
    color: {
      description: "버튼 색상",
    },
    onClick: {
      description: "버튼 클릭 이벤트 함수",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
  },
};

export const SmallButton: Story = {
  args: {
    size: "small",
    buttonText: "작은버튼",
    onClick: () => {},
  },
};

export const MediumButton: Story = {
  args: {
    size: "medium",
    buttonText: "중간버튼",
    onClick: () => {},
  },
};

export const LargeButton: Story = {
  args: {
    size: "large",
    buttonText: "큰버튼",
    onClick: () => {},
  },
};

export const WhiteButton: Story = {
  args: {
    size: "large",
    buttonText: "하얀색 버튼",
    color: "white",
    onClick: () => {},
  },
};
