import { RefObject, useEffect } from "react";

const focusableSelectors = [
  "a[href]",
  "area[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
];
const useFocusTrap = (
  modalRef: RefObject<HTMLDivElement | null>,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (!modalRef.current) return;

      const elements = modalRef.current.querySelectorAll<HTMLElement>(
        focusableSelectors.join(",")
      );
      const focusables = Array.from(elements);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
};

export default useFocusTrap;
