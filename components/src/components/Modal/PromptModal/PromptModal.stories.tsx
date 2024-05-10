import "../../../index.css";
import type { Meta, StoryObj } from "@storybook/react";

import { PromptModal, ModalProvider, useModalAction } from "../../../lib";
import { useEffect } from "react";
import { Props } from "./PromptModal";

const TestModal = (props: Props) => {
  const action = useModalAction();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  return (
    <>
      <button onClick={action.handleOpen}>모달을 오픈하는 버튼입니다.</button>
      <PromptModal {...props} />
    </>
  );
};

const meta = {
  title: "PromptModal",
  component: TestModal,
  argTypes: {
    title: { name: "모달의 제목" },
    width: { name: "모달의 너비" },
    theme: { name: "색상 테마" },
    onSubmit: { name: "확인 버튼을 눌렀을 때 실행되는 함수" },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  name: "기본 Prompt 모달",
  args: {
    title: "입력해주세요.",
    width: 300,
    onSubmit: (value?: string) => {
      console.log(value);
    },
  },
};

export const ReverseTheme: Story = {
  name: "반대 되는 테마 속성",
  args: {
    title: "입력해주세요.",
    width: 300,
    theme: window.matchMedia("(prefers-color-scheme: light)").matches ? "dark" : "light",
    onSubmit: (value?: string) => {
      console.log(value);
    },
  },
};
