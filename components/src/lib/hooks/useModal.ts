import { useEffect, useState } from "react";

const useModal = (): {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleClose);
    }

    return () => window.removeEventListener("keydown", handleClose);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpen, handleClose };
};

export default useModal;
