import { useEffect, RefObject } from "react";

export function useFocusTrap<T extends HTMLElement>(
  modalRef: RefObject<T | null>
) {
  useEffect(() => {
    const modalEl = modalRef.current;
    if (!modalEl) return;

    const prevActive = document.activeElement as HTMLElement | null;
    const nodes = Array.from(
      modalEl.querySelectorAll<HTMLElement>("button, input")
    );
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
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
  }, [modalRef]);
}
