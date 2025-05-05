import { useEffect } from "react";

interface useEscapeKeyCloseProps {
  isOpen: boolean;
  onClose: () => void;
}

function useEscapeKeyClose({ isOpen, onClose }: useEscapeKeyCloseProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
}
export default useEscapeKeyClose;
