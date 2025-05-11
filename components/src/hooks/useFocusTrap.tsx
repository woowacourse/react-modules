import { RefObject, useEffect } from "react";

interface UseAutoFocusProps {
  modalRef: RefObject<HTMLElement | null>;
  isOpen: boolean;
}

export default function useFocusTrap({ modalRef, isOpen }: UseAutoFocusProps) {
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);
    firstElement.focus();

    return () => {
      document.removeEventListener("keydown", trapFocus);
    };
  }, [modalRef, isOpen]);
}
