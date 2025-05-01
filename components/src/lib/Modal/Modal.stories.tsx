import type { Meta } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import { useEffect, useState } from "react";

const meta = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "모달의 위치 지정",
      control: { type: "radio" },
      options: ["center", "bottom"],
      table: { defaultValue: { summary: "center" } },
    },
    title: {
      description: "모달의 제목 및 스타일 설정",
      table: {
        type: { summary: "{ text?: string; color?: string; size?: number; }" },
      },
    },
    showCloseButton: {
      description: "닫기 버튼 표시 여부",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
    backgroundColor: {
      description: "모달 배경색",
      control: { type: "color" },
    },
    children: {
      description: "모달 내부에 표시될 콘텐츠",
    },
    isOpen: {
      description: "모달 열림 상태",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "모달 닫기 함수",
      action: "closed",
      table: { type: { summary: "() => void" } },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        테스트 열기 버튼
      </button>
      <Modal {...args} isOpen={isOpen} onClose={closeModal}>
        {args.children ?? "Default Contents"}
      </Modal>
    </>
  );
};

export const WithoutCloseButton = (args: ModalProps) => (
  <Default
    {...args}
    title={{ text: "Without Close Button" }}
    showCloseButton={false}
  >
    Without Close Button Contents
  </Default>
);

export const ModalInDarkMode = (args: ModalProps) => (
  <Default
    {...args}
    title={{ text: "Dark Mode", color: "#fff" }}
    backgroundColor="#000"
  >
    <div style={{ color: "#fff" }}>Dark Mode Contents</div>
  </Default>
);

export const ModalInLightMode = (args: ModalProps) => (
  <Default {...args} title={{ text: "Light Mode" }}>
    Light Mode Contents
  </Default>
);

export const BottomModal = (args: ModalProps) => (
  <Default {...args} position="bottom" title={{ text: "Bottom Mode" }}>
    Bottom Modal Contents
  </Default>
);
