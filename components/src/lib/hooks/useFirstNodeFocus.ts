import { useEffect } from "react";

export default function useFirstNodeFocus({
  ref,
  isOpen,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}) {
  function focusFirstNode() {
    if (ref?.current) {
      const firstFocusableElement = ref.current.querySelector(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement;
      firstFocusableElement?.focus();
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    focusFirstNode();
  }, [isOpen]);
}
