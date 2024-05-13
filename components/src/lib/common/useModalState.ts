import { useState } from "react";

export interface Callbacks {
  onOpen?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
}

const useModalState = (
  initialIsOpen: boolean,
  { onOpen = () => {}, onClose = () => {}, onConfirm = () => {} }: Callbacks
) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const openModal = () => {
    setIsOpen(true);
    onOpen && onOpen();
  };
  const closeModal = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const confirmModal = () => {
    onConfirm && onConfirm();
    closeModal();
  };
  return { isOpen, openModal, closeModal, confirmModal };
};

export default useModalState;
