import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (isOpen) onOpen();
    else onClose();
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const confirmModal = () => {
    onConfirm && onConfirm();
    closeModal();
  };
  return { isOpen, openModal, closeModal, confirmModal };
};

export default useModalState;
