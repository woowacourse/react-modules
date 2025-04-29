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

  return <Modal title="테스트" isOpen={isOpen} setIsOpen={setIsOpen} />;
};
