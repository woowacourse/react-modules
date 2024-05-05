import type { Meta, StoryObj } from "@storybook/react";

import { ModalHeader, ModalProvider } from "../lib";
import ThemeProvider from "../components/ContextProvider/ThemeProvider";

const meta = {
  title: "ModalHeader",
  component: ModalHeader,
  argTypes: {
    hasCloseButton: { name: "닫기 버튼의 유무" },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <ThemeProvider value="light">
          <Story />
        </ThemeProvider>
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof ModalHeader>;

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  name: "기본 모달 헤더",
  args: {
    children: "제목입니다.",
  },
};

export const LongTitle: Story = {
  name: "매우 긴 제목",
  args: {
    children:
      "제목입니다. Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title",
  },
};

export const ReverseColorButton: Story = {
  name: "닫기 버튼이 없는 모달 헤더",
  args: {
    hasCloseButton: false,
    children: "제목입니다.",
  },
};
