import { useState } from "react";

function useModalState(initialValue: boolean) {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  return { isOpen, modalOpen, modalClose };
}

export default useModalState;
