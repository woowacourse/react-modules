import { useEffect, useState } from "react";
import Modal, { ModalProps } from "../Modal";
import meta from "./Modal.meta";

export default {
  ...meta,
  title: "modal/Styles",
  tags: ["autodocs"],
};

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
        모달 열기
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

export const ModalInLightMode = (args: ModalProps) => (
  <Default {...args} title={{ text: "Light Mode" }} theme="light">
    Light Mode Contents
  </Default>
);

export const ModalInDarkMode = (args: ModalProps) => (
  <Default {...args} title={{ text: "Dark Mode" }} theme="dark">
    <div style={{ color: "#fff" }}>Dark Mode Contents</div>
  </Default>
);

export const ModalInLightModeWithActionButtons = (args: ModalProps) => (
  <Default {...args} title={{ text: "Light Mode" }} theme="light">
    <p style={{ color: "#000" }}>Light Mode Contents</p>
    <div style={{ display: "flex", width: "100%", gap: "10px" }}>
      <Modal.ActionButtons />
    </div>
  </Default>
);

export const ModalInDarkModeWithActionButtons = (args: ModalProps) => (
  <Default {...args} title={{ text: "Dark Mode" }} theme="dark">
    <p style={{ color: "#fff" }}>Dark Mode Contents</p>
    <div style={{ display: "flex", width: "100%", gap: "10px" }}>
      <Modal.ActionButtons />
    </div>
  </Default>
);

export const BottomModal = (args: ModalProps) => (
  <Default {...args} position="bottom" title={{ text: "Bottom Mode" }}>
    Bottom Modal Contents
  </Default>
);

export const SmallSizeModal = (args: ModalProps) => (
  <Default {...args} size="small" title={{ text: "Small Size Modal" }}>
    Small Size Modal Contents
  </Default>
);

export const MediumSizeModal = (args: ModalProps) => (
  <Default {...args} size="medium" title={{ text: "Medium Size Modal" }}>
    Medium Size Modal Contents
  </Default>
);

export const LargeSizeModal = (args: ModalProps) => (
  <Default {...args} size="large" title={{ text: "Large Size Modal" }}>
    Large Size Modal Contents
  </Default>
);
