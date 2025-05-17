import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const FocusTrap = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);

  const focusableSelector = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  useEffect(() => {
    const container = containerRef.current;

    const focusableElements = container.querySelectorAll(focusableSelector);

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" && !e.shiftKey) return;

      const activeElement = document.activeElement;

      if (firstElement === activeElement && e.shiftKey) {
        e.preventDefault();
        lastElement.focus();
      }
      if (lastElement === activeElement && e.key === "Tab") {
        e.preventDefault();
        firstElement.focus();
      }
    };
    container.addEventListener("keydown", handleKeyDown);
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return <TrapWrapper ref={containerRef}>{children}</TrapWrapper>;
};

const TrapWrapper = styled.div`
  display: contents;
`;

export default FocusTrap;
