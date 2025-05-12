import { useRef, useMemo } from 'react';

function useFocusTrap(open: boolean) {
  const firstRef = useRef<HTMLElement | null>(null);
  const lastRef = useRef<HTMLElement | null>(null);

  const findFocusable = (modal: HTMLElement) => {
    const focusableList = [];
    for (const child of Array.from(modal.children) as HTMLElement[]) {
      if (child.tabIndex >= 0) {
        focusableList.push(child);
      }

      findFocusable(child);
    }

    return focusableList;
  };

  const setRef = (modal: HTMLDialogElement) => {
    if (!modal) {
      return;
    }

    const focusableList = findFocusable(modal);
    firstRef.current = focusableList[0];
    lastRef.current = focusableList[focusableList.length - 1];
    if (focusableList.length === 0) {
      return;
    }

    firstRef.current.focus();
  };

  const handleKeyDownTab = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === firstRef.current) {
        event.preventDefault();
        lastRef.current?.focus();
      }
    } else {
      if (document.activeElement === lastRef.current) {
        event.preventDefault();
        firstRef.current?.focus();
      }
    }
  };

  return useMemo(() => ({ setRef, handleKeyDownTab }), [open]);
}

export default useFocusTrap;
