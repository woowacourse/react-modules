import { useEffect, useRef } from "react";

import { StyledModalContent } from "./ModalContent.styled";

import { ModalContentProps } from "./ModalContent.types";
import { useModal } from "../ModalRoot";

const ModalContent = ({ children, position, size }: ModalContentProps) => {
  const { isOpen } = useModal();
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const firstFocusableElement = getFocusableElements()[0];

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

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

    function getFocusableElements(): HTMLElement[] {
      if (!modalContentRef.current) return [];

      const selector =
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
      const elements =
        modalContentRef.current.querySelectorAll<HTMLElement>(selector);

      return Array.from(elements).filter((el) => {
        return (
          !el.hasAttribute("disabled") &&
          !el.getAttribute("aria-hidden") &&
          el.offsetParent !== null
        );
      });
    }

    window.addEventListener("keydown", handleTabKey);

    return () => {
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  return (
    <StyledModalContent position={position} size={size} ref={modalContentRef}>
      {children}
    </StyledModalContent>
  );
};

export default ModalContent;
