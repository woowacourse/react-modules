import { ModalCloseTriggers } from "@/types/modal";
import { type RefObject, useEffect, useRef } from "react";

interface UseModalCloseTriggersParams {
  onRequestClose: () => void;
  closeTrigger: ModalCloseTriggers;
}

const useModalCloseTriggers = <T extends HTMLElement>({
  onRequestClose,
  closeTrigger,
}: UseModalCloseTriggersParams): RefObject<T | null> => {
  const { outsideClick, escapeKey } = closeTrigger;
  useEffect(
    function escKeyDownEffect() {
      if (!escapeKey) {
        return;
      }

      const handleDocumentKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onRequestClose();
        }
      };

      document.addEventListener("keydown", handleDocumentKeyDown);

      return () => {
        document.removeEventListener("keydown", handleDocumentKeyDown);
      };
    },
    [escapeKey, onRequestClose]
  );

  const ref = useRef<T>(null);

  useEffect(
    function outsideClickEffect() {
      if (!outsideClick) {
        return;
      }

      const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
        const container = ref.current;
        if (!container || container.contains(e.target as Node)) {
          e.stopPropagation();
          return;
        }
        onRequestClose();
      };

      document.addEventListener("mousedown", handleDocumentClick);

      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    },
    [outsideClick, onRequestClose]
  );

  return ref;
};

export default useModalCloseTriggers;
