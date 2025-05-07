import { useEffect, RefObject } from "react";

export function useFocusTrap<T extends HTMLElement>(
  modalRef: RefObject<T | null>,
  isOpen: boolean,
  onClose: () => void
) {
  useEffect(() => {
    const modalEl = modalRef.current;
    if (!isOpen || !modalEl) return;

    const prevActive = document.activeElement as HTMLElement | null;
    const nodes = Array.from(
      modalEl.querySelectorAll<HTMLElement>(
        'button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    modalEl.addEventListener("keydown", onKeyDown);
    return () => {
      modalEl.removeEventListener("keydown", onKeyDown);
      prevActive?.focus();
    };
  }, [isOpen, onClose, modalRef]);
}
