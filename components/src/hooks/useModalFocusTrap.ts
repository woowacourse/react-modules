import { useEffect, useRef } from "react";

const focusableSelectors = [
  "button",
  "a[href]",
  "input",
  "select",
  "textarea",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

const useModalFocusTrap = (isOpen: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements =
      modalElement.querySelectorAll<HTMLElement>(focusableSelectors);
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const isFirst = document.activeElement === firstElement;
      const isLast = document.activeElement === lastElement;

      if (e.shiftKey && isFirst) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && isLast) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    firstElement.focus();

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  return { modalRef };
};

export default useModalFocusTrap;
