import type { Meta } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import { useState } from "react";

const meta = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
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
