import { useState } from "react";
import { Modal, ModalProps } from "./Modal";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    ModalComponent: (props: Omit<ModalProps, "isOpen">) => (
      <Modal {...props} isOpen={isOpen} onClose={closeModal} />
    ),
  };
};
