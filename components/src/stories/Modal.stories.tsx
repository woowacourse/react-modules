import type { Meta } from "@storybook/react";
import Modal from "../lib/Modal";
import { useState } from "react";

const meta = {
  title: "Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      children={<p>테스트</p>}
    />
  );
};

export const CenterModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="center"
    />
  );
};

export const BottomModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="bottom"
    />
  );
};

export const ConfirmButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      primaryButton={true}
      primaryButtonText="확인"
      position="center"
    />
  );
};

export const CloseButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      primaryButton={true}
      primaryButtonText="확인"
      hasTopCloseButton={false}
      secondaryButton={true}
      secondaryButtonText="닫기"
      position="center"
    />
  );
};
