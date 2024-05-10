import "../../../index.css";
import type { Meta, StoryObj } from "@storybook/react";

import { AlertModal, ModalProvider, useModalAction } from "../../../lib";
import { useEffect } from "react";
import ConfirmModal, { Props } from "./ConfirmModal";

const TestModal: React.FC<Props> = (props) => {
  const action = useModalAction();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  return (
    <>
      <button onClick={action.handleOpen}>모달을 오픈하는 버튼입니다.</button>
      <ConfirmModal {...props} />
    </>
  );
};

const meta = {
  title: "ConfirmModal",
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
  return <div>삭제하면 복구할 수 없습니다.</div>;
}

export const Default: Story = {
  name: "기본 Confirm 모달",
  args: {
    title: "삭제하시겠습니까?",
    width: 300,
    children: <Children />,
  },
};
