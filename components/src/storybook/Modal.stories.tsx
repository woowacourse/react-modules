import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../lib";

const meta = {
  title: "Modal",
  component: Modal,
  argTypes: {
    position: { name: "모달의 위치. center 혹은 bottom 값" },
    title: { name: "모달의 제목" },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

const Component = () => {
  return <div>child입니다.</div>;
};

export const Default: Story = {
  name: "기본 모달",
  args: {},
};

export const LongTitle: Story = {
  name: "타이틀에 긴 문자열이 들어갈 경우",
  args: {
    title:
      "modal title blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
  },
};

export const BottomModal: Story = {
  name: "바닥에 붙어있는 modal",
  args: {
    position: "bottom",
  },
};

export const ConfirmButton: Story = {
  name: "타입은 confirm, 사이즈는 small",
  args: {
    position: "center",
    title: "modal title",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    type: "confirm",
    size: "small",
  },
};

export const CloseButtonBottom: Story = {
  name: "타입은 prompt, 사이즈는 large",
  args: {
    position: "center",
    title: "modal title",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    type: "prompt",
    size: "large",
  },
};
