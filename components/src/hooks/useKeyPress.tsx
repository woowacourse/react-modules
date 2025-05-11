import { useEffect } from "react";

interface useKeyPressProps {
  targetKey: string;
  isOpen: boolean;
  onClose: () => void;
}

export function useKeyPress({ targetKey, isOpen, onClose }: useKeyPressProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen, onClose]);
}
