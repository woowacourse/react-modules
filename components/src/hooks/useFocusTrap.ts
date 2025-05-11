import { useEffect, useRef } from "react";
import { domainToUnicode } from "url";

const useFocusTrap = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement;

    function getFocusableElements() {
      if (!ref.current) return [];

      const focusableSelectors = [
        'a[href]:not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'textarea:not([disabled]):not([tabindex="-1"])',
        'input:not([disabled]):not([tabindex="-1"])',
        'select:not([disabled]):not([tabindex="-1"])',
        '[tabindex]:not([tabindex="-1"])',
      ];

      const elements = ref.current.querySelectorAll<HTMLElement>(
        focusableSelectors.join(",")
      );

      return Array.from(elements);
    }

    const setInitialFocus = () => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
        console.log("포커스 설정됨:", focusableElements[0]); // 디버깅용
      } else {
        console.log("포커스 가능한 요소 없음"); // 디버깅용
      }
    };

    const timeoutId = setTimeout(() => {
      setInitialFocus();
    }, 50);

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) firstElement.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key != "Tab") return;
      if (!ref.current) return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleTabKey);
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, []);
  return ref;
};

export default useFocusTrap;
