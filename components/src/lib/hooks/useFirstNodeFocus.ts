import { useCallback, useEffect } from "react";

export default function useFirstNodeFocus({
  ref,
  isOpen,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}) {
  const focusFirstNode = useCallback(() => {
    if (ref?.current) {
      const firstFocusableElement = ref.current.querySelector(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement;
      firstFocusableElement?.focus();
    }
  }, [ref.current]);

  useEffect(() => {
    if (!isOpen) return;
    focusFirstNode();
  }, [isOpen]);
}
