import "../../../index.css";
import type { Meta, StoryObj } from "@storybook/react";

import { AlertModal, ModalProvider, useModalAction } from "../../../lib";
import { useEffect } from "react";
import { Props } from "./AlertModal";

const TestModal: React.FC<Props> = (props) => {
  const action = useModalAction();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  return (
    <>
      <button onClick={action.handleOpen}>모달을 오픈하는 버튼입니다.</button>
      <AlertModal {...props} />
    </>
  );
};

const meta = {
  title: "AlertModal",
  component: TestModal,
  argTypes: {
    title: { name: "모달의 제목" },
    width: { name: "모달의 너비" },
    children: { name: "버튼 내부 요소" },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

function Children() {
  return <div>컨텐츠 입니다.</div>;
}

export const Default: Story = {
  name: "기본 Alert 모달",
  args: {
    title: "제목입니다.",
    width: 300,
    children: <Children />,
  },
};
